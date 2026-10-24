#!/bin/sh
# 生成并推送到 GitHub。只有进展真的变了（status.json 或成果有改动）才会提交，没做事就什么也不推。
# 本机每天 12:30、23:30 各自动跑一次（~/Library/LaunchAgents/com.charlie-yus.researchers-publish.plist）。
set -e
export PATH="/Users/yushuai/.nvm/versions/node/v24.12.0/bin:/opt/homebrew/bin:/usr/bin:/bin"
cd "$(dirname "$0")"
node build.mjs >/dev/null
git add -A
if git diff --cached --quiet; then echo "$(date '+%F %T') 没有新进展"; exit 0; fi
git -c user.name="charlie-yus" -c user.email="charlie.yshuai@gmail.com" commit -q -m "进展更新 $(date '+%Y-%m-%d %H:%M')"
git push -q origin HEAD
echo "$(date '+%F %T') 已推送"
