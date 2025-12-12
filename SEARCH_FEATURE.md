# Cmd+K Search Feature Documentation

## Overview

The Cmd+K search feature provides users with a fast, keyboard-friendly way to search for filaments in the material database. This feature enhances user experience by offering quick access to materials without scrolling through filters.

**Release**: v1.6.0  
**Date**: December 12, 2025  
**Status**: Production Ready

---

## Features

### 1. **Global Keyboard Shortcut**
- **Mac**: `Cmd+K` (Command + K)
- **Windows/Linux**: `Ctrl+K`
- Toggle behavior: Press again to close search modal

### 2. **Real-Time Search**
- Search as you type with live results
- Filters materials by:
  - Material name (e.g., "PLA", "Nylon")
  - Cluster/Category (e.g., "Engineering", "Specialty")
  - Material type
- Results update instantly as user types

### 3. **Keyboard Navigation**
- **Arrow Up/Down**: Navigate through search results
- **Enter**: Select highlighted result and open material details
- **Escape**: Close search modal
  - Also closes material modal if open
  - Graceful handling of multiple open modals

### 4. **Visual Feedback**
- Highlighted result on hover (dark gray background)
- Keyboard navigation highlight with scroll-into-view
- Limited to 10 results per search to maintain performance
- Help text in footer showing available keyboard shortcuts

### 5. **Search Modal Design**
- Consistent with existing material modal styling
- Dark theme (gray-800 background) matching app aesthetic
- Backdrop blur effect (rgba 0.75 opacity)
- Mobile-responsive design
- Clean, minimal input field with search icon

---

## Implementation Details

### HTML Structure

```html
<!-- Search Modal Container -->
<div id="search-modal" class="fixed inset-0 z-[100] hidden items-start justify-center pt-20 p-4">
    <!-- Backdrop with blur -->
    <div class="search-backdrop absolute inset-0" onclick="closeSearchModal()"></div>
    
    <!-- Search Container -->
    <div class="relative w-full max-w-2xl z-10">
        <!-- Search Input -->
        <input id="search-input" type="text" placeholder="Search materials..." />
        
        <!-- Results Container -->
        <div id="search-results" class="max-h-96 overflow-y-auto">
            <!-- Results populated dynamically -->
        </div>
        
        <!-- Help Footer -->
        <div class="help footer with keyboard shortcuts"></div>
    </div>
</div>
```

### CSS Styling

```css
.search-backdrop {
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(4px);
}
```

- Uses Tailwind CSS utility classes for positioning and responsive design
- Z-index: 100 (higher than material modal's 50) to ensure search modal appears on top
- Max-width: 2xl (42rem) for optimal reading on all screen sizes

### JavaScript Functions

#### 1. **openSearchModal()**
- Opens the search modal
- Sets focus to search input for immediate typing
- Disables body scroll

#### 2. **closeSearchModal()**
- Closes the search modal
- Clears search input
- Restores body scroll

#### 3. **performSearch(query)**
- Filters materials based on search query
- Implements substring matching (case-insensitive)
- Returns up to 10 results
- Updates results container with formatted HTML

#### 4. **fuzzyMatch(str, pattern)**
- Helper function for potential future fuzzy search
- Currently not used (substring matching is sufficient)
- Included for extensibility

#### 5. **setSearchHighlight(index)**
- Highlights the search result at specified index
- Removes highlight from all other results
- Stores current index in window.searchHighlightIndex

#### 6. **selectSearchResult(materialName)**
- Closes search modal
- Finds material by name
- Opens material detail modal

#### 7. **Global Keyboard Event Listener**
- Handles Cmd+K / Ctrl+K to toggle search
- Handles Arrow Up/Down for navigation
- Handles Enter to select
- Handles Escape to close
- Properly delegates focus between modals

---

## User Experience Flow

### Opening Search
1. User presses `Cmd+K` (or `Ctrl+K`)
2. Search modal opens with focus on input field
3. Placeholder text guides user: "Search materials by name, cluster, or properties..."

### Searching
1. User types query (e.g., "PLA", "Nylon", "Engineering")
2. Results update in real-time as user types
3. Up to 10 results displayed with material name, cluster, and type

### Navigation
1. **Mouse**: Click any result to open material details
2. **Keyboard**: Use Arrow Up/Down to navigate, press Enter to select

### Closing
1. Press Escape to close search without selecting
2. Press Cmd+K again to close search modal
3. Click backdrop to close

---

## Search Algorithm

### Current Implementation: Substring Matching
```javascript
searchFields.some(field => 
    field.toLowerCase().includes(query.toLowerCase())
)
```

**Characteristics:**
- Case-insensitive
- Matches substring anywhere in field
- Fast and deterministic
- Simple for users to understand

**Search Fields:**
1. Material name (e.g., "PLA Standard", "Nylon PA6")
2. Cluster (e.g., "General Purpose", "Engineering")
3. Type (e.g., "Thermoplastic", "Specialty")

### Future Enhancement: Fuzzy Matching
The `fuzzyMatch()` function is implemented but not currently used. Uncomment the line in `performSearch()` to enable fuzzy matching for more flexible searches:

```javascript
// Currently: substring matching
searchFields.some(field => field.toLowerCase().includes(query.toLowerCase()))

// Future: fuzzy matching
searchFields.some(field => fuzzyMatch(field, query))
```

---

## Performance Considerations

### Optimizations
1. **Result Limiting**: Limited to 10 results per search
   - Reduces DOM manipulation
   - Maintains responsive UI
   - Encourages more specific searches

2. **Real-Time Search**: Uses input event listener
   - Not debounced (due to small dataset)
   - Could be debounced (100-200ms) if dataset grows significantly

3. **Lazy Rendering**: Results rendered as string, not as DOM elements
   - Single innerHTML update per search
   - Minimal reflow

### Scalability
- Current dataset: 29 materials → No performance issues
- Estimated limit before optimization needed: 500+ materials
- Recommendation: Implement debouncing if dataset grows beyond 100 materials

---

## Integration with Existing Systems

### Modal Stacking
- Search modal (z-50 on parent, z-[100] on container)
- Material modal (z-50)
- Search modal appears above all other elements
- Escape key properly handles both modals

### Material Data Access
- Uses existing `materials` array from parsed CSV
- Compatible with all material properties
- No additional data structures required

### Styling Consistency
- Dark theme matches app aesthetic
- Uses same color palette (gray-800, gray-700, gray-900)
- Tailwind classes consistent with existing design
- Modal backdrop blur effect identical to material modal

---

## Testing Checklist

- [x] Cmd+K opens search modal on Mac
- [x] Ctrl+K opens search modal on Windows
- [x] Search filters materials by name
- [x] Search filters materials by cluster
- [x] Real-time results update as user types
- [x] Arrow keys navigate results
- [x] Enter selects result
- [x] Escape closes search modal
- [x] Click backdrop closes modal
- [x] Material modal opens from search result
- [x] Keyboard shortcuts display in help footer
- [x] Mobile responsiveness maintained
- [x] No console errors or warnings
- [x] Performance is snappy with 29 materials

---

## Known Limitations

1. **Search Scope**: Currently searches only material name, cluster, and type
   - Could be extended to include properties (Strength, HDT, etc.)
   - Would require additional indexing for performance

2. **Result Count**: Limited to 10 results
   - Prevents overwhelming user with options
   - Encourages more specific searches

3. **Fuzzy Matching**: Not enabled by default
   - Substring matching is simpler for users
   - Fuzzy matching available as future enhancement

4. **Mobile Keyboard**: May not display Cmd+K helper text on mobile
   - Search still accessible via search icon in sidebar
   - Consider touch interaction in future

---

## Future Enhancements

### Phase 1: Extended Search
- [ ] Search across material properties (Strength, HDT, Cost Score)
- [ ] Search filters (e.g., "flexible", "strong", "food-safe")
- [ ] Search history / recent searches
- [ ] Search suggestions based on common queries

### Phase 2: Advanced Features
- [ ] Fuzzy matching for typo tolerance
- [ ] Search result ranking/scoring
- [ ] Multiple material comparison from search
- [ ] Save search results as preset

### Phase 3: Analytics
- [ ] Track most popular searches
- [ ] Identify gaps in material database
- [ ] User behavior analytics
- [ ] Optimize material descriptions based on search queries

---

## Accessibility Considerations

### Keyboard Navigation
✅ Full keyboard support (Cmd+K, Arrow keys, Enter, Escape)
✅ No mouse required to use search
✅ Logical tab order maintained

### Screen Readers
⚠️ Could benefit from ARIA labels:
- Modal role and labels
- Result list semantics
- Live region updates (results changing)

### Future Improvements
- Add ARIA attributes for screen reader support
- Add focus management documentation
- Consider high contrast mode support

---

## Troubleshooting

### Issue: Cmd+K not opening search
**Solution**: 
- Check browser support for Cmd+K / Ctrl+K
- Verify no browser extensions interfering with keyboard shortcuts
- Try Ctrl+K on Mac (if Cmd+K doesn't work)

### Issue: Search results not appearing
**Solution**:
- Clear browser cache and reload
- Check that materialsDetailData is properly loaded
- Verify CSV parsing completed successfully

### Issue: Escape key not closing search
**Solution**:
- Check if another event listener is consuming the event
- Verify search modal is actually open (check console)
- Try clicking backdrop instead

---

## Code Example: Extending Search

### Add Property Search
```javascript
// In performSearch() function, extend searchFields:
const results = materials.filter(material => {
    const searchFields = [
        material.Material,
        material.Cluster || '',
        material.Type || '',
        material.Strength_XY_MPa?.toString() || '',  // NEW
        material.Heat_Resistance_HDT_C?.toString() || ''  // NEW
    ];
    return searchFields.some(field => 
        field.toLowerCase().includes(query.toLowerCase())
    );
}).slice(0, 10);
```

### Enable Fuzzy Matching
```javascript
// In performSearch() function, replace substring matching:
return searchFields.some(field => fuzzyMatch(field, query));
```

---

## Version History

### v1.6.0 (December 12, 2025)
- Initial implementation
- Cmd+K / Ctrl+K keyboard shortcut
- Real-time search with substring matching
- Keyboard navigation (Up/Down/Enter/Escape)
- Integration with material modal system
- Mobile-responsive design

---

## Related Documentation

- [index.html](./index.html) - Main application file
- [CHANGELOG.md](./CHANGELOG.md) - Version history
- [TODO.md](./TODO.md) - Roadmap and pending features
- [README.md](./README.md) - Project overview

---

## Support & Feedback

For issues, feature requests, or feedback on the search functionality:
- Open an issue on GitHub
- Contact: minimal3dp@example.com
- Discuss on Ko-fi: https://ko-fi.com/minimal3dp

---

**Last Updated**: December 12, 2025  
**Maintainer**: Minimal3DP  
**Status**: Active Development
