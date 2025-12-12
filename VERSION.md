# Version History

## Latest Release: v1.6.0 (December 12, 2025)

### ✨ New Features

**Cmd+K Global Search Modal**
- Press `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux) to open search
- Real-time filtering across material names, clusters, and types
- Keyboard navigation: ↑↓ to navigate, Enter to select, Escape to close
- Seamlessly integrates with material detail modal

### 🐛 Bug Fixes

- Fixed ReferenceError in search modal by using correct `allMaterials` variable
- Corrected variable naming in `performSearch()` and `selectSearchResult()`

### 📚 Documentation

- Added comprehensive ARCHITECTURE.md (technical design & codebase organization)
- Created CONTRIBUTING.md (developer guidelines & contribution workflow)
- Updated SEARCH_FEATURE.md code examples for accuracy
- Updated README.md to reflect v1.6.0 features
- Created CMDK_IMPLEMENTATION.md (implementation summary)

---

## v1.5.0 (December 12, 2025)

### ✨ New Features

**Bed Surface Recommendations**
- Added `bed_surface` field to all 29 materials in `materialsDetailData`
- MatterHackers-sourced authoritative recommendations
- Display in Print Settings section of material modal
- 100% coverage with surface types: Blue Tape, PEI, Kapton, Garolite, high-temp options

### ✏️ Changes

- Enhanced modal Print Settings to display recommended bed surfaces
- Added PP (Polypropylene) and PVB (IPA-Smoothable) material entries
- Updated footer with Railway.app hosting link

### 🔧 Scripts

- `generate_bed_surface_data.py` - Data generation utility
- `check_bed_surface_coverage.py` - Validation tool (confirmed 29/29 coverage)

---

## v1.4.0 (November 18, 2025)

### ✨ New Features

**Print Profile Export** (4 Slicers)
- Cura: Export .ini profiles with optimized settings
- PrusaSlicer: Export .ini profiles with PrusaSlicer-specific settings
- OrcaSlicer: Export native JSON profiles (v1.9.0+)
- Simplify3D: Export .fff XML profiles

**Annealing Support**
- "Show Annealed Properties" toggle in header
- Dual-mode comparison: as-printed vs. annealed values
- Per-material annealing guides in modal
- Temperature, soak time, and process warnings

**Expanded Sorting**
- Dropdown: "Sort by..." with 5 options
- Printability (high to low) - default
- Strength (high to low)
- Heat Resistance (high to low)
- Cost (low to high)
- Material Name (A-Z)
- Preference persisted in localStorage

**View Toggles**
- Compact view (smaller cards)
- Detailed view (comprehensive info)
- Table view (side-by-side comparison)
- 2-4 material comparison selection

### 📊 Data Expansion

- Expanded from 23 to 40 materials
- New additions: PPSU, HIPS, Nylon PA6/PA12, PC-ABS Blend, PET, PETG-CF, PLA variants (Silk, Glow), TPU variants (85A, 95A)
- Enhanced engineering data for professional applications

### ✏️ Changes

- Material cards now show key properties with badges
- Nozzle compatibility filter prevents incompatible selections
- Modal shows annealing guide for applicable materials
- Support & Learn section in modal with Ko-fi and YouTube links

---

## v1.3.0 (November 17, 2025)

### ✨ New Features

**OrcaSlicer Profile Export**
- Added fourth slicer export option
- Native JSON format (OrcaSlicer 1.9.0+)
- Includes temperatures, speeds, retraction, layer heights, shell configs

### ✏️ Changes

- Export button layout: 3-column → responsive 4-column (2 on mobile)
- OrcaSlicer button uses purple color (`bg-purple-600`) for brand distinction

---

## v1.2.0 (November 15, 2025)

### ✨ New Features

**Advanced Engineering Data**
- FEA-ready material properties
- Thermal properties (expansion, conductivity, specific heat)
- Creep resistance data
- Fatigue strength measurements
- Chemical resistance charts

**Enhanced Modal Display**
- Engineering Properties section (FEA data)
- Thermal Properties section
- Creep Resistance details
- Material Characteristics with color-coded status

### 📊 Data Enhancements

- Added thermal expansion coefficients
- Added creep resistance data to materials.json
- Added fatigue strength measurements
- Material properties now FEA-ready

---

## v1.1.0 (November 10, 2025)

### ✨ New Features

**Material Detail Modal**
- Click any material card to view comprehensive information
- Detailed print settings section
- Complete mechanical properties with progress bars
- Interactive modal with close button (Escape key)

**Nozzle Compatibility Filter**
- Select nozzle type (Brass, Hardened Steel, Ruby, Stainless Steel)
- Smart filtering prevents incompatible material selection
- Filters materials based on `Requires_Hardened_Nozzle` property

**Enhanced Print Settings**
- Nozzle temperature range
- Bed temperature recommendations
- Print speed (perimeter, infill, first layer)
- Cooling fan recommendations
- Retraction settings

**Expanded Material Database**
- Merged data/alternate_data/material_db.csv (40 materials)
- From 23 → 40 materials
- Created scripts/merge_materials.py for dataset comparison

### ✏️ Changes

- Modal displays enriched `materialsDetailData` where available
- Graceful fallback to CSV data if details missing
- Better material property visualization

---

## v1.0.0 (October 28, 2025)

### ✨ Initial Release

**Core Features**
- Interactive filament database with 23 materials
- Real-time filtering by multiple criteria
- Filter by mechanical properties, environmental resistance, printability, cost
- Material clustering (Standard, Engineering, Composite, Functional, High-Performance, Flexible)
- Visual material cards with key properties
- Responsive design (desktop, tablet, mobile)
- Dark mode UI (Tailwind CSS)
- Enhanced tooltips on all filter controls
- LocalStorage for preference persistence

**Material Database**
- 23 FDM filament materials
- 26 data points per material
- Mechanical properties (strength, elongation)
- Thermal properties (HDT, printability)
- Cost and environmental attributes
- Boolean flags (UV resistant, hygroscopic, etc.)

**UI Features**
- Left sidebar filters (checkboxes + sliders)
- Right side results grid
- Responsive layout (mobile-first)
- Dark theme with Tailwind
- Real-time result count
- "No results" messaging

**Technical**
- Single HTML file (monolithic architecture)
- Vanilla JavaScript (no frameworks)
- Embedded CSV data (offline-first)
- CDN-only external resources
- Zero npm/package dependencies
- Works in all modern browsers

---

## Version Statistics

| Version | Release Date | Materials | Features | Lines (HTML) |
|---------|-------------|-----------|----------|------------|
| 1.6.0 | Dec 12, 2025 | 40 | Cmd+K Search | 2320 |
| 1.5.0 | Dec 12, 2025 | 40 | Bed Surface | 2184 |
| 1.4.0 | Nov 18, 2025 | 40 | Export, Annealing | 2100 |
| 1.3.0 | Nov 17, 2025 | 40 | OrcaSlicer | 1950 |
| 1.2.0 | Nov 15, 2025 | 40 | Engineering Data | 1850 |
| 1.1.0 | Nov 10, 2025 | 40 | Modal, Nozzle | 1750 |
| 1.0.0 | Oct 28, 2025 | 23 | Core Features | 1200 |

---

## Upcoming Features (Roadmap)

### v1.7.0 (Planned)
- [ ] Extended search (properties, not just names)
- [ ] Fuzzy matching for typos
- [ ] Search result ranking/scoring
- [ ] Search history

### v1.8.0+ (Future)
- [ ] Guided wizard mode (step-by-step selection)
- [ ] Advanced filters and saved presets
- [ ] Application guardrails & warnings
- [ ] Export comparison views as PDF/CSV

### v2.0.0 (Major Release)
- [ ] Framework migration (React/Svelte)
- [ ] Backend API for user accounts
- [ ] Custom material database
- [ ] Mobile app (React Native)

---

## Support & Maintenance

**Current Status**: Production Ready (v1.6.0)

**Bug Reports**: https://github.com/minimal3dp/m3dp-filament-recommendation-engine/issues

**Feature Requests**: https://github.com/minimal3dp/m3dp-filament-recommendation-engine/discussions

**Documentation**: 
- README.md - User guide
- ARCHITECTURE.md - Technical design
- CONTRIBUTING.md - Developer guide
- CHANGELOG.md - Detailed change log

---

**Last Updated**: December 12, 2025  
**Maintainer**: Minimal3DP  
**License**: See LICENSE file
