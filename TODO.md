# Project TODO & Roadmap

This document tracks the development roadmap for the **FDM Filament Recommendation Engine**, progressing from the current v1.3.0 application toward a comprehensive expert-level recommendation system.

**Brand Context:** This tool is part of the minimal3dp.com ecosystem (youtube.com/channel/UCM_8Mv-0S1LnnJpRJLjahaw, 5k+ subscribers). Development follows the "functional minimalism" philosophy: taking complex 3D printing topics and minimizing cognitive load through practical, utility-first tools. Target audience: "Ambitious Beginners" and "Intermediate Upgraders" ready to optimize their printing workflow.


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

- [x] **Material Detail Modal** *(Completed in v1.1)*
  - [x] Add click handlers to material cards
  - [x] Create modal component with overlay/backdrop
  - [x] Display comprehensive material information in modal
  
- [x] **Detailed Print Settings Section** *(Completed in v1.1)*
  - [x] Nozzle temperature range with recommendations
  - [x] Bed temperature and surface recommendations
  - [x] Print speed suggestions (perimeter, infill, first layer)
  - [x] Cooling fan recommendations

- [x] **Expanded Material Database** *(Completed in v1.3)*
  - [x] Integrated data/alternate_data/material_db.csv (40 materials vs original 23)
  - [x] Created scripts/merge_materials.py for systematic dataset comparison
  - [x] Merged datasets: 17 new materials, 6 updates, 40 total
  - [x] New additions: PPSU, HIPS, Nylon PA6/PA12 variants, PC-ABS Blend, PET, PETG-CF, PLA specialty variants (Silk, Glow), TPU hardness variants (85A, 95A), fiber composites
  - [x] Updated materialsDetailData for Nylon (PA6), Nylon (PA12) to match CSV naming
  
- [x] **Advanced Engineering Data Section** *(Partially completed in v1.1)*
  - [x] Complete mechanical properties table
  - [x] FEA-ready material models
  - [x] Chemical resistance detailed chart

### 1.1.1 Nozzle Compatibility Filter *(NEW - Completed in v1.1)*

- [x] **Nozzle Type Selection**
  - [x] Add dropdown for nozzle type (Brass, Hardened Steel, Ruby, Stainless Steel)
  - [x] Filter materials based on nozzle compatibility
  - [x] Display nozzle information and recommendations
  - [x] Warn users about abrasive materials requiring hardened nozzles

### 1.1.2 Enhanced Material Data *(Completed in v1.2)*

- [x] **Additional Engineering Data**
  - [x] Thermal expansion coefficients
  - [x] Long-term creep and fatigue data
  - [x] Additional thermal properties (conductivity, specific heat capacity)
  - [x] Creep resistance ratings for material selection
  
- [x] **Print Profile Export**
  - [x] Generate downloadable profiles for popular slicers (Cura, PrusaSlicer, Simplify3D)
  - [x] Export in multiple slicer-specific formats (.ini for Cura/Prusa, .fff for Simplify3D)
  - [x] Include material-specific settings (temperatures, speeds, retraction, etc.)

### 1.2 Improve Filter UI ✅ COMPLETED

- [x] **Reset Functionality** *(Completed v1.3)*
  - [x] Add "Reset All Filters" button in filter panel
  - [x] Reset to default state (all checkboxes unchecked, sliders at minimum/maximum)
  - [ ] Add confirmation dialog or undo capability *(Deferred - not required)*
  
- [x] **Slider Enhancements** *(Completed v1.3)*
  - [x] ~~Show numeric values next to sliders as they move~~ *(Completed in V1)*
  - [x] Add input fields alongside sliders for direct numeric entry
  - [x] Add "snap to common values" option (e.g., HDT: 60°, 80°, 100°, etc.)
  
- [x] **Text Search** *(Completed v1.3)*
  - [x] Add search bar at top of results section
  - [x] Filter by material name (fuzzy matching)
  - [x] Filter by cluster/category
  - [x] Show search result count *(via existing results count display)*
  
- [x] **Filter Presets** *(Completed v1.3)*
  - [x] Add preset buttons for common use cases:
    - [x] "Beginner Friendly" (High printability, low cost)
    - [x] "Outdoor Parts" (UV resistant, weather resistant)
    - [x] "Engineering Parts" (High strength, heat resistance)
    - [x] "Flexible Parts" (TPU variants)
    - [ ] "Food Safe" (PETG, PLA with warnings) *(Deferred - requires food safety data)*

### 1.3 TDS (Technical Data Sheet) Integration *(Future)*

  - [ ] **Extract Material Properties from TDS PDFs** (130+ files in tds/ folder)
    - [ ] Review tds/README.md workflow guidance
    - [ ] Consider automated extraction (PyPDF2/pdfplumber) vs manual curation
    - [ ] Target properties: nozzle/bed temps, print speeds, retraction, material certifications, detailed mechanical/thermal data
    - [ ] Map extracted data to materialsDetailData enrichment or new CSV columns
    - [ ] Script approach: scripts/extract_tds.py following Python-first workflow pattern

  - [x] **Minimal3DP Brand Strategy Integration** *(Completed in v1.3)*
    - [x] Reviewed MINIMAL3DP_APP_GUIDE.md and comprehensive brand specification
    - [x] Documented in TODO: Tool suite positioning, YouTube integration strategy (5k+ subscribers)
    - [x] Identified Amazon Associates monetization pattern (utility-based affiliate links, tag: mwf064-20)
    - [x] Cross-linking strategy: Hugo shortcodes, ecosystem loop, video descriptions
    - [x] Brand voice documented: "Detailed (And Boring)" thoroughness, "Ambitious Beginner" target audience
    
  - [ ] **Minimal3DP Ecosystem Integration (Next Steps)**
    - [ ] Create companion YouTube video tutorial (material selection workflow, tool demo)
    - [ ] Add tool link to minimal3dp channel description and pinned comments on relevant videos
    - [ ] Integrate with Hugo main site at minimal3dp.com/tools/filament-recommendation-engine
    - [ ] Add utility-based Amazon affiliate links for recommended filament spools per material
    - [ ] Implement GA4 tracking for affiliate clicks, tool usage, material selections
    - [ ] Create Discord channel for community support and feedback gathering
    - [ ] Write blog post for minimal3dp.com/blog with embedded YouTube video using `{{< youtube >}}` shortcode

### 1.4 Improve Sorting & Display *(In Progress / Partially Completed in v1.4)*

  - [x] Add dropdown menu above results: "Sort by..."
  - [x] Options:
    - Printability (High to Low) - *default*
    - Strength (High to Low)
    - Heat Resistance (High to Low)
    - Cost (Low to High)
    - Material Name (A-Z)
  - [x] Persist sort preference in localStorage
  
- [ ] **View Toggles**
  - [x] Add compact/detailed card view toggle
  - [x] Add table view option (for comparing multiple materials side-by-side)
  
  - [x] Allow users to select 2-4 materials for direct comparison
  - [x] Display comparison in side-by-side or table format
  - [x] Highlight differences and trade-offs

### 1.4 Handle Annealable Materials *(Partially Completed in v1.4)*

  - [x] Add filter checkbox: "Show Annealed Properties (where applicable)"
  - [x] When enabled, display annealed values for materials with `Annealable_for_HDT = true`
  
  - [ ] **Visual Indication**
  - [x] Add badge or icon to annealable materials
    - [x] Show both as-printed and annealed values in comparison view
  
  - [x] In material modal, add annealing instructions (time, temperature, process)
  - [x] Include warnings about dimensional changes and warping risks

### 1.5 Data Quality & Validation *(Future Enhancement)*

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

### 1.6 External Reference Data Integration *(Recommended for v1.5 - Nov 2025)*

Based on analysis of industry-standard filament guides (Simplify3D, MatterHackers, Bambu Lab, Prusa), the following enhancements are recommended to improve data accuracy and coverage:

- [ ] **Validate Mechanical Properties Against Simplify3D Materials Table**
  - [ ] Cross-reference Ultimate Strength (MPa) values for 13 common materials
  - [ ] Validate Maximum Service Temperature data
  - [ ] Add missing Coefficient of Thermal Expansion values
  - [ ] Source: https://www.simplify3d.com/resources/materials-guide/properties-table/
  
- [ ] **Expand Print Settings from MatterHackers Guide**
  - [ ] Add missing materials: ASA (250±10°C / 90±10°C), Polycarbonate (290±20°C / 130±15°C)
  - [ ] Expand materialsDetailData with MatterHackers-validated temp ranges
  - [ ] Add flexible filament profiles (TPU/TPE: 220-250°C nozzle, 30-50°C bed)
  - [ ] Validate bed adhesion recommendations (Blue Tape, PEI, Kapton, Hairspray, Garolite)
  - [ ] Source: https://www.matterhackers.com/3d-printer-filament-compare
  
- [ ] **Add Annealing Data from Multiple Sources**
  - [ ] Validate existing annealing presets (PLA, PETG, Nylon, PC, HTPLA) against MatterHackers
  - [ ] Expand annealingPresets with manufacturer-specific guidance
  - [ ] Add post-annealing dimensional change warnings
  - [ ] Note: MatterHackers mentions Tough PLA heat tolerance increases to 60°C post-treatment
  
- [ ] **Add Footer References Section**
  - [ ] Link to Simplify3D Materials Table (excellent structured data, comparison tool)
  - [ ] Link to MatterHackers Filament Guide (comprehensive, beginner-friendly)
  - [ ] Already included: Polymaker Wiki, CNC Kitchen, Prusa Guide, MatterHackers
  - [ ] Consider Bambu Lab PDF download link for offline reference
  
- [ ] **Extract Structured Data from Bambu Lab PDF** *(Future - Requires PDF Access)*
  - [ ] Download Bambu Lab Filament Guide PDF (https://cdn1.bambulab.com/filament/filament-guide/250123/filament-guide-en.pdf)
  - [ ] Extract comparison table data (4-material side-by-side format)
  - [ ] Validate against existing material_db.csv
  - [ ] Add any Bambu-specific profiles or recommendations
  
- [ ] **Manual Review: Learn by Layers Filament Database PDF** *(Future)*
  - [ ] Download PDF: https://www.learnbylayers.com/wp-content/uploads/2018/06/ThreeDotZero-Filament-Comparison-LBL.pdf
  - [ ] Extract comparative material data (if accessible)
  - [ ] Older source (2018), validate data against current standards

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
  - [ ] Create warning modal/toast component (follow m3dp "functional minimalism" design)
  - [ ] Define warning levels (Info, Caution, Critical)
  - [ ] Track which warnings user has acknowledged (localStorage)
  - [ ] Style aligned with m3dp brand: Clear, direct, educational tone (not condescending)
  - [ ] Include "Learn More" links to relevant minimal3dp.com blog posts or YouTube tutorials
  
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

### 3.3 Build & Deployment (Aligned with m3dp Stack)

- [ ] **Build Configuration**
  - [ ] Set up Vite, Webpack, or similar bundler
  - [ ] Configure TypeScript (if adopted)
  - [ ] Set up linting (ESLint) and formatting (Prettier)
  - [ ] Configure testing framework (Jest, Vitest, or Playwright)

- [ ] **Deployment Strategy (m3dp Standard)**
  - **PRIMARY OPTION: Hugo Integration at minimal3dp.com**
    - [ ] Deploy as Hugo shortcode or static page at minimal3dp.com/tools/filament-recommendation-engine
    - [ ] Embed tool using self-contained HTML/JS that can be dropped into Hugo page
    - [ ] Benefits: Centralized SEO authority, all backlinks boost main domain, single brand identity
    - [ ] Technology: Static HTML/JS with Tailwind CSS (aligns with current v1.x approach)
  - **SECONDARY OPTION: Vercel Subdomain (if traffic justifies)**
    - [ ] Deploy to filament.minimal3dp.com subdomain via Vercel (free tier)
    - [ ] Connect GitHub repo for auto-deploy on push to main
    - [ ] Configure custom domain with CNAME: cname.vercel-dns.com
    - [ ] Auto HTTPS, Edge CDN, unlimited bandwidth (within fair use)
    - [ ] Only use subdomain if tool becomes major standalone product (10k+ monthly users)
  
- [ ] **Hugo Integration Workflow** *(Recommended)*
  - [ ] Create Hugo page at content/tools/filament-recommendation-engine/_index.md
  - [ ] Embed tool in shortcode: `{{< filament-tool >}}` or direct HTML inclusion
  - [ ] Add to main site navigation menu (configured in hugo.toml)
  - [ ] Cross-link from Klipper calibration pages and blog posts
  - [ ] Include in "Tools" section of minimal3dp.com homepage
  
- [ ] **SEO Optimization (m3dp Standards)**
  - [ ] Optimize page title: "FDM Filament Material Selection Tool - minimal3dp | 40+ Materials"
  - [ ] Meta description (150-160 chars): "Free tool to select optimal 3D printing filament. Compare 40+ materials by strength, heat resistance, printability, cost. PLA, PETG, ABS, Nylon, PEEK, and more."
  - [ ] Add Schema.org structured data (WebApplication type)
  - [ ] Create OG image (1200x630px): Tool name, key benefit ("40+ Materials"), branding
  - [ ] Add FAQ section for rich snippets (5-10 common material selection questions)
  - [ ] Submit sitemap to Google Search Console after deployment
  
- [ ] **Analytics & Tracking (m3dp Standards)**
  - [ ] Implement Google Analytics 4 (GA4)
    - Use Measurement ID from minimal3dp.com (if integrated) or create new property
    - Track custom events: `material_selected`, `filter_applied`, `modal_opened`, `profile_exported`, `affiliate_click`
  - [ ] Set up Google Search Console
    - Add property, verify ownership, submit sitemap
    - Monitor impressions, clicks, CTR, keyword rankings weekly
  - [ ] Configure GA4 Goals
    - Primary conversion: Tool usage (material selection completed)
    - Secondary: Affiliate link clicks, profile exports, video plays (if embedded)
  - [ ] Track performance metrics
    - Page load time (goal: <2s), filter response time (goal: <100ms)
    - Bounce rate (goal: <60%), session duration (goal: >2min)
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

### 4.0 Printer Selection Filter *(Future Feature)*

- [ ] **Printer Database Integration**
  - [ ] Create printer database with temperature capabilities (based on FDM 3D Printer Report 2024-2025.pdf)
  - [ ] Include hotend max temp, bed max temp, enclosure availability
  - [ ] Add printer model selection dropdown
  
- [ ] **Temperature Compatibility Filtering**
  - [ ] Filter materials based on printer's temperature capabilities
  - [ ] Warn if material requires higher temps than printer supports
  - [ ] Show upgrade recommendations (e.g., "This printer needs an all-metal hotend for this material")
  
- [ ] **Enclosure Requirements**
  - [ ] Filter based on whether printer has enclosure
  - [ ] Suggest DIY enclosure options for printers without one
  
- [ ] **Build Volume Considerations**
  - [ ] Track printer build volumes
  - [ ] Warn about warping risk for large parts on printers without enclosures

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
  - [ ] Choose license (MIT recommended per m3dp brand standards)
  - [ ] Set up GitHub Issues and Discussions
  - [ ] Create contributing guidelines
  
- [ ] **Community Channels**
  - [x] **YouTube Channel Integration** *(Aligned with m3dp ecosystem)*
    - Primary channel: youtube.com/channel/UCM_8Mv-0S1LnnJpRJLjahaw (5k+ subscribers)
    - Create companion tutorial video for this tool (material selection guide)
    - Cross-promote in video descriptions with direct tool link
    - Use `{{< youtube "VIDEO_ID" >}}` shortcode for Hugo blog integration
  - [ ] **Discord Community** *(Recommended by m3dp brand analysis)*
    - Establish minimal3dp Discord server with channel for this tool
    - Target "Ambitious Beginner" audience (per brand persona)
    - Use as source for identifying high-friction user problems
    - Integrate with Patreon for supporter perks (if applicable)
  - [ ] **Reddit Presence**
    - Share in r/3Dprinting, r/BambuLab, r/functionalprint
    - Utility-based sharing (helpful, not spammy per brand voice)
  
- [ ] **Outreach**
  - [ ] Partner with filament manufacturers for data
  - [ ] Collaborate with 3D printing YouTubers (including minimal3dp channel content)
  - [ ] Present at conferences (e.g., Maker Faire, TCT, RAPID)

### 5.3 Monetization (Aligned with m3dp Brand Strategy)

- [ ] **Amazon Associates Integration** *(Primary Revenue Stream)*
  - [ ] Implement utility-based affiliate links for materials
    - Link to specific filament spools recommended per material (e.g., "eSUN PLA+", "Overture PETG")
    - Use affiliate tag: `mwf064-20` (m3dp standard)
    - **MANDATORY:** Include bolded disclosure: "** Links are Amazon Affiliate Links **"
  - [ ] Create Hugo shortcode `{{< amazon-product "ASIN" >}}` for blog integration
    - Auto-generates affiliate link with proper tracking
    - Includes product card with rating, price, image
    - Adds GA4 `affiliate_click` event tracking
  - [ ] Add contextual product recommendations in modal
    - After user selects material, show "Recommended Filaments" section
    - Include 2-3 top-rated products per material from affiliate database
  
- [ ] **Direct Support (Ko-fi)** *(Secondary Channel)*
  - [ ] Add Ko-fi link: ko-fi.com/minimal3dp
  - [ ] Position as "tip jar" for one-time support
  - [ ] Include in footer and header (subtle placement)
  
- [ ] **Recurring Support (Patreon - Future)**
  - [ ] Consider Patreon integration for advanced features
  - [ ] Potential tiers: "Supporter" ($2), "Pro Maker" ($5), "Ecosystem Developer" ($10)
  - [ ] Perks: Early access, Discord role, private Q&A, behind-the-scenes
  - [ ] Avoid paywalled content (keep open-source ethos)
  
- [ ] **Sponsorships**
  - [ ] Filament manufacturer partnerships (clearly labeled)
  - [ ] Maintain editorial independence and transparency

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

## 📊 Success Metrics (m3dp-Aligned)

### Traffic & SEO Goals
- **Month 1 Post-Launch:** 500-1,000 impressions in Google Search Console, indexed pages
- **Month 3:** 5,000+ impressions, 250+ clicks, Page 2-3 ranking for "3d printing filament selector"
- **Month 6:** 15,000+ impressions, 750+ clicks, Page 1 (top 10) for primary keywords
- **Month 12:** 30,000+ impressions, 1,500+ clicks, Top 3 ranking for "filament comparison tool"

### YouTube Integration Goals
- **Launch:** Companion tutorial video published (10-15 min, "Detailed and Boring" style)
- **Month 1:** 500+ YouTube referrals to tool, video embedded in minimal3dp.com blog post
- **Month 3:** 2,000+ YouTube referrals, cross-promoted in related Klipper/OrcaSlicer videos
- **Month 6:** 5,000+ YouTube referrals, tool linked in 10+ video descriptions

### Revenue Goals (Amazon Associates)
- **Month 1:** $10-20 (utility-based filament spool recommendations)
- **Month 3:** $40-60 (affiliate links in material modals, blog post integration)
- **Month 6:** $80-120 (optimized product recommendations, high-traffic keywords)
- **Month 12:** $200-400 (scale with traffic, PA-API integration if needed)

### Technical Performance
- **Page Load:** < 2 seconds (Hugo static sites typically 90-100 PageSpeed score)
- **Filter Response:** < 100ms
- **Core Web Vitals:** All green (LCP < 2.5s, FID < 100ms, CLS < 0.1)

### Community & Engagement
- **Discord:** 50+ members in filament-tool channel by Month 6
- **Data Quality:** 100% of 40 materials have verified properties
- **Contributions:** 5+ GitHub issues/PRs from community feedback
- **User Satisfaction:** 90%+ satisfaction (via embedded feedback widget or Discord surveys)

---

## 🎥 Content Creation Roadmap (m3dp Ecosystem Integration)

### YouTube Content Strategy

- [ ] **Primary Launch Video** (Priority: P0)
  - **Title:** "Choosing the Right 3D Printing Filament Made Easy - Free Tool Walkthrough (2025)"
  - **Duration:** 12-18 minutes (data shows long-form content drives highest watch time and revenue)
  - **Structure:**
    1. Problem: "Stop wasting money on wrong filament choices"
    2. Solution: Demo of tool with real material selection scenarios
    3. Process: Step-by-step walkthrough of filters, search, modal details, profile export
  - **Key Points:**
    - Show 40 materials database
    - Demonstrate nozzle compatibility filter
    - Export slicer profiles feature
    - Compare PLA vs PETG vs ABS for functional parts
  - **Links in Description:**
    - Tool: minimal3dp.com/tools/filament-recommendation-engine
    - Klipper Calibration: minimal3dp.com/klipper-calibration
    - Utility-based Amazon affiliate links: "Filaments I use:" [eSUN PLA+, Overture PETG, etc.]
    - **Mandatory disclosure:** "** Links are Amazon Affiliate Links **"
  
- [ ] **Follow-Up Content Series** (Target: 1 video per month)
  - **Video 2:** "PLA vs PETG vs ABS: Which Filament Should You Use?" (comparison deep-dive)
  - **Video 3:** "Engineering Filaments Explained: Nylon, PC, PEEK for Functional Parts"
  - **Video 4:** "Flexible Filaments Guide: TPU 85A vs 95A Material Selection"
  - **Video 5:** "Composite Filaments: Carbon Fiber PLA, PETG, Nylon Comparison"
  
- [ ] **Cross-Promotion in Existing Videos**
  - Add YouTube cards to tool link at 30%, 60%, 90% timestamps in related videos
  - Pin comment with tool link on: Klipper calibration videos, OrcaSlicer tutorials, material-specific content
  - Update video descriptions with tool link in "🔧 FREE TOOLS" section

### Blog Content Strategy (minimal3dp.com/blog)

- [ ] **Primary Blog Post** (Launch Announcement)
  - **Title:** "New Tool: FDM Filament Material Selection Engine - 40+ Materials Compared"
  - **URL:** minimal3dp.com/blog/posts/filament-recommendation-engine-launch
  - **Structure:**
    - Intro: The problem (filament confusion, wasted money/time)
    - Tool overview: 40 materials, 26 properties, filters, search, profiles
    - Embed YouTube video: `{{< youtube "VIDEO_ID" >}}`
    - Step-by-step usage guide (with screenshots)
    - FAQs: "How do I choose between PLA and PETG?" etc.
    - Amazon affiliate section: "Recommended Filament Spools" with `{{< amazon-product >}}` shortcodes
  - **SEO Keywords:** "3d printing filament selector", "filament comparison tool", "best fdm filament", "pla vs petg comparison"
  
- [ ] **Supporting Blog Posts** (1 per month, align with videos)
  - "The Complete Guide to 3D Printing Filament Materials"
  - "Nylon Filaments for 3D Printing: PA6 vs PA12 vs PA11"
  - "High-Temperature Filaments: When to Use PEEK, PEKK, ULTEM"
  - "Filament Storage and Drying: Essential Guide for Hygroscopic Materials"

### Medium Cross-Posting Strategy

- [ ] **Cross-Post Blog Content to Medium** (48 hours after main site publish)
  - Set canonical URL pointing to minimal3dp.com (avoid duplicate content penalty)
  - Add intro: "Originally published at minimal3dp.com: [link]"
  - Add footer CTA: Links to tool, YouTube channel, main site, Discord
  - Tag with: "3D Printing", "Materials Science", "Addons", "Tools", "Manufacturing"
  
### Social Media Distribution

- [ ] **Reddit Strategy**
  - Share in r/3Dprinting, r/functionalprint, r/BambuLab with helpful, non-spammy posts
  - Example: "I built a free tool to compare 40+ filament materials - Here's how it works [screenshots]"
  - Engage with comments, provide technical support, gather feedback
  
- [ ] **Discord Integration**
  - Create #filament-tool channel in minimal3dp Discord
  - Announce launch with demo and Q&A session
  - Use for user support, bug reports, feature requests
  - Source for identifying high-friction problems for future content

### Content Workflow (Per Release)

1. **Week 1:** Plan video topic aligned with tool update or material focus
2. **Week 2:** Film and edit video (12-18 min, "Detailed and Boring" style)
3. **Week 3:** Write blog post with embedded video, screenshots, utility-based affiliate links
4. **Week 4:** Publish video + blog post simultaneously
   - Video description: Tool link, blog link, affiliate products, disclosure
   - Blog post: Video embed, tool link, FAQs, Schema.org markup
   - Pin YouTube comment with tool link
   - Share on Reddit, Discord, Twitter
5. **Week 5:** Cross-post to Medium (48 hours after main site for SEO)

---

**Last Updated**: November 2025  
**Version**: 1.3  
**Maintainer**: M3DP Development Team (Mike Wilson)

---

## 🧪 Quick QA: Inconsistencies & Small Fixes

- `index.html` minor typo: `id="no-results"` div uses `class_A` instead of `class` — prevents the hidden state toggle from working.
- Version strings inconsistent:
  - Header badge shows `v1.3.0`.
  - Footer shows `Version 1.1.0`.
  - `README.md` lists Current Version `1.1.0` and branch `version1.1`.
  - `CHANGELOG.md` documents `1.2.0` and `Unreleased` items. Pick a source of truth and align all.
- Repo branch naming vs docs: Docs reference `version1.1` while the default/current branch is `main`. Update docs to reflect `main` unless release branches are in use.
- `README.md` project structure references `data/sources/` (PDF/markdown) and scripts paths not yet present; clarify as future/planned and point to `tds/README.md`.
- Footer links to local `README.md`/`CHANGELOG.md` are fine for local use; if deploying to a static host, consider absolute GitHub URLs.