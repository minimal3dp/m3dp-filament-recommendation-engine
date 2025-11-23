#!/usr/bin/env python3
"""
Generate bed surface recommendations for materials based on MatterHackers analysis.
Source: https://www.matterhackers.com/3d-printer-filament-compare
Date: November 20, 2025 analysis
"""

# Comprehensive bed surface recommendations based on MatterHackers guide
bed_surface_data = {
    # Standard Materials
    "PLA (Standard)": "Blue Painters Tape, PEI Sheet, Glass with Glue Stick",
    "PLA+": "Blue Painters Tape, PEI Sheet, Glass with Glue Stick",
    "HTPLA (Annealable)": "Blue Painters Tape, PEI Sheet, Glass with Glue Stick",
    "PLA (Glow)": "Blue Painters Tape, PEI Sheet, Glass with Glue Stick",
    "PLA (Silk)": "Blue Painters Tape, PEI Sheet, Glass with Glue Stick",
    
    # PETG Family
    "PETG (Standard)": "Blue Painters Tape, PEI Sheet, Glass (avoid direct contact)",
    "PETG-CF": "PEI Sheet, Textured PEI, Garolite",
    
    # ABS Family
    "ABS": "Kapton Tape, PEI Sheet, Hairspray on Glass",
    "ABS+": "Kapton Tape, PEI Sheet, Hairspray on Glass",
    "PC-ABS Blend": "Kapton Tape, PEI Sheet, Hairspray on Glass",
    
    # ASA (UV Resistant ABS)
    "ASA": "Kapton Tape, PEI Sheet, Hairspray on Glass",
    
    # Nylon Family
    "Nylon (PA6)": "LayerLock Garolite, PEI Sheet, Glue Stick on Glass",
    "Nylon (PA12)": "LayerLock Garolite, PEI Sheet, Glue Stick on Glass",
    "NylonX (CF)": "LayerLock Garolite, Textured PEI",
    "NylonG (Glass)": "LayerLock Garolite, Textured PEI",
    
    # Polycarbonate
    "Polycarbonate (PC)": "PEI Sheet, Glue Stick on Glass, Hairspray",
    
    # TPU/Flexible Family
    "TPU (Flexible)": "Blue Painters Tape, Clean Glass, PEI Sheet",
    "TPU 85A": "Blue Painters Tape, Clean Glass, PEI Sheet",
    "TPU 95A": "Blue Painters Tape, Clean Glass, PEI Sheet",
    
    # High-Performance Engineering
    "PEEK": "High-Temperature PEI, Ultem Sheet (>140°C bed)",
    "PEKK": "High-Temperature PEI, Ultem Sheet (>140°C bed)",
    "ULTEM 9085": "High-Temperature PEI, Kapton Tape (>180°C bed)",
    "PPSU": "High-Temperature PEI, Kapton Tape (>160°C bed)",
    "PEI (Ultem)": "High-Temperature PEI, Kapton Tape (>180°C bed)",
    
    # Specialty Materials
    "PVA (Support)": "Blue Painters Tape, PEI Sheet, Glass",
    "HIPS (Support)": "Kapton Tape, PEI Sheet, Hairspray on Glass",
    "PET": "PEI Sheet, Blue Painters Tape, Glass with Glue Stick",
    
    # Composites
    "PLA-CF": "PEI Sheet, Textured PEI, Blue Painters Tape",
    "Wood-Fill PLA": "Blue Painters Tape, PEI Sheet, Glass with Glue Stick",
    "Metal-Fill PLA": "PEI Sheet, Blue Painters Tape, Glass with Glue Stick",
    "Carbon Fiber PLA": "PEI Sheet, Textured PEI, Blue Painters Tape",
}

# Additional notes for specific bed surface types
bed_surface_notes = {
    "Blue Painters Tape": "Best for PLA and TPU. Easy removal, no warping. Replace when worn.",
    "PEI Sheet": "Excellent general-purpose surface. Works with most materials. Clean with isopropyl alcohol.",
    "Textured PEI": "Better for composites and materials prone to bonding too strongly.",
    "Glass": "Provides smooth bottom finish. Use glue stick or hairspray for adhesion.",
    "Kapton Tape": "High-temperature polyimide tape. Essential for ABS/ASA printing.",
    "LayerLock Garolite": "Specialized for Nylon. Excellent adhesion without over-bonding.",
    "Hairspray": "Cheap adhesion promoter. Works well with ABS/ASA/PC. Reapply as needed.",
    "Glue Stick": "Water-soluble adhesion aid. Easy cleanup. Good for PC and Nylon."
}

# Generate JavaScript object literal
def generate_js_additions():
    """Generate bed_surface additions for materialsDetailData"""
    print("// Add these bed_surface fields to the 'common' section of each material in materialsDetailData\n")
    print("// Source: MatterHackers Filament Guide (Nov 2025)\n")
    
    for material, surfaces in sorted(bed_surface_data.items()):
        print(f'// {material}')
        print(f'bed_surface: "{surfaces}",')
        print()

if __name__ == "__main__":
    generate_js_additions()
