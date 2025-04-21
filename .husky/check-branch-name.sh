#!/bin/bash

# Get the current branch name
branch_name=$(git rev-parse --abbrev-ref HEAD)

# Define the naming pattern (you can customize this regex)
pattern='^(feature|bugfix|hotfix|chore|release)/.*$'

# Check if the branch name is 'gh-pages' or 'main'
if [[ "$branch_name" == "gh-pages" || "$branch_name" == "main" ]]; then
    exit 0
fi

# Check if the branch name matches the pattern
if [[ ! "$branch_name" =~ $pattern ]]; then
    echo "Error: Branch name '$branch_name' does not follow the naming convention."
    echo "Please use one of the following formats:"
    echo "  - feature/*"
    echo "  - bugfix/*"
    echo "  - hotfix/*"
    echo "  - chore/*"
    echo "  - release/*"
    exit 1
fi

exit 0
