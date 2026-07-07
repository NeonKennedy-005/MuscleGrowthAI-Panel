# MuscleGrowthAI Panel

CCAI advisor panel configuration for **MuscleGrowthAI**, modeled on [NeonClary/CCAI-Demo-Clary `FEAT_CybersecurityCanvas`](https://github.com/NeonClary/CCAI-Demo-Clary/tree/FEAT_CybersecurityCanvas).

## What's in this folder

| File / folder | Purpose |
|---------------|---------|
| `muscle_growth_config.yaml` | App UI, login fields, chat examples, orchestrator keywords, LLM/RAG settings |
| `personas/fitness_advisors/*.yaml` | Five advisor personas loaded at runtime |
| `advisor-panel-draft.json` | Completed draft (filled advisors + Lucide icon names) |

## Advisors

1. **Hypertrophy Coach** — splits, sets/reps, muscle-group programming
2. **Nutrition Strategist** — protein, macros, meal timing
3. **Recovery Specialist** — rest, stretching, soreness management
4. **Form & Safety Coach** — technique, breathing, injury prevention
5. **Program Planner** — scheduling, tracking, progression

## Integrate into CCAI-Demo-Clary

### 1. Clone the reference repo

```bash
git clone -b FEAT_CybersecurityCanvas https://github.com/NeonClary/CCAI-Demo-Clary.git
cd CCAI-Demo-Clary
git checkout -b FEAT_MuscleGrowthAI
```

### 2. Copy panel files

```bash
cp /path/to/MuscleGrowthAI/muscle_growth_config.yaml .
cp -R /path/to/MuscleGrowthAI/personas/fitness_advisors personas/
```

### 3. Point the app at your config

**Local backend** — in `multi_llm_chatbot_backend/.env`:

```env
CONFIG_PATH=/absolute/path/to/CCAI-Demo-Clary/muscle_growth_config.yaml
JWT_SECRET_KEY=your-long-random-secret
GEMINI_API_KEY=your-gemini-key
```

**Docker / Hugging Face Space** — edit the root `Dockerfile` `ENV CONFIG_PATH` line:

```dockerfile
ENV CONFIG_PATH=/home/user/app/muscle_growth_config.yaml
```

And add a `COPY` line alongside the other configs:

```dockerfile
COPY --chown=user muscle_growth_config.yaml ./muscle_growth_config.yaml
```

### 4. Run locally

```bash
# Backend
cd multi_llm_chatbot_backend
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
CONFIG_PATH=../muscle_growth_config.yaml uvicorn app.main:app --reload --port 8000

# Frontend (separate terminal)
cd phd-advisor-frontend
npm install
REACT_APP_API_URL=http://localhost:8000 npm start
```

Open http://localhost:3000 — you should see **AI Personalized Bodybuilding Plan** with five fitness advisors.

## Draft JSON → YAML mapping

Your canvas draft fields map to `muscle_growth_config.yaml` like this:

| Draft JSON field | YAML section |
|------------------|--------------|
| `appTitle`, `appSubtitle`, `primaryBrandColor` | `app:` |
| `headlinePrefix`, `headlineHighlight`, `homepageDescription` | `homepage:` |
| `featureCards` | `homepage.features` (icons → Lucide names) |
| `loginPageSubtitle`, `signupPageSubtitle` | `login:` |
| `userInfoRows` | `login.knowledge_levels` |
| `examplePromptCards` | `chat_page.examples` |
| `chatInputPlaceholder` | `chat_page.placeholder` |
| `sharedBasePrompt` | `personas.base_prompt` |
| `includedPersonaIds` / `advisors` | `personas/fitness_advisors/*.yaml` |

## Note on this machine

Xcode Command Line Tools (and `git`) are not installed here yet. Install them with `xcode-select --install` before cloning or pushing a branch.

## Next steps (optional)

- Deploy as a Hugging Face Space (copy Dockerfile pattern from the cybersecurity branch)
- Add custom advisor avatars under `multi_llm_chatbot_backend/app/assets/avatars/`
- Tune `orchestrator.specific_keywords` as you test real user questions
