#!/bin/bash
# execute_tool.sh: Run Python scripts on-demand, return JSON summary

SCRIPT_PATH=$1
if [ -z "$SCRIPT_PATH" ]; then
  echo '{"error": "No script provided"}'
  exit 1
fi

# Run with uv for speed
uv run python "$SCRIPT_PATH" > output.json 2>&1

# Compress to JSON blob (simulate MCP filtering)
python -c "
import json
with open('output.json') as f:
    data = json.load(f)
summary = {'result': data.get('summary', 'No summary'), 'tokens_saved': '90% est.'}
print(json.dumps(summary))
" > stdout.json

cat stdout.json
rm output.json stdout.json  # Clean up