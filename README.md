# FDM Filament Recommendation Engine

A web-based tool to help users select the best Fused Deposition Modeling (FDM) 3D printing filament for their specific project needs.

## Overview

This application provides an intelligent, filterable database of FDM filament materials, allowing users to quickly identify the optimal material based on their requirements. Users can filter by mechanical properties, environmental resistance, printability, cost, and more.

## Features

### Current Features (v1.2) 🆕

- **Enhanced Engineering Data** 🆕: Advanced material properties for professional applications
  - **Thermal Properties**: Thermal expansion coefficients, thermal conductivity, specific heat capacity
  - **Long-term Performance**: Creep resistance ratings and fatigue life data
  - **Cycles to Failure**: Comprehensive fatigue strength data for functional parts
  - **Material Behavior Notes**: Expert guidance on real-world performance

- **Print Profile Export** 🆕: One-click slicer profile generation
  - **Cura**: Export optimized .ini profiles
  - **PrusaSlicer**: Export .ini profiles with PrusaSlicer-specific settings
  - **Simplify3D**: Export .fff XML profiles
  - Includes material-specific temperatures, speeds, retraction, and fan settings
  - Serves as a tested starting point for your prints

- **Interactive Material Details**: Click any material card to view comprehensive information
  - Detailed print settings (nozzle temp, bed temp, speeds, fan, retraction)
  - Complete mechanical properties with visual indicators
  - FEA-ready properties for engineering simulations
  - Thermal properties for dimensional accuracy calculations
  - Long-term performance data for functional parts
  - Material characteristics with color-coded status
  - Performance visualizations with progress bars
  
- **Nozzle Compatibility Filter**: Select your nozzle type to filter compatible materials
  - Brass (Standard) - for non-abrasive materials
  - Hardened Steel - for all materials including carbon fiber
  - Ruby Tipped - premium option for abrasive filaments
  - Stainless Steel - food-safe option
  - Smart filtering prevents incompatible material selection

- **Real-time Filtering**: Interactive UI with instant results as filters are adjusted
- **Multi-criteria Search**: Filter by multiple properties simultaneously including:
  - Mechanical strength (XY and Z-axis)
  - Heat resistance (HDT)
  - Printability score
  - Cost score
  - UV resistance
  - Moisture sensitivity
  - Enclosure requirements
  - Fume emissions
  - Friction properties
  - Abrasiveness
  
- **Material Clustering**: Materials organized into categories (Standard, Engineering, Composite, Functional, High-Performance, Flexible)
- **Visual Material Cards**: Easy-to-read cards displaying key properties and attributes
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Dark Mode UI**: Modern, eye-friendly interface built with Tailwind CSS
- **Enhanced Tooltips**: Helpful information on all sliders to guide users

### Material Database

The application includes **28 materials** spanning the most common FDM filaments:

- **Standard Materials**: PLA, HTPLA, ABS
- **Engineering Materials**: PETG, ASA, Polycarbonate, Nylon (PA6/PA12), Tough PLA
- **Composite Materials**: Carbon Fiber variants (PLA-CF, PETG-CF, Nylon-CF), Glass Fiber Nylon
- **Functional Materials**: TPU (Flexible), Polypropylene, PVA (Soluble), Wood-filled, Metal-filled, Silk, Glow-in-the-dark
- **High-Performance Materials**: PEEK, PEKK, ULTEM 9085, PPSU

Each material includes **26 data points** covering mechanical properties, thermal characteristics, printability, cost, and special attributes.

## How to Use

### Getting Started

1. **Open the Application**
   - Simply open `index.html` in any modern web browser
   - No installation, server, or build process required
   - Works completely offline

2. **Apply Filters**
   - Use the **checkboxes** in the left panel to select key attributes:
     - UV Resistant
     - Low Moisture Sensitivity
     - No Enclosure Required
     - Low/No Fumes
     - Low Friction
     - Not Abrasive
   - Adjust the **sliders** to set minimum/maximum requirements:
     - **Printability Score** (1-10): Ease of printing
     - **Strength** (0-150 MPa): Tensile strength in XY plane
     - **Heat Resistance** (0-250°C): Heat Deflection Temperature
     - **Max Cost Score** (1-10): Budget constraint (lower = more expensive)

3. **Review Results**
   - Recommended materials appear in real-time on the right
   - Each card shows:
     - Material name and cluster category
     - Key mechanical properties
     - Thermal characteristics
     - Quick-view badges for important attributes
   - Results are sorted by printability (easiest to print first)

4. **Interpret the Data**
   - **Strength (XY)**: Tensile strength in the primary print direction
   - **Heat Resistance (HDT)**: Temperature at which the material begins to deform under load
   - **Printability Score**: Subjective rating of printing difficulty (10 = easiest)
   - **Cost Score**: Relative cost (1 = most expensive, 10 = least expensive)
   - **Cluster Badges**: Color-coded material categories for quick identification

## Project Structure

```
m3dp-filament-recommendation-engine/
├── index.html                 # Main application (self-contained)
├── README.md                  # This file
├── TODO.md                    # Development roadmap
├── data/
│   ├── raw/
│   │   ├── material_db.csv    # Primary material database (embedded in index.html)
│   │   └── materials.json     # Detailed properties (future integration)
│   ├── processed/             # Processed/enriched data files
│   └── sources/               # Original TDS and reference documents
└── research/                  # Research documents and references
```

## Data Sources

### Primary Database: `material_db.csv`
The primary database currently used by the application. Contains:
- 28 materials
- 26 properties per material
- Quantitative data (strength, stiffness, temperature ranges)
- Qualitative data (UV resistance, hygroscopic behavior, etc.)
- Print settings (nozzle temp, bed temp)
- Cost and density information
- Annealing data (where applicable)

### Secondary Database: `materials.json`
*(Not yet integrated)* Will provide:
- Detailed print profiles and settings
- Advanced engineering data for FEA simulations
- Fatigue and long-term performance data
- Material-specific warnings and best practices

## Technology Stack

- **HTML5**: Semantic structure
- **Tailwind CSS**: Utility-first styling via CDN
- **Vanilla JavaScript**: No framework dependencies, keeping it simple and fast
- **CSV Data**: Embedded directly in the HTML for zero-dependency operation

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (v90+)
- Firefox (v88+)
- Safari (v14+)
- Opera (v76+)

## Future Development

This is version 1.0 of the application. The long-term vision is to evolve this into an **expert-level recommendation system** that not only filters materials but also:

- Provides guided wizards for non-experts
- Implements multi-criteria decision making (MCDM) ranking algorithms
- Offers application-specific warnings and guardrails
- Includes detailed modals with print profiles and engineering data
- Supports "what-if" analysis for annealed materials

For the complete development roadmap, see [TODO.md](TODO.md).

## Research Foundation

This tool is built on extensive research into FDM materials, including:
- Technical Data Sheets (TDS) from major manufacturers
- Engineering handbooks and material science references
- Real-world printing experience and community feedback
- Comparative testing data across material types
- **FDM 3D Printer Report 2024-2025** - Comprehensive printer capabilities database (future integration)
- **Nozzle Guide** - Nozzle compatibility and wear characteristics

See `research/` directory for detailed research notes and source documents.

## Contributing

This is an open development project. Contributions are welcome! Areas of interest:
- Additional material data and validation
- UI/UX improvements
- Algorithm development for the expert system
- Integration with CAD tools or slicers
- Mobile app development

## License

MIT License - Feel free to use, modify, and distribute this tool.

## Acknowledgments

Built for the 3D printing community to make material selection more accessible and data-driven.

---

## Version History

See [CHANGELOG.md](CHANGELOG.md) for detailed version history and release notes.

**Current Version**: 1.1.0  
**Last Updated**: November 10, 2025  
**Branch**: version1.1  
**Author**: M3DP Development Team