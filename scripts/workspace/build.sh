#!/usr/bin/env bash
echo "┏━━━ 📦 Building Workspace ━━━━━━━━━━━━━━━━━━━"
# `tsc` will use <rootDir>/tsconfig.json
# which will build all packages beacuase
# `tsc` thinks <rootDir> is a project depends
# on all packages that are listed in "references"
# but we have to enable each one to be referenced
# by makeing "composite" = true in "compilerOptions"
yarn tsc -b .