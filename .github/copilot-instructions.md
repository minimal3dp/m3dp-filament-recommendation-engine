# Copilot Instructions — m3dp-filament-recommendation-engine

These instructions make AI coding agents productive immediately in this repo. Focus on the current, working v1.x static app unless asked otherwise.

## Architecture Snapshot
- Single-file frontend in `index.html` (no build step, no backend).
- UI: Tailwind via CDN, vanilla JS. Works offline by design.
- Data: Embedded CSV string `csvData` + optional details in `materialsDetailData` object.
- Core flow: parse CSV → filter/search → render cards → modal → optional slicer profile export.

## Agent Workflow (Tool-Heavy Tasks)
- You are GitHub Copilot AI, a focused coding agent.
- For data/analysis-heavy tasks, prefer generating a Python script over MCP tool calls.
- Workflow:
  1) Analyze the task and scope outputs.
  2) Output a complete `.py` file with on-demand imports (e.g., `numpy`, `scipy`, `pandas`).
  3) Instruct bash to run it via `execute_tool.sh` (or fallback: `uv run python <script>.py`). A UV Python venv is available.
- Example: “Compare two models’ performance” → generate `experiment.py` with stats, t-tests, and a JSON summary written to disk.

## Prompt Efficiency & Cost Awareness
- Auto-detect high-cost prompts (e.g., entire dataset dumps, >2k-line reviews, multi-file refactors, millions of rows).
- Behavior: briefly flag cost, suggest lower-cost alternatives (step-by-step, sample-first, proof-of-concept), and include a copyable efficient prompt.
- If asked to “process 1M rows and return CSV,” propose writing a script that streams to disk and returns a 10-row sample + path.

## Run & Verify
- Open `index.html` directly in a browser, or use a static server (e.g., VS Code Live Server). No npm/py steps.
- Sanity after changes:
  - Filters respond in real-time; result count updates.
  - Search matches by material name or `Cluster`.
  - Nozzle filter hides abrasive materials for brass/stainless.
  - Modal shows engineering/thermal/long-term sections when available.
  - Export buttons download profiles for Cura/Prusa/Orca/Simplify3D.

## Data Model (authoritative today)
- Source is the embedded `csvData` header → row objects from `parseCSV()`; types via `coerceType()`.
- Key columns used by filters/sorting/UI:
  - Numeric: `Printability_Score`, `Strength_XY_MPa`, `Heat_Resistance_HDT_C`, `Cost_Score`, etc.
  - Boolean: `UV_Resistant`, `Hygroscopic`, `Requires_Enclosure`, `Releases_Fumes`, `Low_Friction`, `Requires_Hardened_Nozzle`.
  - Labels: `Material`, `Cluster`.
- Enriched per-material data in `materialsDetailData[materialName]` (optional keys: `common`, `fea`, `thermal`, `creep_resistance`, `fatigue`).

## Filtering & UI Conventions
- Central: `filterAndRender()`
  - Checkboxes via `data-key`/`data-value` (strict equality).
  - Sliders are minimum thresholds, except `Cost_Score` (interpreted as maximum).
  - Nozzle filter uses `nozzleInfo[selection].compatible(material)`.
  - Search matches `Material` and `Cluster` (substring, case-insensitive).
- Rendering via `renderResults(materials)`; cards open modal.
- Modal via `openMaterialModal(material)`; gracefully falls back to CSV when details are missing.

## Extending Materials & Properties
- Add a material:
  - Append a CSV row in `csvData` keeping header order intact.
  - Optionally add `materialsDetailData["<Material Name>"]` for richer modal + exports.
- Add a boolean filter:
  - Add a checkbox in “Key Attributes” with `data-key` matching a CSV column.
  - Ensure CSV values are `true/false` so `coerceType()` parses correctly.
- Add a numeric criterion:
  - Add slider + number input pair (follow `filter-*/input-*` naming + two-way binding in `initialize()`).
  - Update `filterAndRender()` threshold logic; keep label tooltips consistent.

### Micro-Example: New Property + Badge (`Food_Safe`)
- CSV: add a `Food_Safe` boolean column; update rows with `true/false`.
- Checkbox (under Key Attributes):
  `<input type="checkbox" id="filter-foodsafe" data-key="Food_Safe" data-value="true">`
- Filter logic: no code change needed (checkbox collection already generic).
- Card badge example (in `renderResults` badges block):
  `${material.Food_Safe ? '<span class="inline-block bg-teal-800 text-teal-100 px-2 py-0.5 rounded">Food Safe</span>' : ''}`
- Modal (optional): add a characteristics row mirroring others.

## Slicer Profile Exports
- Existing: `exportCuraProfile`, `exportPrusaProfile`, `exportOrcaProfile`, `exportSimplify3DProfile`.
- Inputs: `(materialName, data)` where `data.common` provides temps/speeds/retraction.
- Add a new slicer: implement `export<YourSlicer>Profile()` → call `downloadFile()` with correct MIME; add a button in the modal export section.

## Constraints & Guardrails
- Don’t add a bundler/framework or external fetch; offline zero-dependency is intentional.
- Preserve CSV header names/types; changing them breaks parsing/filters.
- Keep Tailwind via CDN and embedded data model for v1.x; larger refactors are tracked in `TODO.md`.
- `tds/README.md` workflows are future-planned; if adding scripts later, place under `scripts/` and write to `data/processed/`.

## Useful File Map
- `index.html`: UI, parsing, filters, modal, exports.
- `data/raw/material_db.csv`: Reference CSV (not loaded at runtime); keep schema aligned with `csvData`.
- `data/processed/*.csv`: Processed/merged outputs (future pipeline).
- `tds/README.md`: TDS extraction workflow concepts.
- `README.md`, `CHANGELOG.md`, `TODO.md`: Overview, release notes, roadmap.

## Quick Examples
- Add Nylon PA11: append a CSV row; optionally `materialsDetailData["Nylon PA11"] = { common: { nozzle_temperature: 255, bed_temperature: 90, print_speed: 40, fan_speed: 20 } }`.
- New filter “Food Safe”: add CSV column `Food_Safe` (`true/false`), checkbox with `data-key="Food_Safe"`, optional badge as above.
