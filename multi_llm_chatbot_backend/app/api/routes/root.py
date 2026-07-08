from fastapi import APIRouter
from app.config import get_settings
from app.version import __version__

import logging

logger = logging.getLogger(__name__)

router = APIRouter()

# NB: keep this OFF the bare "/" path. In the single-container / Hugging Face
# Spaces deployment the React SPA is mounted at "/" as a catch-all, and any
# API route registered at exactly "/" would shadow the SPA's index.html and
# leave users staring at this JSON banner instead of the app.
@router.get("/api/health")
def root():
    title = get_settings().app.title
    return {
        "message": f"{title} Backend is up and running",
        "version": __version__,
        "features": [
            "Configurable Personas",
            "Improved Session Management",
            "Unified Context Handling",
            "Ollama Support",
            "Gemini API Support",
            "Provider Switching"
        ]
    }

