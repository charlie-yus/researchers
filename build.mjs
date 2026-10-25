// 由 data/status.json、data/skills.json 生成 data/status.js（网页用）和 CONTEXT.md（给 AI 读）
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const read = (f) => JSON.parse(readFileSync(join(here, f), "utf8"));

export function build() {
  const s = read("data/status.json");
  const k = read("data/skills.json");
  const pub = s;
  writeFileSync(join(here, "data/status.js"),
    `// 自动生成，勿手改；改 data/status.json 后运行 node build.mjs\nwindow.STATUS = ${JSON.stringify(pub)};\nwindow.SKILLS = ${JSON.stringify(k)};\n`);
  writeFileSync(join(here, "CONTEXT.md"), context(s, k));
}

const plain = (t) => String(t).replace(/\*\*/g, "");
const stateName = { done: "已落实", doing: "进行中", ask: "待老师确认", todo: "未开始" };

function context(s, k) {
  const m = s.meta, r = s.revision;
  const done = s.tasks.filter((t) => t.done).length;
  const L = [];
  L.push(`# 毕业论文进展上下文（给 AI 读）`, "");
  L.push(`> 自动生成于 ${m.updated}，来源 data/status.json。要改内容，改 JSON 后运行 \`node build.mjs\`，或用 \`node update.mjs\`。`, "");
  L.push(`- 论文：${m.title}${m.subtitle}`);
  L.push(`- 学生：${m.student}（${m.school}）；指导老师：${m.advisor}`);
  L.push(`- 阶段：${m.stage}；清单完成 ${done}/${s.tasks.length}；改稿 ${r.rounds.length}/${r.target} 轮`, "");
  L.push(`## AI 必须遵守`, "");
  L.push(`1. ${r.rule}要点：A4，页边距上 3 cm、下 2.5 cm、左 2.5 cm、右 2 cm；正文小四宋体 / Times New Roman，1.25 倍行距，首行缩进 2 字符；标题层级 一、（一）1．（1）；三线表、表题在上、图题在下、连续编号；参考文献 GB/T 7714-2015，中文在前按拼音、外文在后按字母。`);
  L.push(`2. 改稿顺序：${r.phases.map((p, i) => `${i + 1}. ${p.name}（${p.desc}）`).join("；")}。前一阶段站稳再进入下一阶段。`);
  L.push(`3. 每轮先请 AI 以审稿人身份提意见，再按意见修订；从 data/skills.json 的老师 Skills 清单中自行判断选用，并记录用了哪些。`);
  L.push(`4. 不改动已核定的数字与引用，除非重新跑过分析或重新核对过原文；结论强度与证据一致，不挑显著结果报告。`);
  L.push(`5. 原始数据（CSMAR、CNRDS）只存本机，不上传、不公开。`, "");
  L.push(`## 时间节点`, "");
  for (const x of s.milestones) L.push(`- ${x.date}（${x.week}）${x.label}${x.state === "done" ? " ✓" : x.state === "now" ? " ← 当前" : ""}`);
  L.push("", `## 完成清单`, "");
  let g = "";
  for (const t of s.tasks) {
    if (t.group !== g) { g = t.group; L.push(`### ${g}`); }
    L.push(`- [${t.done ? "x" : " "}] ${t.title}${t.date ? `（${t.date}）` : ""}${t.note ? `：${t.note}` : ""}  \`${t.id}\``);
  }
  L.push("", `## 改稿记录（${r.rounds.length}/${r.target}）`, "");
  if (!r.rounds.length) L.push("- 尚未开始。");
  for (const x of r.rounds) L.push(`- 第 ${x.n} 轮 · ${x.date} · ${r.phases.find((p) => p.id === x.phase)?.name ?? x.phase} · ${x.by}${x.skills?.length ? ` · Skills：${x.skills.join("、")}` : ""}：${x.change}`);
  L.push("", `## 老师反馈`, "");
  for (const f of s.feedback) {
    L.push(`### ${f.date}（${f.week}）${f.source}`);
    for (const it of f.items) L.push(`- 【${stateName[it.state]}】${it.text}\n  - 回应：${it.reply}`);
  }
  L.push("", `## 想请老师确认的问题`, "", ...s.questions.map((q, i) => `${i + 1}. ${q}`));
  L.push("", `## 协作记录（新在前）`, "", ...s.log.map((x) => `- ${x.date} · ${x.actor}：${x.text}`));
  if (s.lessons) {
    L.push("", `## 卡点与经验（${s.lessons.date}）`, "");
    for (const g of s.lessons.groups) { L.push(`### ${g.area}`); for (const x of g.items) L.push(`- ${x.problem}：${x.cause}→${x.fix}。规则：${x.rule}`); }
    L.push("", "### 规模化流程", ...s.lessons.playbook.map((x, i) => `${i + 1}. ${x}`));
  }
  L.push("", `## 工具与数据`, "");
  L.push(`- 数据：${s.tools.data.map((d) => `${d[0]}（${d[1]}）`).join("；")}。${s.tools.dataNote}`);
  L.push(`- 模型：${s.tools.models.map((d) => `${d[0]}${d[1] ? `（${d[1]}）` : ""}：${d[2]}`).join("；")}`);
  L.push(`- MCP：${s.tools.mcp.map((d) => `${d[0]}（${d[1]}，${d[2]}）`).join("；")}`);
  L.push(`- Skill：${s.tools.skills.map((d) => `${d[0]}（${d[1]}，${d[3] === "used" ? "用过" : "已装"}）`).join("；")}`);
  L.push(`- 软件：${s.tools.software.map((d) => `${d[0]}（${d[1]}）`).join("；")}`);
  L.push("", `## 老师的写作 Skills 清单（${k.skills.length} 项，本机已装 ${k.skills.filter((x) => x.installed).length} 项）`, "");
  L.push(`来源：${k.source}。整包下载：`, ...Object.entries(k.repos).map(([n, u]) => `- ${n}：${u}`), "");
  L.push(`| 编号 | 类别 | 名称 | 用途 | 建议 | 已装 |`, `| --- | --- | --- | --- | --- | --- |`);
  for (const x of k.skills) L.push(`| ${x.no} | ${x.group} | ${x.url ? `[${x.name}](${x.url})` : x.name} | ${x.summary} | ${x.advice} | ${x.installed ? "是" : ""} |`);
  L.push("", `## 流程图八个阶段`, "");
  for (const x of s.flow.stages) L.push(`- ${x.n} ${x.name}（${x.date}，${x.badge}${x.state === "now" ? "，进行中" : ""}）：${x.headline}；${x.tags.map((t) => `[${t[0]}] ${t[1]}`).join("；")}`);
  L.push("", `## 成果（网页“成果”页，输入密码后下载）`, "");
  for (const o of s.outputs ?? []) L.push(`- ${o.title}（${o.kind}，${o.note}）`);
  L.push("", `## 网址`, "", `- 进展页：${m.siteUrl}`, `- 本文件：${m.siteUrl}CONTEXT.md`, `- 数据源：${m.siteUrl}data/status.json`, `- 个人主页：${m.homepage}`);
  return L.join("\n") + "\n";
}

if (process.argv[1] === fileURLToPath(import.meta.url)) { build(); console.log("built status.js + CONTEXT.md"); }
