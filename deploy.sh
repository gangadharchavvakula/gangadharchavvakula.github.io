#!/bin/bash

# Build the project
ng build --configuration production

# Create a 404.html file for GitHub Pages
cp docs/index.html docs/404.html

# Add all files to git
git add .

# Commit changes
git commit -m "Deploy to GitHub Pages"

# Push to GitHub
git push origin main 