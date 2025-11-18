#!/usr/bin/env python3
"""
Merge materials from data/alternate_data/material_db.csv into index.html's embedded csvData.
- Add new materials not present in the app
- Update properties for existing materials if alternate data is more complete
- Generate a summary report and updated CSV block for manual insertion
"""

import csv
import json
from pathlib import Path
from typing import Dict, List, Set

# Paths
PROJECT_ROOT = Path(__file__).parent.parent
ALTERNATE_CSV = PROJECT_ROOT / "data/alternate_data/material_db.csv"
RAW_CSV = PROJECT_ROOT / "data/raw/material_db.csv"
INDEX_HTML = PROJECT_ROOT / "index.html"

def parse_csv_file(filepath: Path) -> List[Dict[str, str]]:
    """Parse CSV file into list of dicts."""
    with open(filepath, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        return list(reader)

def extract_embedded_csv_from_html(html_path: Path) -> List[Dict[str, str]]:
    """Extract csvData from index.html."""
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find csvData = `...` block
    start = content.find('const csvData = `')
    if start == -1:
        raise ValueError("Could not find csvData in index.html")
    
    start += len('const csvData = `')
    end = content.find('`;', start)
    if end == -1:
        raise ValueError("Could not find end of csvData")
    
    csv_text = content[start:end]
    lines = csv_text.strip().split('\n')
    
    # Parse as CSV
    reader = csv.DictReader(lines)
    return list(reader)

def compare_materials(current: List[Dict], alternate: List[Dict]) -> Dict:
    """Compare two material datasets and identify additions/updates."""
    current_names = {m['Material'] for m in current}
    alternate_names = {m['Material'] for m in alternate}
    
    new_materials = alternate_names - current_names
    existing_materials = current_names & alternate_names
    removed_materials = current_names - alternate_names
    
    # Find materials with updated data
    updated_materials = []
    for alt_mat in alternate:
        if alt_mat['Material'] in existing_materials:
            cur_mat = next(m for m in current if m['Material'] == alt_mat['Material'])
            # Check if any non-empty alternate values differ
            if any(alt_mat.get(k, '').strip() and alt_mat.get(k) != cur_mat.get(k) 
                   for k in alt_mat.keys()):
                updated_materials.append(alt_mat['Material'])
    
    return {
        'new': sorted(new_materials),
        'updated': sorted(updated_materials),
        'removed': sorted(removed_materials),
        'current_count': len(current),
        'alternate_count': len(alternate)
    }

def merge_datasets(current: List[Dict], alternate: List[Dict]) -> List[Dict]:
    """Merge alternate data into current, adding new materials and updating existing ones."""
    # Create lookup by material name
    current_map = {m['Material']: m for m in current}
    alternate_map = {m['Material']: m for m in alternate}
    
    # Start with current materials
    merged = []
    
    # Update existing materials with non-empty alternate values
    for mat_name, cur_mat in current_map.items():
        if mat_name in alternate_map:
            alt_mat = alternate_map[mat_name]
            # Create merged material, preferring non-empty alternate values
            merged_mat = cur_mat.copy()
            for key, alt_value in alt_mat.items():
                if alt_value and alt_value.strip():
                    # Use alternate value if it exists and is non-empty
                    merged_mat[key] = alt_value
            merged.append(merged_mat)
        else:
            # Keep current material as-is
            merged.append(cur_mat)
    
    # Add new materials from alternate
    for mat_name, alt_mat in alternate_map.items():
        if mat_name not in current_map:
            merged.append(alt_mat)
    
    # Sort by cluster then material name for consistency
    cluster_order = ['Standard', 'Engineering', 'Composite', 'Functional', 'Flexible', 'High-Temp', 'High-Performance']
    def sort_key(mat):
        cluster = mat.get('Cluster', 'Unknown')
        cluster_idx = cluster_order.index(cluster) if cluster in cluster_order else 999
        return (cluster_idx, mat.get('Material', ''))
    
    merged.sort(key=sort_key)
    return merged

def generate_csv_block(materials: List[Dict]) -> str:
    """Generate CSV block for embedding in index.html."""
    if not materials:
        return ""
    
    # Get headers from first material
    headers = list(materials[0].keys())
    
    lines = [','.join(headers)]
    for mat in materials:
        row = [str(mat.get(h, '')) for h in headers]
        lines.append(','.join(row))
    
    return '\n'.join(lines)

def main():
    print("=" * 80)
    print("Material Dataset Merge Tool")
    print("=" * 80)
    
    # Load datasets
    print(f"\n📂 Loading data/alternate_data/material_db.csv...")
    alternate = parse_csv_file(ALTERNATE_CSV)
    
    print(f"📂 Loading embedded csvData from index.html...")
    current = extract_embedded_csv_from_html(INDEX_HTML)
    
    # Compare
    print(f"\n🔍 Comparing datasets...")
    comparison = compare_materials(current, alternate)
    
    print(f"\n📊 COMPARISON RESULTS:")
    print(f"   Current materials: {comparison['current_count']}")
    print(f"   Alternate materials: {comparison['alternate_count']}")
    print(f"   New materials: {len(comparison['new'])}")
    print(f"   Updated materials: {len(comparison['updated'])}")
    print(f"   Removed from alternate: {len(comparison['removed'])}")
    
    if comparison['new']:
        print(f"\n✨ NEW MATERIALS TO ADD:")
        for mat in comparison['new']:
            # Find cluster
            alt_mat = next(m for m in alternate if m['Material'] == mat)
            cluster = alt_mat.get('Cluster', 'Unknown')
            print(f"   • {mat} ({cluster})")
    
    if comparison['updated']:
        print(f"\n🔄 MATERIALS WITH UPDATES:")
        for mat in comparison['updated']:
            print(f"   • {mat}")
    
    if comparison['removed']:
        print(f"\n⚠️  MATERIALS IN CURRENT BUT NOT IN ALTERNATE:")
        for mat in comparison['removed']:
            cur_mat = next(m for m in current if m['Material'] == mat)
            cluster = cur_mat.get('Cluster', 'Unknown')
            print(f"   • {mat} ({cluster})")
    
    # Merge
    print(f"\n🔀 Merging datasets...")
    merged = merge_datasets(current, alternate)
    print(f"   Merged total: {len(merged)} materials")
    
    # Generate output
    output_csv = generate_csv_block(merged)
    
    # Write to file
    output_file = PROJECT_ROOT / "data/processed/merged_material_db.csv"
    output_file.parent.mkdir(exist_ok=True)
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(output_csv)
    
    print(f"\n✅ Merged CSV written to: {output_file.relative_to(PROJECT_ROOT)}")
    
    # Summary report
    report = {
        'summary': comparison,
        'new_materials': [
            {
                'name': mat,
                'cluster': next(m for m in alternate if m['Material'] == mat).get('Cluster', ''),
                'properties': next(m for m in alternate if m['Material'] == mat)
            }
            for mat in comparison['new']
        ],
        'total_merged': len(merged)
    }
    
    report_file = PROJECT_ROOT / "data/processed/merge_report.json"
    with open(report_file, 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2)
    
    print(f"📄 Detailed report written to: {report_file.relative_to(PROJECT_ROOT)}")
    
    # Instructions
    print(f"\n" + "=" * 80)
    print("📝 NEXT STEPS:")
    print("=" * 80)
    print(f"1. Review: data/processed/merge_report.json")
    print(f"2. Review: data/processed/merged_material_db.csv")
    print(f"3. Manual step: Copy the merged CSV content into index.html's csvData string")
    print(f"4. Test the app to ensure all materials render correctly")
    print(f"5. Update materialsDetailData in index.html for new materials (optional)")
    print("=" * 80)

if __name__ == "__main__":
    main()
