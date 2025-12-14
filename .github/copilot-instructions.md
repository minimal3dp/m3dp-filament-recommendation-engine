# Antigravity Instructions — m3dp-filament-recommendation-engine

These instructions are designed to make Google Antigravity agents productive immediately.

## 🧠 Core Directive: The Memory Protocol
1. **READ**: Start every session by reading `.agent-memory.md`.
2. **EXECUTE**: Perform your task.
3. **WRITE**: Update `.agent-memory.md` if you change the architecture or complete a major milestone.

## 🏗️ Architecture Snapshot
- **Single-file frontend**: `index.html` (no build step, no backend).
- **UI**: Tailwind via CDN, vanilla JS. Works offline by design.
- **Data**: Embedded CSV string `csvData` + optional details in `materialsDetailData` object.
- **Core flow**: parse CSV → filter/search → render cards → modal → optional slicer profile export.

## 🤖 Agent Workflow (Antigravity Mode)
- **Task Boundaries**: Use the `task_boundary` tool to structure your work.
    - **Planning**: Create an `implementation_plan.md` for any non-trivial change.
    - **Execution**: Implement changes.
    - **Verification**: Create a `walkthrough.md` to prove correctness.
- **Communication**: Use `notify_user` to request reviews or ask clarifying questions.

## ⚡ Tooling & Scripts
- **Python**: Preferred for data processing. A UV environment is available (`.venv`).
- **Server**: Use `python3 -m http.server 8000` to run the app locally.
- **Browser**: Use the `browser_subagent` or `open_browser_url` to verify `http://localhost:8000`.

## 🛡️ Constraints & Guardrails
- **No Build Step**: Do not add webpack, vite, or npm build processes.
- **Offline First**: No external API calls.
- **Preserve Headers**: Do not change CSV header names without updating `index.html` parsing logic.

## 📂 Useful File Map
- `index.html`: Main application logic.
- `.agent-memory.md`: Project status and "truth".
- `data/raw/material_db.csv`: Source of truth for data.
- `execute_tool.sh`: Helper for running Python scripts (supports `uv`).
