#!/bin/sh
# 生成并推送到 GitHub。没有改动就什么也不做。可半天跑一次。
set -e
cd "$(dirname "$0")"
node build.mjs
[ -d .git ] || { echo "还没有 git 仓库：先 git init 并 git remote add origin <地址>"; exit 1; }
git add -A
git diff --cached --quiet && { echo "没有新进展"; exit 0; }
git commit -q -m "进展更新 $(date '+%Y-%m-%d %H:%M')"
git push -q origin HEAD
echo "已推送"
