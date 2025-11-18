# Version 1.4.0 Summary

Release Date: 2025-11-17

## Highlights
- Show Annealed Properties toggle with preference persistence
- Dual compare view: As‑Printed and Annealed rows for Strength (XY) and HDT
- Material modal gains an Annealing Guide with temperature, soak time, steps, warnings, and references
- Per‑material annealing presets with manufacturer links; smart family heuristics as fallback
- Compare header shows a hint badge when dual view is active

## User Experience
- Toggle lives in the header; when enabled, the compare table renders two rows per annealing‑aware property
- The Annealing Guide appears only for materials with annealed data or relevant presets
- Min/Max highlighting works independently for each row (as‑printed vs. annealed)

## Implementation Notes
- `renderCompareTable()` renders dual rows when `window.__annealedMode === true`
- `openMaterialModal()` appends the Annealing Guide and pulls presets from `annealingPresets`
- Presets can be extended by adding entries to `annealingPresets` after `materialsDetailData`
- State persists via `localStorage` key: `m3dp_annealedMode`
- Compare header badge element: `#compare-mode-hint`

## Known Limitations
- Annealing presets are seeded and meant to grow; not all materials have manufacturer‑specific presets yet
- Dimensional change during annealing varies by geometry; guidance is generic and should be validated per part

## Next Steps
- Expand presets with additional TDS references (ABS/ASA heat treating guidance, Nylon variants, PC blends)
- Optional: add a small “Annealed” badge on cards when dual mode is active
- Consider download of anneal‑optimized slicer profiles where guidance is strong
