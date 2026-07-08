"""
OnboardingAgent — conversational profile gathering for fitness advisors.
"""

import json
import logging
import re
from datetime import datetime
from typing import Any, Dict, List, Optional

from app.core.database import get_database

LOG = logging.getLogger(__name__)

# NOTE: field keys are kept stable (knowledge_level, cyber_role, ...) for storage
# compatibility with the user profile schema; the questions/descriptions below
# are themed for a fitness / bodybuilding advisor panel.
PROFILE_FIELDS: List[tuple] = [
    ("knowledge_level", "What is your fitness experience level?",
     "Level such as beginner, intermediate, or advanced"),
    ("timezone", "What time zone are you usually in?",
     "IANA timezone or region such as America/New_York, Europe/London, UTC"),
    ("cyber_role", "What best describes your training focus right now?",
     "Focus such as general fitness, bodybuilding/hypertrophy, powerlifting/strength, cutting, or athlete"),
    ("organization_type", "Where do you usually train?",
     "Commercial gym, home gym, campus gym, CrossFit box, outdoor/calisthenics, or hybrid"),
    ("primary_domains", "Which muscle groups or areas do you focus on most?",
     "Comma-separated areas such as chest, back, legs, arms, core, conditioning"),
    ("certifications", "What equipment do you have access to?",
     "List such as dumbbells, barbell, cables, bands, machines, or bodyweight only"),
    ("tools_stack", "What apps or trackers do you use regularly?",
     "MyFitnessPal, Strong, Hevy, Apple Health, a spreadsheet, etc."),
    ("compliance_focus", "Any dietary approach or restrictions we should know about?",
     "High-protein, vegetarian/vegan, cutting, bulking, allergies, or none"),
    ("current_goals", "What are you trying to accomplish in the next few months?",
     "Muscle gain, fat loss, strength PRs, first pull-up, recomposition, etc."),
    ("learning_preferences", "How do you prefer to train?",
     "Full-body, upper/lower or bro splits, supersets, progressive overload, etc."),
]


class OnboardingAgent:
    def __init__(self, llm: Any) -> None:
        self.llm = llm

    SKIP_SENTINEL = "__skipped__"

    @staticmethod
    def _field_has_value(val: Any) -> bool:
        if val is None:
            return False
        if isinstance(val, str):
            return bool(val.strip())
        if isinstance(val, list):
            return len(val) > 0
        return bool(val)

    async def chat(self, user_input: str, user_id: Any, existing_profile: Dict[str, Any]) -> Dict[str, Any]:
        filled = {k for k, _, _d in PROFILE_FIELDS
                  if self._field_has_value(existing_profile.get(k))}
        missing = [(k, q, desc) for k, q, desc in PROFILE_FIELDS if k not in filled]
        completion = int(len(filled) / len(PROFILE_FIELDS) * 100)
        current_field = missing[0][0] if missing else None

        extracted = await self._extract_fields(user_input, missing, current_field)

        db = get_database()
        if extracted:
            from app.api.routes.user_profile import _normalize_field
            real_values: Dict[str, Any] = {}
            skipped_keys: set = set()
            for k, v in extracted.items():
                if v == self.SKIP_SENTINEL:
                    skipped_keys.add(k)
                elif v:
                    real_values[k] = _normalize_field(k, v)

            update: Dict[str, Any] = {}
            if real_values:
                update.update(real_values)
            for sk in skipped_keys:
                update[sk] = ""

            if update:
                update["updated_at"] = datetime.utcnow()
                await db.user_profiles.update_one(
                    {"user_id": user_id},
                    {"$set": update, "$setOnInsert": {"user_id": user_id}},
                    upsert=True,
                )
                filled.update(real_values.keys())
                filled.update(skipped_keys)
                missing = [(k, q, desc) for k, q, desc in PROFILE_FIELDS if k not in filled]
                completion = int(len(filled) / len(PROFILE_FIELDS) * 100)

        if not missing:
            return {
                "reply": "Great — your fitness profile is complete. Your coaches will tailor workouts, "
                         "nutrition, and next steps to your goals, equipment, and experience.",
                "progress": 100,
                "complete": True,
            }

        reply = await self._generate_next_question(user_input, existing_profile, filled, missing)
        return {"reply": reply, "progress": completion, "complete": False}

    async def _extract_fields(
        self, text: str, missing_fields: List[tuple], current_field: Optional[str] = None
    ) -> Dict[str, Any]:
        if not text.strip():
            return {}
        skip_instruction = ""
        if current_field:
            skip_instruction = (
                f'\nThe question just asked was about "{current_field}". '
                "If the user declines, refuses, says they don't know, says skip, "
                f'return {{"{current_field}": "__skipped__"}}.'
            )
        field_descriptions = "\n".join(f'- "{k}": {desc}' for k, _q, desc in missing_fields)
        system = (
            "Extract fitness profile fields from the user's message. "
            "Return ONLY valid JSON with field names as keys. "
            "For list fields return a JSON array. "
            f"{skip_instruction}\n"
            f"Fields:\n{field_descriptions}"
        )
        try:
            raw = await self.llm.generate(
                system_prompt=system,
                context=[{"role": "user", "content": text}],
                temperature=0.1,
                max_tokens=512,
            )
            cleaned = re.sub(r"```(?:json)?", "", raw).strip()
            m = re.search(r"\{.*\}", cleaned, re.DOTALL)
            if m:
                return json.loads(m.group(0))
        except Exception as e:
            LOG.warning(f"Extraction failed: {e}")
        return {}

    async def _generate_next_question(
        self, user_input: str, profile: Dict[str, Any], filled: set, missing: List[tuple]
    ) -> str:
        filled_parts: List[str] = []
        for k in filled:
            val = profile.get(k)
            if val:
                filled_parts.append(f"{k}={val}")
            else:
                filled_parts.append(f"{k}=DECLINED")
        filled_summary = ", ".join(filled_parts) or "nothing yet"
        next_field_key, next_field_q, _ = missing[0]
        system = (
            "You are a friendly fitness onboarding assistant. "
            "You help users build a profile so AI fitness coaches can personalize workouts and nutrition.\n"
            "RULES:\n"
            "- Respond in exactly ONE short paragraph (2-3 sentences).\n"
            "- Briefly acknowledge what they said, then ask ONE clear question.\n"
            "- End with a question mark.\n"
            "- No headings or labels like 'Question:'.\n"
            "- If they skipped a topic, say 'No problem!' and move on.\n"
            "- Never repeat topics already gathered or declined."
        )
        user_prompt = (
            f"User just said: \"{user_input}\"\n"
            f"Already gathered: {filled_summary}\n"
            f"Next topic: {next_field_key} — {next_field_q}\n"
            "Write a warm response that acknowledges them and asks about the next topic."
        )
        try:
            reply = await self.llm.generate(
                system_prompt=system,
                context=[{"role": "user", "content": user_prompt}],
                temperature=0.7,
                max_tokens=300,
            )
            if reply and "?" not in reply:
                reply = f"{reply} {next_field_q}"
            return reply
        except Exception as e:
            LOG.error(f"Question generation failed: {e}")
            return missing[0][1] if missing else "Tell me more about your fitness background!"
