#!/usr/bin/env python3
"""
Check CSV materials against bed_surface_data and identify missing materials.
"""

csv_materials = [
    "ABS",
    "ASA", 
    "HIPS",
    "HTPLA (Annealable)",
    "Nylon (PA12)",
    "Nylon (PA6)",
    "Nylon - Carbon Fiber (PA12-CF)",
    "Nylon - Glass Fiber (PA-GF)",
    "PC-ABS Blend",
    "PEEK",
    "PEKK",
    "PET (non-glycol)",
    "PETG",
    "PETG - Carbon Fiber",
    "PLA (Standard)",
    "PLA - Carbon Fiber",
    "PLA - Glow-in-the-dark",
    "PLA - Metal-filled",
    "PLA - Silk",
    "PLA - Wood-filled",
    "PP (Polypropylene)",
    "PPSU",
    "PVA (Soluble Support)",
    "PVB (IPA-Smoothable)",
    "Polycarbonate (PC)",
    "TPU 85A (Soft Flexible)",
    "TPU 95A (Flexible)",
    "Tough PLA / PLA+",
    "ULTEM 9085 (PEI)"
]

# Current bed_surface_data (from generate_bed_surface_data.py)
bed_surface_data = {
    "PLA (Standard)": "Blue Painters Tape, PEI Sheet, Glass with Glue Stick",
    "PLA+": "Blue Painters Tape, PEI Sheet, Glass with Glue Stick",
    "HTPLA (Annealable)": "Blue Painters Tape, PEI Sheet, Glass with Glue Stick",
    "PLA (Glow)": "Blue Painters Tape, PEI Sheet, Glass with Glue Stick",
    "PLA (Silk)": "Blue Painters Tape, PEI Sheet, Glass with Glue Stick",
    "PETG (Standard)": "Blue Painters Tape, PEI Sheet, Glass (avoid direct contact)",
    "PETG-CF": "PEI Sheet, Textured PEI, Garolite",
    "ABS": "Kapton Tape, PEI Sheet, Hairspray on Glass",
    "ABS+": "Kapton Tape, PEI Sheet, Hairspray on Glass",
    "PC-ABS Blend": "Kapton Tape, PEI Sheet, Hairspray on Glass",
    "ASA": "Kapton Tape, PEI Sheet, Hairspray on Glass",
    "Nylon (PA6)": "LayerLock Garolite, PEI Sheet, Glue Stick on Glass",
    "Nylon (PA12)": "LayerLock Garolite, PEI Sheet, Glue Stick on Glass",
    "NylonX (CF)": "LayerLock Garolite, Textured PEI",
    "NylonG (Glass)": "LayerLock Garolite, Textured PEI",
    "Polycarbonate (PC)": "PEI Sheet, Glue Stick on Glass, Hairspray",
    "TPU (Flexible)": "Blue Painters Tape, Clean Glass, PEI Sheet",
    "TPU 85A": "Blue Painters Tape, Clean Glass, PEI Sheet",
    "TPU 95A": "Blue Painters Tape, Clean Glass, PEI Sheet",
    "PEEK": "High-Temperature PEI, Ultem Sheet (>140°C bed)",
    "PEKK": "High-Temperature PEI, Ultem Sheet (>140°C bed)",
    "ULTEM 9085": "High-Temperature PEI, Kapton Tape (>180°C bed)",
    "PPSU": "High-Temperature PEI, Kapton Tape (>160°C bed)",
    "PEI (Ultem)": "High-Temperature PEI, Kapton Tape (>180°C bed)",
    "PVA (Support)": "Blue Painters Tape, PEI Sheet, Glass",
    "HIPS (Support)": "Kapton Tape, PEI Sheet, Hairspray on Glass",
    "PET": "PEI Sheet, Blue Painters Tape, Glass with Glue Stick",
    "PLA-CF": "PEI Sheet, Textured PEI, Blue Painters Tape",
    "Wood-Fill PLA": "Blue Painters Tape, PEI Sheet, Glass with Glue Stick",
    "Metal-Fill PLA": "PEI Sheet, Blue Painters Tape, Glass with Glue Stick",
    "Carbon Fiber PLA": "PEI Sheet, Textured PEI, Blue Painters Tape",
}

# Mapping of CSV names to bed_surface_data keys (where they differ)
name_mapping = {
    "PETG": "PETG (Standard)",
    "PETG - Carbon Fiber": "PETG-CF",
    "PLA - Glow-in-the-dark": "PLA (Glow)",
    "PLA - Silk": "PLA (Silk)",
    "PLA - Carbon Fiber": "PLA-CF",
    "PLA - Wood-filled": "Wood-Fill PLA",
    "PLA - Metal-filled": "Metal-Fill PLA",
    "Tough PLA / PLA+": "PLA+",
    "TPU 95A (Flexible)": "TPU 95A",
    "TPU 85A (Soft Flexible)": "TPU 85A",
    "PET (non-glycol)": "PET",
    "PVA (Soluble Support)": "PVA (Support)",
    "HIPS": "HIPS (Support)",
    "ULTEM 9085 (PEI)": "ULTEM 9085",
    "Nylon - Carbon Fiber (PA12-CF)": "NylonX (CF)",
    "Nylon - Glass Fiber (PA-GF)": "NylonG (Glass)",
}

print("=== Checking CSV Materials Against Bed Surface Data ===\n")

missing = []
covered = []

for material in csv_materials:
    lookup_name = name_mapping.get(material, material)
    if lookup_name in bed_surface_data:
        covered.append(f"{material} → {lookup_name}")
    else:
        missing.append(material)

print(f"✅ Covered: {len(covered)}/{len(csv_materials)}")
for item in covered:
    print(f"  • {item}")

print(f"\n❌ Missing: {len(missing)}")
for item in missing:
    print(f"  • {item}")

# Generate recommendations for missing materials
if missing:
    print("\n=== Recommended Bed Surface Data for Missing Materials ===\n")
    
    recommendations = {
        "PP (Polypropylene)": "Polypropylene Sheet, PEI with Adhesive, UHMW Tape (PP has very poor adhesion to most surfaces)",
        "PVB (IPA-Smoothable)": "Blue Painters Tape, PEI Sheet, Glass with Glue Stick (similar to PLA)",
    }
    
    for material in missing:
        if material in recommendations:
            print(f'"{material}": "{recommendations[material]}",')
        else:
            print(f'"{material}": "NEEDS RESEARCH",')
