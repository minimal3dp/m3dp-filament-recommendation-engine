#!/bin/bash
# start_server.sh
# Starts the FastAPI development server using uv and uvicorn

echo "🚀 Starting M3DP Filament Recommendation Engine..."
echo "📍 URL: http://localhost:8000"

# Check if uv is installed
if ! command -v uv &> /dev/null; then
    echo "❌ 'uv' is not installed. Please install it to continue."
    exit 1
fi

# Run the server
uv run uvicorn main:app --reload --port 8000
