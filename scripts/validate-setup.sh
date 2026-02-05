#!/bin/bash

# Bolt Design System - Setup Validation Script
# This script validates that all updates have been applied correctly

set -e

echo "🔍 Validating Bolt Design System Setup..."
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Track validation status
ERRORS=0
WARNINGS=0

# Function to check if file exists
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $1 exists"
    else
        echo -e "${RED}✗${NC} $1 missing"
        ((ERRORS++))
    fi
}

# Function to check if directory exists
check_dir() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✓${NC} $1 exists"
    else
        echo -e "${RED}✗${NC} $1 missing"
        ((ERRORS++))
    fi
}

# Function to check package.json field
check_package_field() {
    local field=$1
    local expected=$2
    local actual=$(node -p "require('./package.json').$field" 2>/dev/null)
    
    if [ "$actual" = "$expected" ]; then
        echo -e "${GREEN}✓${NC} package.json $field = $expected"
    else
        echo -e "${RED}✗${NC} package.json $field = $actual (expected: $expected)"
        ((ERRORS++))
    fi
}

# Function to check if script exists in package.json
check_script() {
    local script=$1
    if grep -q "\"$script\":" package.json; then
        echo -e "${GREEN}✓${NC} Script '$script' exists in package.json"
    else
        echo -e "${RED}✗${NC} Script '$script' missing from package.json"
        ((ERRORS++))
    fi
}

# Function to check if dependency exists
check_dependency() {
    local dep=$1
    if grep -q "\"$dep\":" package.json; then
        echo -e "${GREEN}✓${NC} Dependency '$dep' exists"
    else
        echo -e "${YELLOW}⚠${NC} Dependency '$dep' not found"
        ((WARNINGS++))
    fi
}

echo "📦 Checking Package Configuration..."
check_package_field "name" "@santakrishnan/bolt-design"
check_package_field "version" "0.0.0-development"
echo ""

echo "📝 Checking Required Scripts..."
check_script "check"
check_script "fix"
check_script "prepare"
echo ""

echo "📚 Checking Dependencies..."
check_dependency "ultracite"
check_dependency "@biomejs/biome"
check_dependency "husky"
echo ""

echo "📄 Checking Configuration Files..."
check_file "agents.md"
check_file "biome.jsonc"
check_file "UPGRADE_SUMMARY.md"
echo ""

echo "🤖 Checking AI Configuration..."
check_dir ".kiro"
check_dir ".kiro/steering"
check_file ".kiro/steering/project-standards.md"
check_file ".kiro/steering/ai-development-guide.md"
check_file ".kiro/steering/getting-started.md"
echo ""

echo "🪝 Checking Git Hooks..."
check_dir ".husky"
check_file ".husky/pre-commit"
check_file ".husky/commit-msg"

# Check if hooks are executable
if [ -x ".husky/pre-commit" ]; then
    echo -e "${GREEN}✓${NC} .husky/pre-commit is executable"
else
    echo -e "${YELLOW}⚠${NC} .husky/pre-commit is not executable (run: chmod +x .husky/pre-commit)"
    ((WARNINGS++))
fi

if [ -x ".husky/commit-msg" ]; then
    echo -e "${GREEN}✓${NC} .husky/commit-msg is executable"
else
    echo -e "${YELLOW}⚠${NC} .husky/commit-msg is not executable (run: chmod +x .husky/commit-msg)"
    ((WARNINGS++))
fi
echo ""

echo "🔧 Checking Node Modules..."
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓${NC} node_modules exists"
    
    # Check for key packages
    if [ -d "node_modules/ultracite" ]; then
        echo -e "${GREEN}✓${NC} ultracite installed"
    else
        echo -e "${YELLOW}⚠${NC} ultracite not installed (run: pnpm install)"
        ((WARNINGS++))
    fi
    
    if [ -d "node_modules/@biomejs/biome" ]; then
        echo -e "${GREEN}✓${NC} @biomejs/biome installed"
    else
        echo -e "${YELLOW}⚠${NC} @biomejs/biome not installed (run: pnpm install)"
        ((WARNINGS++))
    fi
    
    if [ -d "node_modules/husky" ]; then
        echo -e "${GREEN}✓${NC} husky installed"
    else
        echo -e "${YELLOW}⚠${NC} husky not installed (run: pnpm install)"
        ((WARNINGS++))
    fi
else
    echo -e "${RED}✗${NC} node_modules missing (run: pnpm install)"
    ((ERRORS++))
fi
echo ""

# Summary
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 Validation Summary"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}✓ All checks passed!${NC}"
    echo ""
    echo "🎉 Setup is complete and validated!"
    echo ""
    echo "Next steps:"
    echo "  1. Run: pnpm install (if not done)"
    echo "  2. Run: pnpm prepare (initialize git hooks)"
    echo "  3. Run: pnpm dev (start development)"
    echo ""
    exit 0
elif [ $ERRORS -eq 0 ]; then
    echo -e "${YELLOW}⚠ $WARNINGS warning(s) found${NC}"
    echo ""
    echo "Setup is mostly complete, but some optional items need attention."
    echo "Review warnings above and run suggested commands."
    echo ""
    exit 0
else
    echo -e "${RED}✗ $ERRORS error(s) found${NC}"
    if [ $WARNINGS -gt 0 ]; then
        echo -e "${YELLOW}⚠ $WARNINGS warning(s) found${NC}"
    fi
    echo ""
    echo "Setup is incomplete. Please fix errors above."
    echo ""
    exit 1
fi
