const materialsData = {
    "PLA": {
        "common": {
            "nozzle_temperature": 190,
            "nozzle_temp_min": 190,
            "nozzle_temp_max": 215,
            "bed_temperature": 0,
            "bed_temp_min": 0,
            "bed_temp_max": 60,
            "print_speed": 50,
            "fan_speed": 100
        },
        "properties": {
            "tensile_strength_MPa": 65.0,
            "tensile_strength_z_MPa": 29.3,
            "tensile_modulus_MPa": 2800.0,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 7.0,
            "HDT_C": 56.0,
            "density_g_cm3": 1.24
        },
        "characteristics": {
            "cluster": "Standard",
            "uv_resistant": false,
            "hygroscopic": false,
            "prone_to_creep": true,
            "requires_enclosure": false,
            "releases_fumes": false,
            "requires_hardened_nozzle": false,
            "low_friction": false,
            "annealable": false,
            "chemical_resistance_score": 0,
            "printability_score": 9
        },
        "notes": "Easy to print. Prone to creep under constant load. Low heat resistance."
    },
    "PLA_Plus": {
        "common": {
            "nozzle_temperature": 200,
            "nozzle_temp_min": 200,
            "nozzle_temp_max": 225,
            "bed_temperature": 50,
            "bed_temp_min": 50,
            "bed_temp_max": 60,
            "print_speed": 50,
            "fan_speed": 100
        },
        "properties": {
            "tensile_strength_MPa": 65.0,
            "tensile_strength_z_MPa": 29.3,
            "tensile_modulus_MPa": 2102.0,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 8.5,
            "HDT_C": 52.0,
            "density_g_cm3": 1.24
        },
        "characteristics": {
            "cluster": "Engineering",
            "uv_resistant": false,
            "hygroscopic": false,
            "prone_to_creep": true,
            "requires_enclosure": false,
            "releases_fumes": false,
            "requires_hardened_nozzle": false,
            "low_friction": false,
            "annealable": false,
            "chemical_resistance_score": 0,
            "printability_score": 8
        },
        "notes": "Easy to print. Prone to creep under constant load. Low heat resistance."
    },
    "HTPLA": {
        "common": {
            "nozzle_temperature": 200,
            "nozzle_temp_min": 200,
            "nozzle_temp_max": 230,
            "bed_temperature": 50,
            "bed_temp_min": 50,
            "bed_temp_max": 60,
            "print_speed": 50,
            "fan_speed": 100
        },
        "properties": {
            "tensile_strength_MPa": 60.0,
            "tensile_strength_z_MPa": 27.0,
            "tensile_modulus_MPa": 2800.0,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 7.0,
            "HDT_C": 58.0,
            "density_g_cm3": 1.24
        },
        "characteristics": {
            "cluster": "Standard",
            "uv_resistant": false,
            "hygroscopic": false,
            "prone_to_creep": false,
            "requires_enclosure": false,
            "releases_fumes": false,
            "requires_hardened_nozzle": false,
            "low_friction": false,
            "annealable": true,
            "chemical_resistance_score": 0,
            "printability_score": 9
        },
        "notes": "Easy to print. Low heat resistance.",
        "annealed": {
            "tensile_strength_MPa": 63.0,
            "tensile_strength_z_MPa": 28.35,
            "HDT_C": 150.0
        }
    },
    "PLA_CF": {
        "common": {
            "nozzle_temperature": 200,
            "nozzle_temp_min": 200,
            "nozzle_temp_max": 225,
            "bed_temperature": 50,
            "bed_temp_min": 50,
            "bed_temp_max": 60,
            "print_speed": 50,
            "fan_speed": 100
        },
        "properties": {
            "tensile_strength_MPa": 70.0,
            "tensile_strength_z_MPa": 31.5,
            "tensile_modulus_MPa": 7000.0,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 8.0,
            "HDT_C": 62.0,
            "density_g_cm3": 1.3
        },
        "characteristics": {
            "cluster": "Engineering",
            "uv_resistant": false,
            "hygroscopic": false,
            "prone_to_creep": false,
            "requires_enclosure": false,
            "releases_fumes": false,
            "requires_hardened_nozzle": true,
            "low_friction": false,
            "annealable": false,
            "chemical_resistance_score": 0,
            "printability_score": 7
        },
        "notes": "Requires hardened nozzle (abrasive). High strength."
    },
    "PETG": {
        "common": {
            "nozzle_temperature": 230,
            "nozzle_temp_min": 230,
            "nozzle_temp_max": 245,
            "bed_temperature": 70,
            "bed_temp_min": 70,
            "bed_temp_max": 90,
            "print_speed": 50,
            "fan_speed": 50
        },
        "properties": {
            "tensile_strength_MPa": 49.0,
            "tensile_strength_z_MPa": 22.05,
            "tensile_modulus_MPa": 1913.0,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 10.5,
            "HDT_C": 75.0,
            "density_g_cm3": 1.27
        },
        "characteristics": {
            "cluster": "Functional",
            "uv_resistant": false,
            "hygroscopic": true,
            "prone_to_creep": false,
            "requires_enclosure": false,
            "releases_fumes": false,
            "requires_hardened_nozzle": false,
            "low_friction": false,
            "annealable": false,
            "chemical_resistance_score": 1,
            "printability_score": 7
        },
        "notes": "Must be dried before printing."
    },
    "PETG_CF": {
        "common": {
            "nozzle_temperature": 240,
            "nozzle_temp_min": 240,
            "nozzle_temp_max": 255,
            "bed_temperature": 75,
            "bed_temp_min": 75,
            "bed_temp_max": 90,
            "print_speed": 50,
            "fan_speed": 50
        },
        "properties": {
            "tensile_strength_MPa": 58.0,
            "tensile_strength_z_MPa": 26.1,
            "tensile_modulus_MPa": 6500.0,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 12.0,
            "HDT_C": 82.0,
            "density_g_cm3": 1.3
        },
        "characteristics": {
            "cluster": "Engineering",
            "uv_resistant": false,
            "hygroscopic": true,
            "prone_to_creep": false,
            "requires_enclosure": false,
            "releases_fumes": false,
            "requires_hardened_nozzle": true,
            "low_friction": false,
            "annealable": false,
            "chemical_resistance_score": 1,
            "printability_score": 6
        },
        "notes": "Requires hardened nozzle (abrasive). Must be dried before printing."
    },
    "PET": {
        "common": {
            "nozzle_temperature": 240,
            "nozzle_temp_min": 240,
            "nozzle_temp_max": 250,
            "bed_temperature": 75,
            "bed_temp_min": 75,
            "bed_temp_max": 90,
            "print_speed": 50,
            "fan_speed": 50
        },
        "properties": {
            "tensile_strength_MPa": 55.0,
            "tensile_strength_z_MPa": 24.75,
            "tensile_modulus_MPa": 2100.0,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 9.5,
            "HDT_C": 78.0,
            "density_g_cm3": 1.27
        },
        "characteristics": {
            "cluster": "Engineering",
            "uv_resistant": true,
            "hygroscopic": true,
            "prone_to_creep": false,
            "requires_enclosure": false,
            "releases_fumes": false,
            "requires_hardened_nozzle": false,
            "low_friction": false,
            "annealable": false,
            "chemical_resistance_score": 1,
            "printability_score": 6
        },
        "notes": "UV resistant, good for outdoor use. Must be dried before printing."
    },
    "ABS": {
        "common": {
            "nozzle_temperature": 230,
            "nozzle_temp_min": 230,
            "nozzle_temp_max": 250,
            "bed_temperature": 90,
            "bed_temp_min": 90,
            "bed_temp_max": 110,
            "print_speed": 50,
            "fan_speed": 20
        },
        "properties": {
            "tensile_strength_MPa": 38.0,
            "tensile_strength_z_MPa": 17.1,
            "tensile_modulus_MPa": 2100.0,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 26.5,
            "HDT_C": 91.0,
            "density_g_cm3": 1.04
        },
        "characteristics": {
            "cluster": "Functional",
            "uv_resistant": false,
            "hygroscopic": true,
            "prone_to_creep": false,
            "requires_enclosure": true,
            "releases_fumes": true,
            "requires_hardened_nozzle": false,
            "low_friction": false,
            "annealable": false,
            "chemical_resistance_score": 2,
            "printability_score": 4
        },
        "notes": "Requires heated enclosure to prevent warping. Must be dried before printing. Emits fumes - use ventilation. Good chemical resistance. Good heat resistance."
    },
    "ASA": {
        "common": {
            "nozzle_temperature": 240,
            "nozzle_temp_min": 240,
            "nozzle_temp_max": 255,
            "bed_temperature": 90,
            "bed_temp_min": 90,
            "bed_temp_max": 110,
            "print_speed": 50,
            "fan_speed": 20
        },
        "properties": {
            "tensile_strength_MPa": 49.5,
            "tensile_strength_z_MPa": 22.28,
            "tensile_modulus_MPa": 1930.0,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 41.0,
            "HDT_C": 95.0,
            "density_g_cm3": 1.07
        },
        "characteristics": {
            "cluster": "Functional",
            "uv_resistant": true,
            "hygroscopic": true,
            "prone_to_creep": false,
            "requires_enclosure": true,
            "releases_fumes": true,
            "requires_hardened_nozzle": false,
            "low_friction": false,
            "annealable": false,
            "chemical_resistance_score": 2,
            "printability_score": 4
        },
        "notes": "UV resistant, good for outdoor use. Requires heated enclosure to prevent warping. Must be dried before printing. Emits fumes - use ventilation. Good chemical resistance. Good heat resistance."
    },
    "HIPS": {
        "common": {
            "nozzle_temperature": 230,
            "nozzle_temp_min": 230,
            "nozzle_temp_max": 245,
            "bed_temperature": 90,
            "bed_temp_min": 90,
            "bed_temp_max": 110,
            "print_speed": 50,
            "fan_speed": 50
        },
        "properties": {
            "tensile_strength_MPa": 34.0,
            "tensile_strength_z_MPa": 15.3,
            "tensile_modulus_MPa": 1675.0,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 37.5,
            "HDT_C": 87.5,
            "density_g_cm3": 1.04
        },
        "characteristics": {
            "cluster": "Functional",
            "uv_resistant": false,
            "hygroscopic": false,
            "prone_to_creep": false,
            "requires_enclosure": true,
            "releases_fumes": true,
            "requires_hardened_nozzle": false,
            "low_friction": false,
            "annealable": false,
            "chemical_resistance_score": 1,
            "printability_score": 5
        },
        "notes": "Requires heated enclosure to prevent warping. Emits fumes - use ventilation."
    },
    "PC-ABS_Blend": {
        "common": {
            "nozzle_temperature": 255,
            "nozzle_temp_min": 255,
            "nozzle_temp_max": 270,
            "bed_temperature": 100,
            "bed_temp_min": 100,
            "bed_temp_max": 115,
            "print_speed": 50,
            "fan_speed": 20
        },
        "properties": {
            "tensile_strength_MPa": 38.5,
            "tensile_strength_z_MPa": 17.33,
            "tensile_modulus_MPa": 1225.0,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 44.0,
            "HDT_C": 123.0,
            "density_g_cm3": 1.15
        },
        "characteristics": {
            "cluster": "Engineering",
            "uv_resistant": false,
            "hygroscopic": true,
            "prone_to_creep": false,
            "requires_enclosure": true,
            "releases_fumes": true,
            "requires_hardened_nozzle": false,
            "low_friction": false,
            "annealable": false,
            "chemical_resistance_score": 2,
            "printability_score": 4
        },
        "notes": "Requires heated enclosure to prevent warping. Must be dried before printing. Emits fumes - use ventilation. Good chemical resistance. Good heat resistance."
    },
    "Polycarbonate": {
        "common": {
            "nozzle_temperature": 260,
            "nozzle_temp_min": 260,
            "nozzle_temp_max": 300,
            "bed_temperature": 110,
            "bed_temp_min": 110,
            "bed_temp_max": 130,
            "print_speed": 50,
            "fan_speed": 30
        },
        "properties": {
            "tensile_strength_MPa": 64.5,
            "tensile_strength_z_MPa": 29.03,
            "tensile_modulus_MPa": 2175.0,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 35.0,
            "HDT_C": 127.5,
            "density_g_cm3": 1.2
        },
        "characteristics": {
            "cluster": "Engineering",
            "uv_resistant": false,
            "hygroscopic": true,
            "prone_to_creep": false,
            "requires_enclosure": true,
            "releases_fumes": false,
            "requires_hardened_nozzle": false,
            "low_friction": false,
            "annealable": false,
            "chemical_resistance_score": 1,
            "printability_score": 2
        },
        "notes": "Difficult to print. Requires heated enclosure to prevent warping. Must be dried before printing. Good heat resistance."
    },
    "Nylon": {
        "common": {
            "nozzle_temperature": 240,
            "nozzle_temp_min": 240,
            "nozzle_temp_max": 255,
            "bed_temperature": 70,
            "bed_temp_min": 70,
            "bed_temp_max": 90,
            "print_speed": 50,
            "fan_speed": 30
        },
        "properties": {
            "tensile_strength_MPa": 62.5,
            "tensile_strength_z_MPa": 31.25,
            "tensile_modulus_MPa": 2200.0,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 40.0,
            "HDT_C": 90.0,
            "density_g_cm3": 1.01
        },
        "characteristics": {
            "cluster": "Engineering",
            "uv_resistant": false,
            "hygroscopic": true,
            "prone_to_creep": true,
            "requires_enclosure": true,
            "releases_fumes": false,
            "requires_hardened_nozzle": false,
            "low_friction": true,
            "annealable": true,
            "chemical_resistance_score": 2,
            "printability_score": 3
        },
        "notes": "Difficult to print. Requires heated enclosure to prevent warping. Must be dried before printing. Prone to creep under constant load. Low friction, good for mechanical parts. Good chemical resistance. Good heat resistance.",
        "annealed": {
            "tensile_strength_MPa": 65.6,
            "tensile_strength_z_MPa": 32.8,
            "HDT_C": 100.0
        }
    },
    "Nylon_CF": {
        "common": {
            "nozzle_temperature": 250,
            "nozzle_temp_min": 250,
            "nozzle_temp_max": 270,
            "bed_temperature": 80,
            "bed_temp_min": 80,
            "bed_temp_max": 100,
            "print_speed": 50,
            "fan_speed": 30
        },
        "properties": {
            "tensile_strength_MPa": 77.5,
            "tensile_strength_z_MPa": 41.8,
            "tensile_modulus_MPa": 7910.0,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 25.0,
            "HDT_C": 140.0,
            "density_g_cm3": 1.15
        },
        "characteristics": {
            "cluster": "High-Performance",
            "uv_resistant": false,
            "hygroscopic": true,
            "prone_to_creep": false,
            "requires_enclosure": true,
            "releases_fumes": false,
            "requires_hardened_nozzle": true,
            "low_friction": true,
            "annealable": false,
            "chemical_resistance_score": 2,
            "printability_score": 3
        },
        "notes": "Difficult to print. Requires heated enclosure to prevent warping. Requires hardened nozzle (abrasive). Must be dried before printing. Low friction, good for mechanical parts. Good chemical resistance. High strength. Good heat resistance."
    },
    "Nylon_GF": {
        "common": {
            "nozzle_temperature": 250,
            "nozzle_temp_min": 250,
            "nozzle_temp_max": 270,
            "bed_temperature": 80,
            "bed_temp_min": 80,
            "bed_temp_max": 100,
            "print_speed": 50,
            "fan_speed": 30
        },
        "properties": {
            "tensile_strength_MPa": 72.0,
            "tensile_strength_z_MPa": 36.0,
            "tensile_modulus_MPa": 9000.0,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 22.0,
            "HDT_C": 135.0,
            "density_g_cm3": 1.2
        },
        "characteristics": {
            "cluster": "High-Performance",
            "uv_resistant": false,
            "hygroscopic": true,
            "prone_to_creep": false,
            "requires_enclosure": true,
            "releases_fumes": false,
            "requires_hardened_nozzle": true,
            "low_friction": false,
            "annealable": false,
            "chemical_resistance_score": 2,
            "printability_score": 3
        },
        "notes": "Difficult to print. Requires heated enclosure to prevent warping. Requires hardened nozzle (abrasive). Must be dried before printing. Good chemical resistance. High strength. Good heat resistance."
    },
    "TPU_95A": {
        "common": {
            "nozzle_temperature": 215,
            "nozzle_temp_min": 215,
            "nozzle_temp_max": 235,
            "bed_temperature": 30,
            "bed_temp_min": 30,
            "bed_temp_max": 60,
            "print_speed": 50,
            "fan_speed": 80
        },
        "properties": {
            "tensile_strength_MPa": 34.5,
            "tensile_strength_z_MPa": 15.53,
            "tensile_modulus_MPa": 52.5,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 35.0,
            "HDT_C": 61.5,
            "density_g_cm3": 1.21
        },
        "characteristics": {
            "cluster": "Functional",
            "uv_resistant": false,
            "hygroscopic": false,
            "prone_to_creep": false,
            "requires_enclosure": false,
            "releases_fumes": false,
            "requires_hardened_nozzle": false,
            "low_friction": true,
            "annealable": false,
            "chemical_resistance_score": 2,
            "printability_score": 4
        },
        "notes": "Low friction, good for mechanical parts. Good chemical resistance."
    },
    "TPU_85A": {
        "common": {
            "nozzle_temperature": 215,
            "nozzle_temp_min": 215,
            "nozzle_temp_max": 230,
            "bed_temperature": 30,
            "bed_temp_min": 30,
            "bed_temp_max": 50,
            "print_speed": 50,
            "fan_speed": 80
        },
        "properties": {
            "tensile_strength_MPa": 8.0,
            "tensile_strength_z_MPa": 3.6,
            "tensile_modulus_MPa": 50.0,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 6.0,
            "HDT_C": 60.0,
            "density_g_cm3": 1.21
        },
        "characteristics": {
            "cluster": "Functional",
            "uv_resistant": false,
            "hygroscopic": false,
            "prone_to_creep": false,
            "requires_enclosure": false,
            "releases_fumes": false,
            "requires_hardened_nozzle": false,
            "low_friction": true,
            "annealable": false,
            "chemical_resistance_score": 2,
            "printability_score": 3
        },
        "notes": "Difficult to print. Low friction, good for mechanical parts. Good chemical resistance. Low strength, flexible. Low heat resistance."
    },
    "PP": {
        "common": {
            "nozzle_temperature": 230,
            "nozzle_temp_min": 230,
            "nozzle_temp_max": 250,
            "bed_temperature": 85,
            "bed_temp_min": 85,
            "bed_temp_max": 105,
            "print_speed": 50,
            "fan_speed": 50
        },
        "properties": {
            "tensile_strength_MPa": 35.1,
            "tensile_strength_z_MPa": 18.7,
            "tensile_modulus_MPa": 660.0,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 49.1,
            "HDT_C": 64.0,
            "density_g_cm3": 0.9
        },
        "characteristics": {
            "cluster": "Functional",
            "uv_resistant": false,
            "hygroscopic": false,
            "prone_to_creep": false,
            "requires_enclosure": true,
            "releases_fumes": false,
            "requires_hardened_nozzle": false,
            "low_friction": true,
            "annealable": false,
            "chemical_resistance_score": 3,
            "printability_score": 1
        },
        "notes": "Difficult to print. Requires heated enclosure to prevent warping. Low friction, good for mechanical parts. Good chemical resistance."
    },
    "PVA": {
        "common": {
            "nozzle_temperature": 190,
            "nozzle_temp_min": 190,
            "nozzle_temp_max": 210,
            "bed_temperature": 45,
            "bed_temp_min": 45,
            "bed_temp_max": 60,
            "print_speed": 50,
            "fan_speed": 50
        },
        "properties": {
            "tensile_strength_MPa": 10.0,
            "tensile_strength_z_MPa": 4.5,
            "tensile_modulus_MPa": 3860.0,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 2.0,
            "HDT_C": 60.0,
            "density_g_cm3": 1.23
        },
        "characteristics": {
            "cluster": "Functional",
            "uv_resistant": false,
            "hygroscopic": true,
            "prone_to_creep": true,
            "requires_enclosure": false,
            "releases_fumes": false,
            "requires_hardened_nozzle": false,
            "low_friction": false,
            "annealable": false,
            "chemical_resistance_score": 0,
            "printability_score": 2
        },
        "notes": "Difficult to print. Must be dried before printing. Prone to creep under constant load. Low strength, flexible. Low heat resistance."
    },
    "PVB": {
        "common": {
            "nozzle_temperature": 205,
            "nozzle_temp_min": 205,
            "nozzle_temp_max": 225,
            "bed_temperature": 60,
            "bed_temp_min": 60,
            "bed_temp_max": 70,
            "print_speed": 50,
            "fan_speed": 30
        },
        "properties": {
            "tensile_strength_MPa": 45.0,
            "tensile_strength_z_MPa": 13.5,
            "tensile_modulus_MPa": 2500.0,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 10.0,
            "HDT_C": 55.0,
            "density_g_cm3": 1.24
        },
        "characteristics": {
            "cluster": "Functional",
            "uv_resistant": false,
            "hygroscopic": true,
            "prone_to_creep": true,
            "requires_enclosure": false,
            "releases_fumes": false,
            "requires_hardened_nozzle": false,
            "low_friction": false,
            "annealable": false,
            "chemical_resistance_score": 0,
            "printability_score": 8
        },
        "notes": "Easy to print. Must be dried before printing. Prone to creep under constant load. Low heat resistance."
    },
    "PLA_Wood": {
        "common": {
            "nozzle_temperature": 190,
            "nozzle_temp_min": 190,
            "nozzle_temp_max": 210,
            "bed_temperature": 50,
            "bed_temp_min": 50,
            "bed_temp_max": 60,
            "print_speed": 50,
            "fan_speed": 100
        },
        "properties": {
            "tensile_strength_MPa": 26.0,
            "tensile_strength_z_MPa": 11.7,
            "tensile_modulus_MPa": 2780.0,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 15.7,
            "HDT_C": 57.0,
            "density_g_cm3": 1.21
        },
        "characteristics": {
            "cluster": "Functional",
            "uv_resistant": false,
            "hygroscopic": false,
            "prone_to_creep": true,
            "requires_enclosure": false,
            "releases_fumes": false,
            "requires_hardened_nozzle": true,
            "low_friction": false,
            "annealable": false,
            "chemical_resistance_score": 0,
            "printability_score": 7
        },
        "notes": "Requires hardened nozzle (abrasive). Prone to creep under constant load. Low heat resistance."
    },
    "PLA_Metal": {
        "common": {
            "nozzle_temperature": 195,
            "nozzle_temp_min": 195,
            "nozzle_temp_max": 220,
            "bed_temperature": 50,
            "bed_temp_min": 50,
            "bed_temp_max": 60,
            "print_speed": 50,
            "fan_speed": 100
        },
        "properties": {
            "tensile_strength_MPa": 34.0,
            "tensile_strength_z_MPa": 15.3,
            "tensile_modulus_MPa": 2290.0,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 4.0,
            "HDT_C": 52.0,
            "density_g_cm3": 3.0
        },
        "characteristics": {
            "cluster": "Functional",
            "uv_resistant": false,
            "hygroscopic": false,
            "prone_to_creep": true,
            "requires_enclosure": false,
            "releases_fumes": false,
            "requires_hardened_nozzle": true,
            "low_friction": false,
            "annealable": false,
            "chemical_resistance_score": 0,
            "printability_score": 6
        },
        "notes": "Requires hardened nozzle (abrasive). Prone to creep under constant load. Low heat resistance."
    },
    "PLA_Silk": {
        "common": {
            "nozzle_temperature": 190,
            "nozzle_temp_min": 190,
            "nozzle_temp_max": 210,
            "bed_temperature": 50,
            "bed_temp_min": 50,
            "bed_temp_max": 60,
            "print_speed": 50,
            "fan_speed": 100
        },
        "properties": {
            "tensile_strength_MPa": 26.0,
            "tensile_strength_z_MPa": 11.7,
            "tensile_modulus_MPa": 2816.0,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 25.5,
            "HDT_C": 54.0,
            "density_g_cm3": 1.25
        },
        "characteristics": {
            "cluster": "Functional",
            "uv_resistant": false,
            "hygroscopic": false,
            "prone_to_creep": true,
            "requires_enclosure": false,
            "releases_fumes": false,
            "requires_hardened_nozzle": false,
            "low_friction": false,
            "annealable": false,
            "chemical_resistance_score": 0,
            "printability_score": 8
        },
        "notes": "Easy to print. Prone to creep under constant load. Low heat resistance."
    },
    "PLA_Glow-in-the-dark": {
        "common": {
            "nozzle_temperature": 195,
            "nozzle_temp_min": 195,
            "nozzle_temp_max": 220,
            "bed_temperature": 50,
            "bed_temp_min": 50,
            "bed_temp_max": 60,
            "print_speed": 50,
            "fan_speed": 100
        },
        "properties": {
            "tensile_strength_MPa": 32.0,
            "tensile_strength_z_MPa": 14.4,
            "tensile_modulus_MPa": 2640.0,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 27.3,
            "HDT_C": 55.0,
            "density_g_cm3": 1.26
        },
        "characteristics": {
            "cluster": "Functional",
            "uv_resistant": false,
            "hygroscopic": false,
            "prone_to_creep": true,
            "requires_enclosure": false,
            "releases_fumes": false,
            "requires_hardened_nozzle": true,
            "low_friction": false,
            "annealable": false,
            "chemical_resistance_score": 0,
            "printability_score": 7
        },
        "notes": "Requires hardened nozzle (abrasive). Prone to creep under constant load. Low heat resistance."
    },
    "ULTEM_9085": {
        "common": {
            "nozzle_temperature": 350,
            "nozzle_temp_min": 350,
            "nozzle_temp_max": 380,
            "bed_temperature": 120,
            "bed_temp_min": 120,
            "bed_temp_max": 160,
            "print_speed": 50,
            "fan_speed": 0
        },
        "properties": {
            "tensile_strength_MPa": 76.2,
            "tensile_strength_z_MPa": 34.29,
            "tensile_modulus_MPa": 2465.0,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 10.0,
            "HDT_C": 160.0,
            "density_g_cm3": 1.27
        },
        "characteristics": {
            "cluster": "High-Performance",
            "uv_resistant": true,
            "hygroscopic": true,
            "prone_to_creep": false,
            "requires_enclosure": true,
            "releases_fumes": false,
            "requires_hardened_nozzle": false,
            "low_friction": false,
            "annealable": false,
            "chemical_resistance_score": 3,
            "printability_score": 1
        },
        "notes": "Difficult to print. UV resistant, good for outdoor use. Requires heated enclosure to prevent warping. Must be dried before printing. Good chemical resistance. High strength. Excellent high-temperature performance.",
        "annealed": {
            "tensile_strength_MPa": 78.0,
            "tensile_strength_z_MPa": 35.3,
            "HDT_C": 170.0
        }
    },
    "PEEK": {
        "common": {
            "nozzle_temperature": 360,
            "nozzle_temp_min": 360,
            "nozzle_temp_max": 400,
            "bed_temperature": 120,
            "bed_temp_min": 120,
            "bed_temp_max": 160,
            "print_speed": 50,
            "fan_speed": 0
        },
        "properties": {
            "tensile_strength_MPa": 101.0,
            "tensile_strength_z_MPa": 50.5,
            "tensile_modulus_MPa": 3720.0,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 15.0,
            "HDT_C": 217.0,
            "density_g_cm3": 1.32
        },
        "characteristics": {
            "cluster": "High-Performance",
            "uv_resistant": true,
            "hygroscopic": false,
            "prone_to_creep": false,
            "requires_enclosure": true,
            "releases_fumes": false,
            "requires_hardened_nozzle": false,
            "low_friction": true,
            "annealable": false,
            "chemical_resistance_score": 3,
            "printability_score": 1
        },
        "notes": "Difficult to print. UV resistant, good for outdoor use. Requires heated enclosure to prevent warping. Low friction, good for mechanical parts. Good chemical resistance. High strength. Excellent high-temperature performance.",
        "annealed": {
            "tensile_strength_MPa": 103.0,
            "tensile_strength_z_MPa": 51.5,
            "HDT_C": 225.0
        }
    },
    "PEKK": {
        "common": {
            "nozzle_temperature": 355,
            "nozzle_temp_min": 355,
            "nozzle_temp_max": 390,
            "bed_temperature": 120,
            "bed_temp_min": 120,
            "bed_temp_max": 150,
            "print_speed": 50,
            "fan_speed": 0
        },
        "properties": {
            "tensile_strength_MPa": 105.0,
            "tensile_strength_z_MPa": 52.5,
            "tensile_modulus_MPa": 3205.0,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 12.0,
            "HDT_C": 247.0,
            "density_g_cm3": 1.32
        },
        "characteristics": {
            "cluster": "High-Performance",
            "uv_resistant": true,
            "hygroscopic": false,
            "prone_to_creep": false,
            "requires_enclosure": true,
            "releases_fumes": false,
            "requires_hardened_nozzle": false,
            "low_friction": true,
            "annealable": false,
            "chemical_resistance_score": 3,
            "printability_score": 1
        },
        "notes": "Difficult to print. UV resistant, good for outdoor use. Requires heated enclosure to prevent warping. Low friction, good for mechanical parts. Good chemical resistance. High strength. Excellent high-temperature performance.",
        "annealed": {
            "tensile_strength_MPa": 107.0,
            "tensile_strength_z_MPa": 53.5,
            "HDT_C": 255.0
        }
    },
    "PPSU": {
        "common": {
            "nozzle_temperature": 360,
            "nozzle_temp_min": 360,
            "nozzle_temp_max": 390,
            "bed_temperature": 120,
            "bed_temp_min": 120,
            "bed_temp_max": 160,
            "print_speed": 50,
            "fan_speed": 0
        },
        "properties": {
            "tensile_strength_MPa": 85.0,
            "tensile_strength_z_MPa": 42.5,
            "tensile_modulus_MPa": 2800.0,
            "elongation_at_break_pct": null,
            "impact_strength_kJ_m2": 18.0,
            "HDT_C": 190.0,
            "density_g_cm3": 1.29
        },
        "characteristics": {
            "cluster": "High-Performance",
            "uv_resistant": true,
            "hygroscopic": false,
            "prone_to_creep": false,
            "requires_enclosure": true,
            "releases_fumes": false,
            "requires_hardened_nozzle": false,
            "low_friction": true,
            "annealable": false,
            "chemical_resistance_score": 3,
            "printability_score": 1
        },
        "notes": "Difficult to print. UV resistant, good for outdoor use. Requires heated enclosure to prevent warping. Low friction, good for mechanical parts. Good chemical resistance. High strength. Excellent high-temperature performance.",
        "annealed": {
            "tensile_strength_MPa": 87.0,
            "tensile_strength_z_MPa": 43.5,
            "HDT_C": 195.0
        }
    }
};