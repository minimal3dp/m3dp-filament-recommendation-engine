# Changelog

All notable changes to the FDM Filament Recommendation Engine will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.3.0] - 2025-11-17

### Added

#### OrcaSlicer Profile Export
- **OrcaSlicer Support**: Added fourth slicer export option alongside Cura, PrusaSlicer, and Simplify3D
- **JSON Format**: Generates native OrcaSlicer JSON profile format
- **Comprehensive Settings**: Includes temperatures, speeds, retraction, layer heights, and shell configurations
- **Compatible with OrcaSlicer 1.9.0+**

### Changed
- **Export Button Layout**: Updated from 3-column grid to responsive 4-column layout (2 columns on mobile, 4 on desktop)
- **Purple Color Scheme**: OrcaSlicer button uses purple (`bg-purple-600`) for brand distinction

---

## [1.4.0] - 2025-11-17

### Added

#### Annealing Features
- **Show Annealed Properties Toggle**: User‑controlled dual mode for annealing analysis
- **Dual Compare View**: Strength (XY) and HDT rows show both as‑printed and annealed values when enabled
- **Annealing Guide in Modal**: Per‑material section with suggested temperature, soak time, step‑by‑step process, and safety warnings
- **References & Presets**: Material‑specific presets where available with linked references; smart family heuristics as fallback
- **Header Hint Badge**: "Dual view: As‑Printed + Annealed" indicator in Compare when dual mode is active
- **Preference Persistence**: Annealed toggle saved to localStorage and restored automatically

### Changed
- **Compare Table Logic**: Row rendering refactored to support dual rows with correct min/max highlighting per row
- **Material Modal**: Enhanced with the new Annealing Guide section when applicable
- **Documentation**: Updated README and TODO to reflect annealing features and usage

---

## [1.2.0] - 2025-11-10

### Added

#### Enhanced Material Data (TODO Item 1.1.2)

##### Thermal Properties
- **Thermal Expansion Coefficients**: Added coefficient of thermal expansion (×10⁻⁶ /°C) for dimensional accuracy calculations
  - PLA: 68, PETG: 60, ABS: 90, Nylon: 80, TPU: 150, ASA: 85, PEEK: 47
- **Thermal Conductivity**: Added thermal conductivity values (W/(m·K)) for heat transfer analysis
- **Specific Heat Capacity**: Added specific heat capacity values (J/(g·K)) for thermal management
- **New Thermal Properties Section** in material modal with comprehensive thermal data display

##### Long-term Performance Data
- **Creep Resistance Ratings**: Qualitative ratings with application guidance
  - PLA: "Low - Not recommended for constant load applications"
  - PETG: "Good - Suitable for moderate load applications"
  - Nylon: "Excellent - Ideal for constant load applications"
  - TPU: "Excellent - Elastomeric behavior, recovers from deformation"
  - ASA: "Good - UV and weather resistant, better than ABS"
  - PEEK: "Excellent - Superior high-temperature performance"
  
- **Fatigue Performance Data**:
  - Cycles to failure at 50% UTS (Ultimate Tensile Strength)
  - Fatigue strength values (MPa)
  - Expert notes on real-world performance characteristics
  - Examples: PLA (10,000 cycles), PETG (500,000 cycles), Nylon (1M cycles), TPU (5M cycles), PEEK (2M cycles)
  
- **Long-term Performance Section** in material modal with visual indicators

##### Additional Print Settings
- **Enhanced Common Settings**:
  - Retraction distance (mm)
  - Retraction speed (mm/s)
  - First layer speed percentage
  - More accurate temperature and speed recommendations

#### Print Profile Export Feature (TODO Item 1.1.2)

##### Multi-Slicer Support
- **Cura Profile Export**: 
  - Generates .ini format compatible with Ultimaker Cura
  - Includes material temperatures, speeds, retraction, fan control
  - Layer height, wall thickness, and infill settings
  
- **PrusaSlicer Profile Export**:
  - Generates .ini format compatible with PrusaSlicer/SuperSlicer
  - Material-specific settings with temperature ranges
  - Fan control and speed optimization
  - Compatible with Prusa-specific syntax
  
- **Simplify3D Profile Export**:
  - Generates .fff XML format for Simplify3D
  - Comprehensive extruder configuration
  - Temperature setpoints and fan curves
  - Professional-grade profile structure

##### Export Functionality
- **One-Click Downloads**: Export buttons in material detail modal
- **Automatic File Naming**: Profiles named after material (e.g., `PLA_Standard_cura_profile.ini`)
- **Safety Disclaimer**: Warns users that profiles are starting points requiring testing
- **Visual Icons**: SVG icons for each slicer for easy identification

### Changed

- **materials.json**: Expanded from basic properties to comprehensive engineering database
- **Material Modal**: Reorganized sections with thermal and long-term performance data
- **Data Coverage**: Updated 7 materials (PLA, PETG, ABS, Nylon, TPU, ASA, PEEK) with complete thermal and fatigue data

### Technical Details

- **New JavaScript Functions**:
  - `exportCuraProfile(materialName, data)`: Cura .ini generator
  - `exportPrusaProfile(materialName, data)`: PrusaSlicer .ini generator
  - `exportSimplify3DProfile(materialName, data)`: Simplify3D .fff XML generator
  - `downloadFile(content, filename, mimeType)`: Universal file download utility
  
- **Data Schema Updates**:
  - Added `thermal` object: `thermal_expansion_coefficient`, `thermal_conductivity_W_mK`, `specific_heat_capacity_J_gK`
  - Added `creep_resistance` string: Qualitative rating with application guidance
  - Enhanced `fatigue` object: `cycles_to_failure_at_50pct_UTS`, `fatigue_strength_MPa`, `notes`
  - Enhanced `common` object: `retraction_distance_mm`, `retraction_speed_mm_s`, `first_layer_speed_pct`

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

**Current Version**: 1.4.0  
**Last Updated**: November 17, 2025  
**Branch**: main
