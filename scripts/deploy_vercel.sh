#!/usr/bin/env zsh

set -euo pipefail

usage() {
  cat <<'EOF'
Deploy this project to Vercel.

Usage:
  scripts/deploy_vercel.sh            # Preview deploy (creates a preview URL)
  scripts/deploy_vercel.sh --prod     # Production deploy (to filament.minimal3dp.com)
  scripts/deploy_vercel.sh --build    # Build locally for preview (no deploy)
  scripts/deploy_vercel.sh --help     # Show help

Prereqs:
  - Vercel CLI installed (vercel --version)
  - Project linked (run `vercel` once if not linked)
EOF
}

if [[ ${1:-} == "--help" ]]; then
  usage
  exit 0
fi

if ! command -v vercel >/dev/null 2>&1; then
  echo "Error: vercel CLI not found. Install with: npm i -g vercel" >&2
  exit 1
fi

case "${1:-}" in
  --prod)
    echo "▶ Deploying to production..."
    vercel --prod
    ;;
  --build)
    echo "▶ Building preview locally..."
    vercel build
    echo "✔ Build complete. Deploy with: vercel deploy --prebuilt"
    ;;
  "" )
    echo "▶ Deploying preview (ephemeral URL)..."
    vercel
    ;;
  *)
    usage
    exit 1
    ;;
 esac
