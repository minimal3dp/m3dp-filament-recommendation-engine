# Contributing Guide

Thank you for your interest in contributing to the FDM Filament Recommendation Engine! This guide will help you understand how to contribute effectively.

## Getting Started

### Prerequisites
- Text editor (VS Code recommended)
- Git for version control
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Python 3.12+ for data processing scripts

### Local Development Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/minimal3dp/m3dp-filament-recommendation-engine.git
   cd m3dp-filament-recommendation-engine
   ```

2. **Open in VS Code**
   ```bash
   code .
   ```

3. **Start Local Server**
   ```bash
   python3 -m http.server 8000
   ```

4. **Open in Browser**
   ```
   http://localhost:8000
   ```

## Code Standards

### JavaScript Style Guide

**Naming Conventions**
```javascript
// Variables: camelCase
let allMaterials = []
let isSearchOpen = false

// Functions: camelCase
function openSearchModal() { }
function filterAndRender() { }

// Constants: UPPER_SNAKE_CASE (if needed)
const MAX_RESULTS = 10
const DEFAULT_NOZZLE = 'Brass'
```

**Comments & Documentation**
```javascript
/**
 * Performs search on materials and displays results
 * @param {string} query - The search query from user input
 * @returns {void}
 */
function performSearch(query) {
    // Implementation...
}
```

**Line Length**: Keep lines under 100 characters for readability

**Indentation**: 4 spaces (consistent with existing code)

### HTML Structure

```html
<!-- Use semantic HTML5 elements -->
<header>...</header>
<main>...</main>
<section>...</section>
<footer>...</footer>

<!-- Use Tailwind classes for styling -->
<div class="bg-gray-800 rounded-lg shadow-xl p-6">
    <!-- Content -->
</div>

<!-- Single quotes for attributes -->
<input type="text" placeholder="Search...">
```

### CSS Standards

```css
/* Use Tailwind utility classes primarily */
<div class="flex items-center justify-between p-4 bg-gray-800">

/* Custom CSS only for non-Tailwind styles */
.modal-backdrop {
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(4px);
}
```

## Making Changes

### 1. Creating a Feature Branch

```bash
git checkout -b feature/description-of-feature
```

**Branch Naming Conventions**:
- `feature/cmd-k-search` - New feature
- `fix/search-results-bug` - Bug fix
- `docs/update-readme` - Documentation
- `refactor/optimize-filtering` - Code optimization

### 2. Implementing Changes

#### Adding a New Material

1. **Update CSV data** in `index.html` (lines 540+)
   ```csv
   MyMaterial,Standard,Thermoplastic,8.5,60,55,9,true,true,false,...
   ```

2. **Add optional details** in `materialsDetailData`
   ```javascript
   materialsDetailData["MyMaterial"] = {
       "common": {
           nozzle_temperature: 210,
           bed_temperature: 60,
           print_speed: 60,
           fan_speed: 100,
           bed_surface: "Blue Tape, PEI"
       }
   }
   ```

3. **Test**:
   - Reload page
   - Search for the material (Cmd+K)
   - Click to open modal
   - Verify modal displays correctly

#### Adding a New Filter

1. **Add checkbox** in filter panel (Lines 200-300)
   ```html
   <input type="checkbox" id="filter-example" 
          data-key="Example_Property" 
          data-value="true">
   ```

2. **Verify CSV column exists** with matching name

3. **Test**:
   - Checkbox should auto-filter
   - Results update in real-time
   - localStorage saves preference

#### Adding a Slicer Export

1. **Implement export function** (Lines 920-1280)
   ```javascript
   function exportMySlicerProfile(materialName, data) {
       // Generate format
       const content = generateFormat(data)
       
       // Download
       downloadFile(content, `${materialName}.format`)
   }
   ```

2. **Add button to modal** (Lines 1400-1450)
   ```html
   <button onclick="exportMySlicerProfile(...)">
       Export for MySlicer
   </button>
   ```

3. **Test**: Click button, verify file downloads

### 3. Testing Your Changes

**Manual Testing Checklist**:
- [ ] No console errors (F12 → Console)
- [ ] Feature works as expected
- [ ] Responsive design (test at multiple widths)
- [ ] Keyboard navigation works (Cmd+K, arrows, enter)
- [ ] Dark theme displays correctly
- [ ] Print settings show all sections
- [ ] Filters update results in real-time

**Browser Testing**:
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge

**Mobile Testing**:
- [ ] iPhone/iPad (Safari)
- [ ] Android (Chrome)
- [ ] Test at 375px width

### 4. Committing Changes

**Commit Message Format**:
```
<type>: <subject>

<body (optional)>

<footer (optional)>
```

**Types**:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting, CSS
- `refactor:` - Code reorganization
- `perf:` - Performance improvement
- `test:` - Testing

**Example**:
```bash
git add index.html
git commit -m "feat: add material comparison view

- Implemented side-by-side material comparison
- Added checkbox selection for up to 4 materials
- Display mechanical properties in table format
- Highlight differences between materials"
```

### 5. Pushing to GitHub

```bash
git push origin feature/description-of-feature
```

### 6. Creating a Pull Request

1. Go to GitHub: https://github.com/minimal3dp/m3dp-filament-recommendation-engine
2. Click "New Pull Request"
3. Select your branch
4. Fill in title and description
5. Link any related issues
6. Request review from maintainers

**PR Description Template**:
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Documentation update
- [ ] Performance improvement

## Testing Performed
- [ ] Feature tested locally
- [ ] Responsive design verified
- [ ] No console errors
- [ ] Keyboard shortcuts work

## Screenshots (if applicable)
Add before/after screenshots

## Related Issues
Closes #123
```

## Documentation Standards

### README.md Updates

Update when:
- Adding major features
- Changing deployment process
- Adding/removing materials
- Significant UX changes

**Format**:
```markdown
## Features

### New Feature (v1.x.0)
- Brief description
- Key capabilities
- How to use
```

### CHANGELOG.md Updates

Add entry for **every release**:

```markdown
## [1.7.0] - YYYY-MM-DD

### Added
- List new features

### Changed
- List modified behavior

### Fixed
- List bug fixes
```

### Inline Code Comments

Use when:
- Complex logic that isn't obvious
- Workarounds for browser quirks
- Important business logic

**Examples**:
```javascript
// GOOD: Explains the why
// Limit results to 10 to prevent UI slowdown
const results = allMaterials.filter(...).slice(0, 10)

// BAD: Obvious from code
// Create a filter
const results = allMaterials.filter(...)
```

## Performance Guidelines

### JavaScript
- [ ] Avoid nested loops
- [ ] Minimize DOM queries (use cached references)
- [ ] Debounce event listeners if needed
- [ ] Limit search results (currently 10)
- [ ] Use efficient array methods (.filter, .map, .find)

### CSS
- [ ] Use Tailwind classes (avoid custom CSS)
- [ ] Avoid !important flags
- [ ] Use CSS Grid/Flexbox (not floats)
- [ ] Minimize animations (performance impact)

### File Size
- [ ] Keep index.html under 2500 lines
- [ ] Embed data (no external API calls)
- [ ] Use CDN for libraries (Tailwind)
- [ ] No image files (use Unicode/SVG)

## Security Guidelines

### Input Validation
```javascript
// Good: Type coercion and validation
function coerceType(value, type) {
    if (type === 'number') return parseFloat(value)
    if (type === 'boolean') return value.toLowerCase() === 'true'
    return String(value)
}

// Bad: Direct assignment
material.value = userInput
```

### Data Handling
- ✅ Use innerHTML only for controlled data
- ✅ Escape special characters in output
- ✅ Never use eval() or dynamic code execution
- ✅ Validate CSV parsing

### No External Dependencies
- Keep the app dependency-free
- If a library is needed, use CDN
- Avoid npm/package manager additions

## Reporting Issues

### Bug Report Format

**Title**: Clear, specific issue description

**Description**:
```
**What happened**:
Describe the issue

**Expected behavior**:
What should have happened

**Actual behavior**:
What actually happened

**Steps to reproduce**:
1. Step 1
2. Step 2
3. Step 3

**Browser & OS**:
Chrome 120 on macOS 14.1

**Screenshots**:
If applicable
```

### Feature Request Format

**Title**: Concise feature description

**Description**:
```
**Problem**:
The issue this solves

**Proposed solution**:
How to implement it

**Alternatives**:
Other approaches considered

**Use case**:
Real-world example
```

## Code Review Process

### Expectations
- Code follows style guide
- Changes are tested
- Documentation is updated
- Commit messages are clear
- No console errors

### Review Timeline
- Initial review: 1-2 days
- Feedback incorporation: 1 day
- Final approval: 1 day

## Deployment

### Release Process

1. **Update Version** in relevant files
2. **Update CHANGELOG.md** with all changes
3. **Create Release Branch** (`release/v1.x.0`)
4. **Tag Release** (`git tag v1.x.0`)
5. **Deploy to Production**

### Production Checklist
- [ ] All tests pass
- [ ] No console errors
- [ ] No console warnings
- [ ] Performance metrics acceptable
- [ ] Documentation complete
- [ ] Browser compatibility verified

## Questions & Help

### Getting Help
- **Documentation**: See ARCHITECTURE.md
- **Issues**: Open GitHub issue
- **Discussions**: Use GitHub Discussions
- **Contact**: minimal3dp@example.com

### Community Guidelines
- Be respectful and inclusive
- Search for similar issues before posting
- Provide detailed information
- Follow code of conduct

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (see LICENSE file).

---

**Last Updated**: December 12, 2025  
**Version**: v1.6.0

Thank you for contributing to the FDM Filament Recommendation Engine! 🚀
