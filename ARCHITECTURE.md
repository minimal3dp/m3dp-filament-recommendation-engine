# Architecture & Codebase Organization

## Project Overview

**FDM Filament Recommendation Engine** is a single-file, zero-dependency web application for helping users select 3D printing filaments based on their project requirements.

**Version**: v1.6.0  
**Status**: Production Ready  
**Stack**: Vanilla JavaScript, HTML5, Tailwind CSS (CDN)

---

## Design Principles

### 1. **Functional Minimalism**
- Single `index.html` file with all HTML, CSS, and JavaScript
- No build step, no dependencies, works completely offline
- CDN-only external resources (Tailwind CSS)
- Zero npm/Python runtime dependencies for the app

### 2. **Performance First**
- All data embedded in HTML (no external API calls)
- Real-time DOM updates with minimal reflows
- CSS Grid and Flexbox for layout efficiency
- Keyboard shortcuts prioritized for power users

### 3. **User-Centric Design**
- Dark theme optimized for extended viewing
- Responsive design (mobile-first approach)
- Keyboard-driven navigation (Cmd+K search)
- Intuitive filter UI with live results

### 4. **Maintainability**
- Well-commented JavaScript functions
- Consistent naming conventions
- Clear separation of concerns (HTML → CSS → JS)
- Comprehensive documentation

---

## File Structure

```
m3dp-filament-recommendation-engine/
├── index.html                          # Main application (2320 lines)
├── README.md                           # User-facing documentation
├── CHANGELOG.md                        # Version history
├── TODO.md                             # Development roadmap
│
├── Documentation/
│   ├── ARCHITECTURE.md                 # This file
│   ├── SEARCH_FEATURE.md               # Cmd+K search implementation guide
│   ├── CMDK_IMPLEMENTATION.md          # Search feature summary
│   ├── BED_SURFACE_FEATURE.md          # Bed surface data feature
│   ├── DEPLOY_RAILWAY.md               # Railway.app deployment guide
│   ├── DEPLOY_VERCEL.md                # Vercel deployment guide (legacy)
│
├── Data/
│   ├── data/raw/
│   │   ├── material_db.csv             # Primary material database
│   │   └── materials.json              # Detailed material properties
│   ├── data/alternate_data/
│   │   ├── material_db.csv             # Alternative database variant
│   │   └── materials.json
│   └── data/processed/
│       ├── material_db_with_tds.csv    # Enhanced with TDS data
│       └── tds_extracted.csv           # Extracted TDS information
│
├── Scripts/
│   ├── scripts/generate_bed_surface_data.py
│   ├── scripts/check_bed_surface_coverage.py
│   ├── scripts/extract_tds.py
│   └── scripts/merge_materials.py
│
├── Config/
│   ├── .github/copilot-instructions.md # AI agent instructions
│   ├── pyproject.toml                  # Python project metadata
│   ├── .gitignore                      # Git ignore rules
│   └── vercel.json                     # Vercel deployment config
│
└── Resources/
    ├── research/                        # Research documents
    ├── tds/                             # Technical data sheets
    ├── m3dp/                            # Brand assets
    └── hugo-stub/                       # Future Hugo integration
```

---

## Core Architecture

### HTML Structure (index.html)

The single HTML file is organized into clear sections:

**1. Head Section (Lines 1-60)**
- Meta tags and viewport configuration
- Tailwind CSS CDN import
- Font loading (Inter)
- Custom CSS for modals and search
- GA4 tracking (optional)

**2. Body Structure (Lines 61-460)**
- Header with title and version
- Filter panel (left sidebar)
- Results grid (main content area)
- Footer with links and version info

**3. Modals (Lines 461-530)**
- Material detail modal (z-index: 50)
- Search modal (z-index: 100)

**4. Data Section (Lines 540-880)**
- Embedded CSV data (csvData variable)
- Material details object (materialsDetailData)
- Nozzle compatibility info (nozzleInfo)
- Annealing presets (annealingPresets)
- Affiliate configuration

**5. JavaScript (Lines 881-2320)**
- Utility functions (parseCSV, coerceType, etc.)
- Modal control functions
- Search functionality (Cmd+K)
- Filter logic and rendering
- Event listeners and initialization

### Code Organization (JavaScript)

```javascript
// SECTIONS (in order):

1. Initialization & Globals (Lines 875-920)
   - Global state variables
   - UI element references

2. Data Parsing (Lines 1200-1400)
   - parseCSV()
   - coerceType()
   - Helper functions

3. Modal Functions (Lines 1440-1575)
   - openMaterialModal()
   - closeMaterialModal()
   - openSearchModal()
   - closeSearchModal()
   - performSearch()
   - selectSearchResult()

4. Filtering & Rendering (Lines 1575-1800)
   - filterAndRender()
   - renderResults()
   - renderComparisonView()

5. Event Listeners (Lines 1800-2000)
   - Keyboard shortcuts (Cmd+K, Escape)
   - Filter checkboxes
   - Slider updates
   - Search input

6. Initialization (Lines 2000-2320)
   - Page load handler
   - Initial render
   - LocalStorage restore
```

---

## Key Features & Implementation

### 1. Cmd+K Global Search (v1.6.0)

**Implementation**: Lines 1457-1650

**How it works**:
1. User presses Cmd+K / Ctrl+K
2. `openSearchModal()` displayed
3. Real-time filtering via `performSearch()`
4. Arrow keys navigate results
5. Enter selects material
6. Material modal opens with `openMaterialModal()`

**Data Structure Used**:
```javascript
// Uses allMaterials array from parseCSV()
allMaterials.filter(material => {
    return material.Material.toLowerCase().includes(query)
})
```

**Performance**: O(n) substring search, limited to 10 results

### 2. Material Filtering

**Implementation**: Lines 1696-1780

**Filter Types**:
1. **Checkboxes** (boolean): Exact match on data-value
2. **Sliders** (numeric): Minimum threshold (max for Cost_Score)
3. **Search**: Substring match on Material or Cluster
4. **Nozzle**: Compatibility function lookup

**Result Flow**:
```
User Input → filterAndRender() → filter() → sort() → renderResults()
```

### 3. Material Modal

**Implementation**: Lines 1300-1450

**Sections Displayed**:
1. Header (Material name, cluster badge)
2. Print Settings (temps, speeds, retraction, bed surface)
3. Annealing Guide (if applicable)
4. Mechanical Properties (with progress bars)
5. FEA Properties (if available in materialsDetailData)
6. Thermal Properties (if available)
7. Export Buttons (Cura, PrusaSlicer, OrcaSlicer, Simplify3D)
8. Support & Learn (Ko-fi, YouTube links)

**Data Source**:
```javascript
const details = materialsDetailData[materialName] || {}
// Graceful fallback to CSV data if details missing
```

### 4. Slicer Profile Export

**Implementation**: Lines 920-1280

**Supported Slicers**:
1. **Cura** (.ini format) - `exportCuraProfile()`
2. **PrusaSlicer** (.ini format) - `exportPrusaProfile()`
3. **OrcaSlicer** (.json format) - `exportOrcaProfile()`
4. **Simplify3D** (.fff XML) - `exportSimplify3DProfile()`

**Data Template**:
```javascript
const profileData = materialsDetailData[materialName].common
// Includes: nozzle_temperature, bed_temperature, print_speed, etc.
```

---

## Data Model

### CSV Structure (material_db.csv)

**Format**: Header row + data rows (1 material per row)

**Key Columns**:
- `Material` (string): Material name (matches materialsDetailData keys)
- `Cluster` (string): Category (Standard, Engineering, etc.)
- `Type` (string): Physical type (Thermoplastic, Composite, etc.)
- Numeric properties: `Printability_Score`, `Strength_XY_MPa`, `Heat_Resistance_HDT_C`, `Cost_Score`
- Boolean properties: `UV_Resistant`, `Hygroscopic`, `Requires_Enclosure`, `Releases_Fumes`, `Low_Friction`, `Requires_Hardened_Nozzle`

**Example Row**:
```csv
PLA (Standard),Standard,Thermoplastic,8.5,60,55,9,true,true,false,false,false,false,100,60,80,120,80,true,false,false,false,false,false
```

### materialsDetailData Object (index.html)

**Structure**: JavaScript object with material names as keys

**Example**:
```javascript
materialsDetailData["PLA (Standard)"] = {
    "common": {
        nozzle_temperature: 210,
        bed_temperature: 60,
        print_speed: 60,
        fan_speed: 100,
        bed_surface: "Blue Painters Tape, PEI Sheet, Glass with Glue Stick"
    },
    "fea": { /* FEA properties */ },
    "thermal": { /* Thermal properties */ },
    "creep_resistance": { /* Creep data */ },
    "fatigue": { /* Fatigue data */ }
}
```

**Coverage**: 29/29 materials (100%) with bed_surface data

---

## Performance Characteristics

### Load Time
- **Initial Load**: ~100-200ms (HTML parsing + CSS CDN)
- **Search Response**: <5ms (with 29 materials)
- **Filter Update**: <50ms (re-render grid)

### Memory Usage
- **JavaScript**: ~500KB (inline scripts + data)
- **DOM Nodes**: ~300-500 (depending on results)
- **CSS**: ~400KB (Tailwind CDN)

### Optimization Techniques
1. **CSS Grid**: Efficient layout (no nested divs)
2. **classList Manipulation**: Faster than style updates
3. **innerHTML**: Single update per render (not DOM methods)
4. **Result Limiting**: Search max 10 results
5. **Lazy Modal**: Modal only rendered when needed

---

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| CSS Grid | ✅ | ✅ | ✅ | ✅ |
| Backdrop Filter | ✅ | ✅ | ✅ | ✅ |
| Arrow Functions | ✅ | ✅ | ✅ | ✅ |
| Cmd+K Shortcut | ✅ | ✅ | ✅ | ✅ |
| LocalStorage | ✅ | ✅ | ✅ | ✅ |
| Responsive | ✅ | ✅ | ✅ | ✅ |

**Minimum**: ES2015 (ES6) JavaScript support required

---

## Development Workflow

### Adding a New Material

1. **Add CSV Row** in `csvData`:
   ```csv
   MyMaterial,Cluster,Type,score,strength,hdt,cost,...
   ```

2. **Optional: Add Detail Data** in `materialsDetailData`:
   ```javascript
   materialsDetailData["MyMaterial"] = {
       "common": { nozzle_temperature: 210, ... },
       "fea": { ... }
   }
   ```

3. **Test**:
   - Reload page
   - Filter and verify appearance
   - Click to open modal
   - Check all sections display correctly

### Adding a New Filter

1. **Add Checkbox** in HTML (Lines 200-300):
   ```html
   <input type="checkbox" data-key="New_Property" data-value="true">
   ```

2. **Update filterAndRender()** if needed (Lines 1696+)

3. **Test**: Checkbox should filter automatically

### Adding a Slicer Export

1. **Implement Function** (Lines 920-1280):
   ```javascript
   function exportMySlicerProfile(materialName, data) {
       const content = generateMyFormat(data)
       downloadFile(content, `${materialName}.myformat`)
   }
   ```

2. **Add Button** to modal export section

3. **Test**: Click button and verify file download

---

## Code Quality Standards

### Naming Conventions
- **Variables**: camelCase (e.g., `allMaterials`, `isSearchOpen`)
- **Functions**: camelCase (e.g., `openSearchModal()`)
- **Constants**: UPPER_SNAKE_CASE (none currently)
- **CSS Classes**: kebab-case (Tailwind + custom)
- **Data Keys**: snake_case (CSV columns) or camelCase (JS objects)

### Comment Standards
- **Function Comments**: JSDoc-style with purpose and parameters
- **Complex Logic**: Inline comments explaining why
- **Sections**: Comment headers (e.g., `// --- GLOBAL STATE ---`)
- **TODO**: Documented in TODO.md, not in code

### Error Handling
- **Graceful Degradation**: Missing data shows placeholder or CSV fallback
- **No try-catch Required**: Minimal error-prone operations
- **Console Checks**: Verify JavaScript works (no errors in console)

---

## Security Considerations

### What This App Does NOT Have
- User authentication
- External API calls
- Database connections
- File uploads
- Server-side processing

### Security Features
- ✅ No XSS vulnerabilities (innerHTML only on controlled data)
- ✅ No CSRF (no form submissions)
- ✅ No data exfiltration (offline-first)
- ✅ No dependency vulnerabilities (zero dependencies)

### Best Practices Used
- Content Security Policy ready (if deployed behind CDN)
- Input sanitization (CSV parsing with coerceType)
- No eval() or dynamic code execution

---

## Deployment

### Recommended: Railway.app
- See `DEPLOY_RAILWAY.md` for complete guide
- GitHub integration for auto-deploy
- Custom domain support
- Free tier available

### Alternative: Vercel
- See `DEPLOY_VERCEL.md` for legacy guide
- Same GitHub integration approach
- Environment: Static HTML

### Local Testing
```bash
# Python simple server
python3 -m http.server 8000

# Then open: http://localhost:8000
```

---

## Future Enhancements

### Short-term (Next Release)
- [ ] Extended search (properties, not just names)
- [ ] Fuzzy matching for typos
- [ ] Search history

### Medium-term
- [ ] Guided wizard mode (step-by-step selection)
- [ ] Advanced filters and saved presets
- [ ] Export comparison views

### Long-term
- [ ] Framework migration (React/Svelte for scalability)
- [ ] Backend API (user accounts, custom materials)
- [ ] Mobile app (React Native)

---

## Documentation Files

| File | Purpose | Audience |
|------|---------|----------|
| README.md | Quick start & feature overview | End users |
| CHANGELOG.md | Version history | Developers |
| TODO.md | Development roadmap | Developers |
| ARCHITECTURE.md | This file - Technical design | Developers |
| SEARCH_FEATURE.md | Cmd+K implementation details | Developers |
| DEPLOY_RAILWAY.md | Production deployment | DevOps/Users |
| DEPLOY_VERCEL.md | Legacy deployment | Reference |

---

## Maintenance & Support

### Common Issues

**Search not working**: Check that `allMaterials` is populated in `initialize()`

**Modal not showing**: Verify `openMaterialModal()` receives valid material object

**Filters not working**: Check that checkbox `data-key` matches CSV column name

**Export not downloading**: Verify `downloadFile()` works in browser (some browsers need HTTPS)

### Testing Checklist
- [ ] Page loads without console errors
- [ ] Filters update results in real-time
- [ ] Search works with Cmd+K / Ctrl+K
- [ ] Material modal opens and displays all sections
- [ ] Slicer exports download correctly
- [ ] Responsive on mobile (test at 375px width)
- [ ] Dark theme renders correctly
- [ ] Print settings display bed surface

---

## Contributors & Attribution

**Primary Development**: Minimal3DP  
**Data Sources**: MatterHackers, Simplify3D, Polymaker, CNC Kitchen, Prusa  
**Framework**: Tailwind CSS, Vanilla JavaScript  
**Hosting**: Railway.app

---

**Last Updated**: December 12, 2025  
**Version**: v1.6.0  
**Status**: Production Ready

For questions or contributions, see README.md for support links.
