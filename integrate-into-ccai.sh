#!/bin/sh
# Copy MuscleGrowthAI panel files into a local CCAI-Demo-Clary checkout.
# Usage: ./integrate-into-ccai.sh /path/to/CCAI-Demo-Clary

set -eu

SRC="$(cd "$(dirname "$0")" && pwd)"
DEST="${1:-}"

if [ -z "$DEST" ]; then
  echo "Usage: $0 /path/to/CCAI-Demo-Clary" >&2
  exit 1
fi

if [ ! -d "$DEST/multi_llm_chatbot_backend" ]; then
  echo "Error: $DEST does not look like a CCAI-Demo-Clary repo root." >&2
  exit 1
fi

cp "$SRC/muscle_growth_config.yaml" "$DEST/"
mkdir -p "$DEST/personas/fitness_advisors"
cp "$SRC/personas/fitness_advisors/"*.yaml "$DEST/personas/fitness_advisors/"

echo "Copied muscle_growth_config.yaml and personas/fitness_advisors/ into $DEST"
echo ""
echo "Next:"
echo "  1. Set CONFIG_PATH=$DEST/muscle_growth_config.yaml in your .env or Dockerfile"
echo "  2. Start the backend and frontend (see README.md)"
