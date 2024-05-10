#!/bin/bash

# Store current branch name
current_branch=$(git rev-parse --abbrev-ref HEAD)

# Target branch where changes will be pushed
target_branch="release"

# Switch to target branch temporarily
git checkout $target_branch

# Fetch latest changes from remote target branch
git fetch origin $target_branch

# Reset local target branch to match remote
git reset --hard origin/$target_branch

# Copy contents of dist folder to root directory
cp -R dist/* .

# Stage all changes
git add .

# Commit changes with a descriptive message
git commit -m "Update dist folder"

# Push changes to target branch
git push origin $target_branch

# Switch back to the original branch
git checkout $current_branch

echo "Update and push completed successfully."
