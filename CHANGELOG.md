# Changelog

All notable changes to the FDM Filament Recommendation Engine will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] - 2025-11-10

### Added

#### Material Detail Modal (TODO Item 1.1)
- **Click-to-View Details**: Material cards are now fully clickable to open a comprehensive detail modal
- **Modal Features**:
  - Beautiful overlay with backdrop blur effect
  - Responsive design that works on all screen sizes
  - Scrollable content for materials with extensive data
  - Close via "X" button, clicking backdrop, or pressing ESC key
  
#### Detailed Print Settings Section
- **Recommended Print Settings Display**:
  - Nozzle temperature (from materials.json or CSV fallback)
  - Bed temperature recommendations
  - Print speed suggestions (mm/s)
  - Fan speed percentages
- **Temperature Ranges**: For materials without detailed settings, shows min/max ranges from CSV data

#### Advanced Engineering Data
- **Mechanical Properties Panel**:
  - Tensile strength (XY and Z axes)
  - Stiffness modulus
  - Toughness (impact resistance)
  - Heat Deflection Temperature (HDT)
  - Material density
- **Annealing Information**: 
  - Special callout for annealable materials (like HTPLA)
  - Shows post-annealing strength and HDT values
- **FEA Properties** (when available):
  - Young's Modulus (GPa)
  - Tensile Yield Strength (MPa)
  - Poisson's Ratio
  - Ready for finite element analysis simulations

#### Material Characteristics Panel
- **Visual Status Indicators**:
  - ✓ Green checkmarks for positive attributes
  - ⚠ Yellow warnings for conditional attributes
  - ✗ Red crosses for limitations
- **Key Attributes Displayed**:
  - UV resistance
  - Moisture absorption (hygroscopic behavior)
  - Creep resistance
  - Enclosure requirements
  - Fume emissions
  - Nozzle compatibility (abrasive materials)
  - Chemical resistance score
  - Price per kilogram

#### Performance Visualization
- **Progress Bar Charts**:
  - Printability score (1-10 scale)
  - Cost score with visual representation
  - Color-coded bars for easy interpretation

#### Nozzle Type Filter (NEW Feature)
- **Nozzle Selection Dropdown**:
  - All Nozzles (no filtering)
  - Brass (Standard) - for non-abrasive materials
  - Hardened Steel - for all materials including carbon fiber
  - Ruby Tipped - premium option for abrasive materials
  - Stainless Steel - food-safe option for non-abrasive materials
  
- **Smart Filtering**:
  - Automatically filters materials based on nozzle compatibility
  - Brass and stainless steel nozzles hide abrasive materials (carbon fiber, glass fiber, metal-filled, wood-filled)
  - Hardened steel and ruby nozzles are compatible with all materials
  
- **Educational Tooltips**:
  - Each nozzle type shows description when selected
  - Explains compatibility and use cases
  - Helps users understand nozzle requirements

#### Data Integration
- **materials.json Integration**:
  - Embedded detailed material data from materials.json
  - Seamless fallback to CSV data when detailed data unavailable
  - Support for 10+ materials with comprehensive print profiles
  - FEA properties for simulation-ready material selection

### Enhanced

#### Material Cards
- **Interactive Design**:
  - Added hover effect with scale transformation
  - Cursor changes to pointer on hover
  - "View Details" button on each card
  - Entire card is clickable for better UX

#### Performance Tooltips (from previous update)
- Enhanced slider tooltips with detailed explanations
- Added info icons (ⓘ) next to slider labels
- Cursor changes to help icon on hover

### Technical Improvements

#### CSS Enhancements
- **Modal Styling**:
  - Custom scrollbar for modal content
  - Backdrop blur effect for focus
  - Smooth transitions and animations
  - Sticky header in modal for context while scrolling

#### JavaScript Architecture
- **New Functions**:
  - `openMaterialModal(material)` - Displays comprehensive material information
  - `closeMaterialModal()` - Handles modal dismissal
  - Keyboard event listener for ESC key
  - Nozzle compatibility checking logic

- **Data Structures**:
  - `materialsDetailData` object with print profiles and FEA data
  - `nozzleInfo` object with compatibility functions
  - Modular design for easy expansion

#### State Management
- Added nozzle selection to filtering logic
- Dynamic nozzle info display
- Maintained backwards compatibility with existing filters

### Future Considerations (Documented in TODO.md)

#### Printer Selection Filter (Phase 4.0)
- Research document added: "FDM 3D Printer Report 2024-2025.pdf"
- Future feature to filter materials by printer capabilities:
  - Max nozzle temperature
  - Max bed temperature
  - Enclosure availability
  - Build volume considerations
- Will help users avoid selecting materials incompatible with their hardware

### Bug Fixes
- Fixed modal z-index stacking
- Improved responsive behavior on mobile devices
- Enhanced accessibility with keyboard navigation

### Documentation Updates
- Updated TODO.md with completed items (1.1)
- Marked nozzle filter feature as completed
- Added printer selection feature to future roadmap
- Created CHANGELOG.md for version tracking

---

## [1.0.0] - 2025-11-09

### Initial Release

#### Core Features
- **Material Database**: 23 FDM materials from standard to high-performance
- **Real-time Filtering**:
  - 6 boolean attribute checkboxes
  - 4 performance sliders (Printability, Strength, Heat Resistance, Cost)
- **Material Cards**: Visual display with key properties and badges
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark Mode UI**: Eye-friendly interface with Tailwind CSS
- **Zero Dependencies**: Single HTML file with embedded data

#### Material Coverage
- Standard: PLA, ABS, PETG
- Engineering: ASA, PC, Nylon, Tough PLA
- Composite: Carbon fiber variants (PLA-CF, PETG-CF, Nylon-CF, PC-CF)
- Functional: TPU, PP, PVA, PVB, HIPS, Wood-filled, Metal-filled
- High-Temperature: PEEK, PEKK, ULTEM 1010, ULTEM 9085

#### Documentation
- Comprehensive README.md
- Detailed TODO.md with 5-phase roadmap
- Research documents and data sources

---

## Release Notes

### Version 1.1.0 Highlights

This release represents the completion of **TODO Phase 1.1** (Integrate materials.json) with the addition of:

1. **Fully Interactive Material Cards** with detailed modal views
2. **Professional Print Settings** display for informed decision-making
3. **FEA Properties** for engineering applications
4. **Nozzle Compatibility Filter** - a unique feature addressing real-world printer constraints

The nozzle filter is particularly valuable as it prevents users from attempting to print abrasive materials (carbon fiber, glass fiber, metal particles) with standard brass nozzles, which would quickly wear out and affect print quality.

### What's Next?

**Phase 1.2** focuses on improving the filter UI:
- Reset filters button
- Text search functionality
- Filter presets for common use cases
- Sorting options

**Phase 2** will introduce expert system logic:
- Guided wizard for beginners
- Application guardrails and warnings
- Multi-criteria decision making (MCDM) ranking

See [TODO.md](TODO.md) for the complete roadmap.

---

**Current Version**: 1.1.0  
**Last Updated**: November 10, 2025  
**Branch**: version1.1
