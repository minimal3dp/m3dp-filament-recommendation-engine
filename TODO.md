# Project TODO & Roadmap

This document tracks the development roadmap for the **FDM Filament Recommendation Engine**, progressing from the current v1.0 application toward a comprehensive expert-level recommendation system.

---

## 📋 Table of Contents

- [Phase 1: V1 Refinement & Data Integration](#phase-1-v1-refinement--data-integration)
- [Phase 2: Expert System Logic](#phase-2-expert-system-logic)
- [Phase 3: Technical Stack & Deployment](#phase-3-technical-stack--deployment)
- [Phase 4: Advanced Features](#phase-4-advanced-features)
- [Phase 5: Community & Ecosystem](#phase-5-community--ecosystem)

---

## Phase 1: V1 Refinement & Data Integration

**Goal**: Enhance the current application with better UX, data integration, and basic interactivity improvements.

### 1.1 Integrate `materials.json`

- [ ] **Material Detail Modal**
  - [ ] Add click handlers to material cards
  - [ ] Create modal component with overlay/backdrop
  - [ ] Display comprehensive material information in modal
  
- [ ] **Detailed Print Settings Section**
  - [ ] Nozzle temperature range with recommendations
  - [ ] Bed temperature and surface recommendations
  - [ ] Print speed suggestions (perimeter, infill, first layer)
  - [ ] Retraction settings
  - [ ] Cooling fan recommendations
  
- [ ] **Advanced Engineering Data Section**
  - [ ] Complete mechanical properties table
  - [ ] Thermal expansion coefficients
  - [ ] FEA-ready material models
  - [ ] Long-term creep and fatigue data
  - [ ] Chemical resistance detailed chart
  
- [ ] **Print Profile Export**
  - [ ] Generate downloadable profiles for popular slicers (Cura, PrusaSlicer, Simplify3D)

### 1.2 Improve Filter UI

- [ ] **Reset Functionality**
  - [ ] Add "Reset All Filters" button in filter panel
  - [ ] Reset to default state (all checkboxes unchecked, sliders at minimum/maximum)
  - [ ] Add confirmation dialog or undo capability
  
- [ ] **Slider Enhancements**
  - [x] ~~Show numeric values next to sliders as they move~~ *(Completed in V1)*
  - [ ] Add input fields alongside sliders for direct numeric entry
  - [ ] Add "snap to common values" option (e.g., HDT: 60°, 80°, 100°, etc.)
  
- [ ] **Text Search**
  - [ ] Add search bar at top of results section
  - [ ] Filter by material name (fuzzy matching)
  - [ ] Filter by cluster/category
  - [ ] Show search result count
  
- [ ] **Filter Presets**
  - [ ] Add preset buttons for common use cases:
    - "Beginner Friendly" (High printability, low cost)
    - "Outdoor Parts" (UV resistant, weather resistant)
    - "Engineering Parts" (High strength, heat resistance)
    - "Flexible Parts" (TPU variants)
    - "Food Safe" (PETG, PLA with warnings)

### 1.3 Improve Sorting & Display

- [ ] **Sort Dropdown**
  - [ ] Add dropdown menu above results: "Sort by..."
  - [ ] Options:
    - Printability (High to Low) - *default*
    - Strength (High to Low)
    - Heat Resistance (High to Low)
    - Cost (Low to High)
    - Material Name (A-Z)
  - [ ] Persist sort preference in localStorage
  
- [ ] **View Toggles**
  - [ ] Add compact/detailed card view toggle
  - [ ] Add table view option (for comparing multiple materials side-by-side)
  
- [ ] **Comparison Mode**
  - [ ] Allow users to select 2-4 materials for direct comparison
  - [ ] Display comparison in side-by-side or table format
  - [ ] Highlight differences and trade-offs

### 1.4 Handle Annealable Materials

- [ ] **Annealing Toggle**
  - [ ] Add filter checkbox: "Show Annealed Properties (where applicable)"
  - [ ] When enabled, display annealed values for materials with `Annealable_for_HDT = true`
  
- [ ] **Visual Indication**
  - [ ] Add badge or icon to annealable materials
  - [ ] Show both as-printed and annealed values in comparison view
  
- [ ] **Annealing Guide**
  - [ ] In material modal, add annealing instructions (time, temperature, process)
  - [ ] Include warnings about dimensional changes and warping risks

### 1.5 Data Quality & Validation

- [ ] **Data Validation Script**
  - [ ] Create script to validate CSV data integrity
  - [ ] Check for missing values, outliers, and inconsistencies
  - [ ] Flag materials requiring data updates
  
- [ ] **Add Missing Materials**
  - [ ] PA11 (Nylon 11)
  - [ ] PC-CF (Polycarbonate Carbon Fiber)
  - [ ] PAHT-CF (Nylon-based high-temp CF)
  - [ ] PPS, PEI, and other high-performance materials
  - [ ] Specialty materials (conductive, magnetic, stone-filled)
  
- [ ] **Expand Properties**
  - [ ] Add food-safe flag
  - [ ] Add outdoor weathering data
  - [ ] Add biodegradability information
  - [ ] Add post-processing compatibility (sanding, painting, acetone smoothing)

---

## Phase 2: Expert System Logic

**Goal**: Transform from a simple filter tool into an intelligent recommendation system with domain expertise.

### 2.1 Implement Guided Wizard Mode

- [ ] **Wizard UI Framework**
  - [ ] Create step-by-step wizard interface (separate from filter view)
  - [ ] Add navigation (Next, Back, Skip) with progress indicator
  - [ ] Save wizard state to resume later
  
- [ ] **Wizard Questions** (Sequential flow)
  1. **Use Case**: "What will you be printing?"
     - Visual prototype / display piece
     - Functional part under load
     - Flexible/living hinge part
     - High-temperature application
     - Outdoor/UV exposed part
     - Food contact item
  
  2. **Mechanical Requirements**: "What mechanical properties matter most?"
     - High strength
     - High toughness (impact resistance)
     - Flexibility
     - Low friction
     - None / Not applicable
  
  3. **Environmental**: "Will your part be exposed to..."
     - High temperatures
     - UV light / outdoors
     - Chemicals or solvents
     - Water or humidity
     - None of the above
  
  4. **Constraints**: "What are your constraints?"
     - Must be easy to print (beginner-friendly)
     - No enclosure available
     - Budget-conscious
     - Need fast print speeds
     - Food safety required
  
- [ ] **Wizard Logic Engine**
  - [ ] Map answers to filter combinations
  - [ ] Pre-select appropriate filters based on wizard results
  - [ ] Display recommended materials with explanation of why they were selected

### 2.2 Application Guardrails & Warnings

- [ ] **Warning System Architecture**
  - [ ] Create warning modal/toast component
  - [ ] Define warning levels (Info, Caution, Critical)
  - [ ] Track which warnings user has acknowledged
  
- [ ] **Anisotropy Warnings**
  - [ ] Trigger when: `Strength_XY_MPa > 100` or user filters for high strength
  - [ ] Warning: *"⚠️ FDM parts are anisotropic. Z-axis strength is typically 40-60% lower than XY. Design your part to align layer lines with expected forces. Consider print orientation carefully."*
  - [ ] Include visual diagram showing layer orientation
  
- [ ] **Food Safety Warnings**
  - [ ] Trigger when: Material is PLA, PETG, or other "food-safe" material
  - [ ] Warning: *"⚠️ Food Safety Requires More Than Material Choice: Use a stainless steel nozzle (brass may contain lead). Apply food-safe epoxy coating to seal layer lines where bacteria can grow. Clean thoroughly before food contact. Consider regulatory requirements for your jurisdiction."*
  
- [ ] **Creep Warnings**
  - [ ] Trigger when: PLA selected + high strength filters active
  - [ ] Warning: *"⚠️ PLA is prone to creep under constant load. For functional parts that will bear sustained stress, consider PETG, ABS/ASA, or Nylon instead."*
  
- [ ] **Moisture Warnings**
  - [ ] Trigger when: Material has `Hygroscopic = true`
  - [ ] Warning: *"💧 This material absorbs moisture from air. Store in a dry box with desiccant. Dry filament before printing (typical: 65-70°C for 4-6 hours). Wet filament causes poor layer adhesion, stringing, and weak parts."*
  
- [ ] **Enclosure Requirements**
  - [ ] Trigger when: Material has `Requires_Enclosure = true`
  - [ ] Warning: *"🏠 This material requires an enclosure to prevent warping. Maintain stable ambient temperature (30-50°C). Avoid drafts and air conditioning."*
  
- [ ] **Fume Warnings**
  - [ ] Trigger when: Material has `Releases_Fumes = true`
  - [ ] Warning: *"☠️ This material releases fumes during printing. Print in a well-ventilated area or use an enclosure with filtration (HEPA + activated carbon). Avoid prolonged exposure. Some materials may release harmful VOCs or ultrafine particles."*
  
- [ ] **High-Temperature Warnings**
  - [ ] Trigger when: Material requires nozzle temp > 280°C
  - [ ] Warning: *"🔥 High-temperature materials require specialized hardware: All-metal hotend, high-temp thermistor (PT100/PT1000), and potentially heated chamber. Standard PTFE-lined hotends will degrade. Consider printer capability before attempting."*
  
- [ ] **Abrasive Material Warnings**
  - [ ] Trigger when: Material has `Requires_Hardened_Nozzle = true`
  - [ ] Warning: *"⚙️ This material contains abrasive particles (carbon fiber, glass fiber, metal, wood). Use a hardened steel or ruby-tipped nozzle. Brass nozzles will wear quickly, affecting print quality and accuracy."*

### 2.3 Multi-Criteria Decision Making (MCDM) Ranker

- [ ] **MCDM UI Component**
  - [ ] Add "Advanced Ranking" section to filters
  - [ ] Display slider/input for each weighted criterion
  - [ ] Show total weight allocation (should sum to 100% or normalize)
  
- [ ] **Weighting Criteria**
  - [ ] Strength (0-5)
  - [ ] Heat Resistance (0-5)
  - [ ] Printability (0-5)
  - [ ] Cost (0-5)
  - [ ] Toughness (0-5)
  - [ ] Stiffness (0-5)
  
- [ ] **MCDM Algorithm**
  - [ ] Implement TOPSIS (Technique for Order of Preference by Similarity to Ideal Solution)
  - [ ] Normalize all criteria to 0-1 scale
  - [ ] Calculate weighted scores
  - [ ] Rank materials by composite score
  
- [ ] **Display Results**
  - [ ] Show "Composite Score" on each material card
  - [ ] Sort by composite score when MCDM mode is active
  - [ ] Provide explanation: "This material scores 87/100 based on your priorities"
  
- [ ] **MCDM Presets**
  - [ ] "Strength-Optimized"
  - [ ] "Cost-Performance Balance"
  - [ ] "Ease of Use"
  - [ ] Custom (user-defined weights)

---

## Phase 3: Technical Stack & Deployment

**Goal**: Modernize architecture for scalability, maintainability, and performance.

### 3.1 Frontend Framework Migration

- [ ] **Evaluate Frameworks**
  - [ ] Document pros/cons of React, Vue, Svelte for this use case
  - [ ] Consider bundle size and performance implications
  - [ ] Decide on framework (Recommendation: **React** or **Svelte**)
  
- [ ] **Component Architecture**
  - [ ] Design component hierarchy
  - [ ] Define state management approach (Context API, Zustand, or Redux)
  - [ ] Plan routing structure (single-page vs multi-page)
  
- [ ] **Refactor to Components**
  - [ ] `App` - Root component
  - [ ] `FilterPanel` - All filters and controls
  - [ ] `MaterialCard` - Individual material display
  - [ ] `MaterialModal` - Detailed material view
  - [ ] `Wizard` - Guided recommendation flow
  - [ ] `ComparisonView` - Side-by-side material comparison
  - [ ] `WarningSystem` - Alert/notification manager
  
- [ ] **State Management**
  - [ ] Materials data state
  - [ ] Filter state (checkboxes, sliders, search)
  - [ ] UI state (modal open/closed, wizard step, view mode)
  - [ ] User preferences (localStorage persistence)

### 3.2 Backend & Data Management

- [ ] **Data Hosting Options**
  - **Option A - Static Files**: Host CSV/JSON on CDN, fetch via HTTP
    - [ ] Set up JSON hosting
    - [ ] Implement caching strategy
    - [ ] Add error handling for network failures
  
  - **Option B - Backend API**: Build minimal API server
    - [ ] Choose tech stack (Node.js + Express, Python + FastAPI, etc.)
    - [ ] Design REST API endpoints:
      - `GET /api/materials` - List all materials
      - `GET /api/materials/:id` - Get material details
      - `POST /api/materials/search` - Filtered search
      - `GET /api/materials/compare?ids=1,2,3` - Compare materials
    - [ ] Implement caching (Redis or in-memory)
  
  - **Option C - Database**: Full database solution
    - [ ] Choose database (PostgreSQL, MongoDB, or Firebase/Firestore)
    - [ ] Design schema
    - [ ] Migrate CSV data to database
    - [ ] Build ORM/query layer
    - [ ] Add data versioning and update workflow
  
- [ ] **Data Pipeline**
  - [ ] Create data ingestion scripts
  - [ ] Build validation and testing suite
  - [ ] Implement versioning (track data updates over time)
  - [ ] Create admin interface for data updates

### 3.3 Build & Deployment

- [ ] **Build Configuration**
  - [ ] Set up Vite, Webpack, or similar bundler
  - [ ] Configure TypeScript (if adopted)
  - [ ] Set up linting (ESLint) and formatting (Prettier)
  - [ ] Configure testing framework (Jest, Vitest, or Playwright)
  
- [ ] **Deployment Options**
  - **Option A - GitHub Pages**: Free, simple, no backend
    - [ ] Configure GitHub Actions for CI/CD
    - [ ] Deploy static build on push to `main`
  
  - **Option B - Vercel**: Optimized for frontend frameworks
    - [ ] Connect GitHub repo
    - [ ] Configure build settings
    - [ ] Set up preview deployments for PRs
  
  - **Option C - Netlify**: Similar to Vercel, great DX
    - [ ] Connect GitHub repo
    - [ ] Configure redirects and headers
    - [ ] Set up form handling (if needed for feedback)
  
  - **Option D - Self-hosted**: Full control (DigitalOcean, AWS, etc.)
    - [ ] Set up VPS or container hosting
    - [ ] Configure NGINX or Apache
    - [ ] Set up SSL/TLS certificates
    - [ ] Implement monitoring and logging
  
- [ ] **Domain & Branding**
  - [ ] Register domain name (e.g., `filamentfinder.app`)
  - [ ] Configure DNS
  - [ ] Add analytics (privacy-respecting options like Plausible or Fathom)
  - [ ] Create logo and brand assets

### 3.4 Testing & Quality

- [ ] **Unit Tests**
  - [ ] Test filtering logic
  - [ ] Test MCDM algorithms
  - [ ] Test data parsing and validation
  
- [ ] **Integration Tests**
  - [ ] Test filter combinations
  - [ ] Test wizard flow
  - [ ] Test API endpoints (if applicable)
  
- [ ] **End-to-End Tests**
  - [ ] Test full user workflows
  - [ ] Test across different browsers and devices
  
- [ ] **Performance Testing**
  - [ ] Benchmark load times
  - [ ] Optimize bundle size
  - [ ] Test with large datasets (future-proofing)

---

## Phase 4: Advanced Features

**Goal**: Add sophisticated features that provide unique value beyond basic filtering.

### 4.1 Material Substitution Suggestions

- [ ] **Substitution Engine**
  - [ ] When a material is out of stock or unavailable, suggest alternatives
  - [ ] Use similarity scoring based on property vectors
  - [ ] Highlight trade-offs in substitution (e.g., "Slightly lower heat resistance, but better printability")

### 4.2 Print Cost Calculator

- [ ] **Cost Estimation Tool**
  - [ ] Input: Part volume, infill percentage, support material
  - [ ] Calculate material cost based on price per kg
  - [ ] Estimate print time (rough)
  - [ ] Compare total cost across materials

### 4.3 Part Design Guidance

- [ ] **Design Rule Checks**
  - [ ] Minimum wall thickness for each material
  - [ ] Overhang angle limits
  - [ ] Support requirements
  - [ ] Recommended layer height and extrusion width
  
- [ ] **Orientation Recommendations**
  - [ ] Suggest optimal print orientation for strength
  - [ ] Visualize layer direction relative to forces

### 4.4 Community Features

- [ ] **User Reviews & Ratings**
  - [ ] Allow users to rate materials (printability, accuracy of data)
  - [ ] Add comments/notes on specific applications
  - [ ] Moderate and curate community feedback
  
- [ ] **Print Profile Sharing**
  - [ ] Users can upload and share their optimized print profiles
  - [ ] Rate and review profiles
  - [ ] Filter by printer model

### 4.5 Integration with Tools

- [ ] **Slicer Integration**
  - [ ] Export material selection to slicer profiles
  - [ ] Browser extension to inject recommendations into OctoPrint/slicer UIs
  
- [ ] **CAD Integration**
  - [ ] Fusion 360 / SolidWorks / Inventor add-in
  - [ ] Recommend materials based on part geometry and stress analysis
  
- [ ] **E-commerce Integration**
  - [ ] Link to buy materials from major suppliers
  - [ ] Affiliate links (ethically disclosed)
  - [ ] Price comparison across vendors

---

## Phase 5: Community & Ecosystem

**Goal**: Build a sustainable, community-driven project.

### 5.1 Documentation

- [ ] **User Guide**
  - [ ] How to use the tool
  - [ ] Interpreting material properties
  - [ ] Case studies and examples
  
- [ ] **Developer Documentation**
  - [ ] API documentation (if applicable)
  - [ ] Contributing guidelines
  - [ ] Code architecture overview
  
- [ ] **Material Database Documentation**
  - [ ] Data sources and methodology
  - [ ] How to contribute new materials
  - [ ] Data validation standards

### 5.2 Community Building

- [ ] **Open Source**
  - [ ] Choose license (MIT or GPL)
  - [ ] Set up GitHub Issues and Discussions
  - [ ] Create contributing guidelines
  
- [ ] **Community Channels**
  - [ ] Discord or Slack community
  - [ ] Reddit presence (/r/3Dprinting)
  - [ ] YouTube channel (tutorials, material reviews)
  
- [ ] **Outreach**
  - [ ] Partner with filament manufacturers for data
  - [ ] Collaborate with 3D printing YouTubers and educators
  - [ ] Present at conferences (e.g., Maker Faire, TCT, RAPID)

### 5.3 Monetization (Optional)

- [ ] **Freemium Model**
  - [ ] Free: Basic filtering and recommendations
  - [ ] Pro: MCDM ranking, comparison mode, CAD integration, no ads
  
- [ ] **Affiliate Revenue**
  - [ ] Ethical affiliate links to filament suppliers
  - [ ] Full transparency to users
  
- [ ] **Sponsorships**
  - [ ] Filament manufacturer sponsorships (clearly labeled)
  - [ ] Patreon or GitHub Sponsors for sustainability

### 5.4 Mobile App

- [ ] **Native or PWA**
  - [ ] Evaluate Progressive Web App vs native (React Native, Flutter)
  - [ ] Offline-first capability
  - [ ] QR code scanning for filament rolls (future: NFC tags)
  
- [ ] **Mobile-Specific Features**
  - [ ] Camera integration for color matching
  - [ ] AR preview of material finish (e.g., matte vs glossy)

---

## 🎯 Priority Matrix

| Priority | Phase | Item |
|----------|-------|------|
| **P0** (Critical) | 1 | Integrate `materials.json` for detailed data |
| **P0** | 1 | Add "Reset Filters" button |
| **P0** | 1 | Implement text search |
| **P1** (High) | 2 | Guided wizard mode |
| **P1** | 2 | Application guardrails and warnings |
| **P1** | 1 | Annealing properties toggle |
| **P2** (Medium) | 3 | Framework migration (React/Svelte) |
| **P2** | 2 | MCDM ranking system |
| **P2** | 3 | Deploy to Vercel/Netlify |
| **P3** (Low) | 4 | Cost calculator |
| **P3** | 4 | Community reviews |
| **P3** | 5 | Mobile app |

---

## 📊 Success Metrics

- **User Adoption**: 1,000 monthly active users by Q2 2026
- **Data Quality**: 100% of materials have complete TDS-verified data
- **Community**: 50+ contributors to material database
- **Expert System Accuracy**: 90%+ user satisfaction with recommendations (via surveys)
- **Performance**: < 2 second load time, < 100ms filter response

---

**Last Updated**: November 2025  
**Version**: 1.0  
**Maintainer**: M3DP Development Team