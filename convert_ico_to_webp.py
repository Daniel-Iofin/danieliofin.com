#!/usr/bin/env python3
"""
Convert ICO file to WebP without compression
"""

from PIL import Image
import sys
import os

def convert_ico_to_webp(input_path, output_path, quality=100):
    """
    Convert ICO file to WebP format without compression
    
    Args:
        input_path (str): Path to input ICO file
        output_path (str): Path to output WebP file
        quality (int): Quality setting (100 = no compression)
    """
    try:
        # Open the ICO file
        with Image.open(input_path) as img:
            # Convert to RGBA if not already
            if img.mode != 'RGBA':
                img = img.convert('RGBA')
            
            # Save as WebP with maximum quality (no compression)
            img.save(output_path, 'WEBP', quality=quality, lossless=True)
            
        print(f"✅ Successfully converted {input_path} to {output_path}")
        print(f"   Input size: {os.path.getsize(input_path)} bytes")
        print(f"   Output size: {os.path.getsize(output_path)} bytes")
        
    except Exception as e:
        print(f"❌ Error converting file: {e}")
        sys.exit(1)

if __name__ == "__main__":
    input_file = "public/basis.ico"
    output_file = "public/basis_uncompressed.webp"
    
    # Check if input file exists
    if not os.path.exists(input_file):
        print(f"❌ Input file not found: {input_file}")
        sys.exit(1)
    
    # Convert the file
    convert_ico_to_webp(input_file, output_file, quality=100) 