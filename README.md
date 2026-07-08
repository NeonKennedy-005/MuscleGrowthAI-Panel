---
title: MuscleGrowthAI
emoji: 💪
colorFrom: purple
colorTo: indigo
sdk: docker
pinned: false
app_port: 7860
---

# MuscleGrowthAI Panel

An AI personalized bodybuilding assistant built on Neon AI's Collaborative
Conversational AI (CCAI) framework. Ask about hypertrophy programming,
nutrition, recovery, form, and progress tracking and get diverse perspectives
from a panel of five fitness AI advisors.

This repository is a **complete, deployable application** — the CCAI
multi-advisor stack (FastAPI backend + React frontend) wired to the
MuscleGrowthAI configuration in [`muscle_growth_config.yaml`](muscle_growth_config.yaml)
and the personas in [`personas/fitness_advisors/`](personas/fitness_advisors).

## Advisors

1. **Hypertrophy Coach** — splits, sets/reps, muscle-group programming
2. **Nutrition Strategist** — protein, macros, meal timing
3. **Recovery Specialist** — rest, stretching, soreness management
4. **Form & Safety Coach** — technique, breathing, injury prevention
5. **Program Planner** — scheduling, tracking, progression

## Hugging Face Spaces deployment

This Space ships as a single Docker image built from the repository-root
[`Dockerfile`](Dockerfile). The container:

1. Builds the React frontend (CRA) at image-build time with `REACT_APP_API_URL=""`
   so every `fetch` issues a relative URL.
2. Serves the bundled SPA from FastAPI at `/`, with the API on `/api/...`,
   `/auth/...`, etc. — all on the same `:7860` origin.
3. Persists user data (auth, profiles, chat sessions) in **SQLite via
   `aiosqlite`** at `${DATA_DIR}/muscle_growth_panel.db`. Mount a Hugging Face
   Storage Bucket at `/data` to make the database survive Space rebuilds.
   There is **no MongoDB** and no third-party data plane.

### Required Space secrets

| Secret | Purpose |
|--------|---------|
| `JWT_SECRET_KEY` | Signs auth tokens. Set this to a long random string. |
| `GEMINI_API_KEY` | Powers the default Gemini provider (`gemini-2.5-flash`). Get one at [Google AI Studio](https://aistudio.google.com/app/apikey). |
| `OPENAI_API_KEY` | Optional — only if you switch `llm.provider` to `openai`. |

Set these under **Settings → Variables and secrets** on the Space.

## Local deployment

**Do you need Docker?** No — Docker is optional. There are two supported paths,
and neither requires MongoDB (persistence is SQLite):

### Option A — Docker (simplest, mirrors the Space exactly)

Requires **Docker Desktop** only.

```bash
# From the repo root, create a .env with at least:
#   JWT_SECRET_KEY=some-long-random-string
#   GEMINI_API_KEY=your-gemini-key
docker compose up --build
```

Open <http://localhost:7860>. Override the host port with `MUSCLE_HOST_PORT` if
7860 is taken.

### Option B — Native (no Docker)

Requires **Python 3.12** and **Node.js 20+** (no Docker, no MongoDB).

**Backend** (terminal 1):

```bash
cd multi_llm_chatbot_backend
python -m venv venv
# Windows: venv\Scripts\activate   •   macOS/Linux: source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env         # then edit JWT_SECRET_KEY + GEMINI_API_KEY
uvicorn app.main:app --reload --port 8000
```

**Frontend** (terminal 2):

```bash
cd phd-advisor-frontend
npm install
# point the SPA at the backend from step above:
#   Windows PowerShell:  $env:REACT_APP_API_URL="http://localhost:8000"; npm start
#   macOS/Linux:         REACT_APP_API_URL=http://localhost:8000 npm start
npm start
```

Open <http://localhost:3000> — you should see **AI Personalized Bodybuilding
Plan** with the five fitness advisors.

## Configuration

All branding, login fields, chat examples, orchestrator keywords, and LLM/RAG
settings live in [`muscle_growth_config.yaml`](muscle_growth_config.yaml). The
backend resolves `personas.personas_dir` relative to that file, so the advisor
YAMLs in `personas/fitness_advisors/` load automatically. Point the app at a
different config with the `CONFIG_PATH` environment variable.
