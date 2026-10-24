// 更新进展的命令行（人和 AI 都用这个，别直接改 status.js）
//   node update.mjs tick <任务id>          勾选完成（记今天日期）
//   node update.mjs untick <任务id>
//   node update.mjs round <empirical|robust|text> <谁> "<改了什么>" [skill1,skill2]
//   node update.mjs log <本人|Claude|GPT|老师> "<一句话>"
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { build } from "./build.mjs";

const p = join(dirname(fileURLToPath(import.meta.url)), "data/status.json");
const s = JSON.parse(readFileSync(p, "utf8"));
const today = new Date().toLocaleDateString("sv-SE", { timeZone: "Asia/Shanghai" });
const [cmd, ...a] = process.argv.slice(2);
const fail = (m) => { console.error(m); process.exit(1); };

if (cmd === "tick" || cmd === "untick") {
  const t = s.tasks.find((x) => x.id === a[0]) ?? fail(`没有任务 ${a[0]}；可选：${s.tasks.map((x) => x.id).join(" ")}`);
  t.done = cmd === "tick";
  if (t.done) t.date = today; else delete t.date;
} else if (cmd === "round") {
  const [phase, by, change, skills] = a;
  if (!s.revision.phases.some((x) => x.id === phase)) fail("阶段只能是 empirical / robust / text");
  if (!by || !change) fail('用法：round <阶段> <谁> "<改了什么>" [skill1,skill2]');
  s.revision.rounds.push({ n: s.revision.rounds.length + 1, date: today, phase, by, change, skills: skills ? skills.split(",") : [] });
} else if (cmd === "log") {
  if (!a[0] || !a[1]) fail('用法：log <谁> "<一句话>"');
  s.log.unshift({ date: today, actor: a[0], text: a[1] });
} else fail("命令：tick / untick / round / log");

s.meta.updated = today;
writeFileSync(p, JSON.stringify(s, null, 2) + "\n");
build();
console.log("ok");
