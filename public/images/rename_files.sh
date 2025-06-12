#!/bin/bash

# Script to rename charles-traning*.jpg files to charlestraining0.jpg, charlestraining1.jpg, etc.
# Counter for sequential numbering
counter=0

# Loop through all charles-traning*.jpg files
for file in charles-traning*.jpg; do
    # Check if files exist (avoid issues if no matches)
    if [ -f "$file" ]; then
        # Get the file extension
        extension="${file##*.}"
        
        # Create new filename with sequential number
        new_name="charlestraining${counter}.${extension}"
        
        # Rename the file
        mv "$file" "$new_name"
        
        echo "Renamed: $file -> $new_name"
        
        # Increment counter
        ((counter++))
    fi
done

echo "Renaming complete. Total files renamed: $counter"
