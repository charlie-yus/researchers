# 论文进展页

网址：https://charlie-yus.github.io/researchers/

余帅本科毕业论文的实时进展，给王鸿鑫老师看，也给接手的 AI 读。

- 打开 `index.html`：首屏是流程图（点圆圈看每一步）和“给 AI 读”横条；下面六块都能横向切换：每天进展、完成情况、改稿、老师意见、用到的工具（含老师的 105 项写作 Skills）、成果（输入密码打开）。
- 本机预览：`node serve.mjs` 后打开 http://localhost:4571
- `CONTEXT.md`：给 AI 读的完整上下文（自动生成）。

## 更新

唯一数据源是 `data/status.json`。不要手改 `data/status.js` 和 `CONTEXT.md`。

```sh
node update.mjs tick <任务id>                         # 勾选一项
node update.mjs round <empirical|robust|text> <谁> "<改了什么>" [skill1,skill2]
node update.mjs log <本人|Claude|GPT|老师> "<一句话>"
node build.mjs                                       # 手改 status.json 后
PASS=<密码> node encrypt.mjs                          # 成果文件有更新时重新加密
./publish.sh                                         # 生成并推送；没有新进展就不推
```

本机每天 12:30、23:30 自动跑一次 `publish.sh`（`~/Library/LaunchAgents/com.charlie-yus.researchers-publish.plist`，日志在 `~/Library/Logs/researchers-publish.log`）。当天没做事、status.json 没变，就不会有新提交。

```sh
```

## 不放进仓库的东西

原始数据（CSMAR、CNRDS）、论文全文、学号、密钥都不进这个仓库。
