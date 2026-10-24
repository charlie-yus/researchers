// 进展页：首屏是流程图（核心），下面按更新日志的版式排日志、清单、修订、反馈、工具、Skills、成果。内容全部来自 data/status.js
const S = window.STATUS, K = window.SKILLS;
const $ = (q) => document.querySelector(q);
const esc = (t) => String(t ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const CHECK = '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 6.2l2.3 2.3 4.7-5"/></svg>';
const LOCK = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 015 0v2"/></svg>';
const md2 = (d) => { const [, m, day] = d.split("-"); return `${+m} 月 ${+day} 日`; };
const longDate = (d) => { const [y, m, day] = d.split("-"); return `${y} 年 ${+m} 月 ${+day} 日`; };
const R = S.revision, TASK = Object.fromEntries(S.tasks.map((t) => [t.id, t]));
const done = S.tasks.filter((t) => t.done).length;
const today = new Date(new Date().toLocaleDateString("sv-SE", { timeZone: "Asia/Shanghai" }));
const next = S.milestones.find((m) => m.state === "todo");
const days = next ? Math.round((new Date(next.date) - today) / 864e5) : null;
const ago = Math.round((today - new Date(S.meta.updated)) / 864e5);
const STATE = { done: "已落实", doing: "进行中", ask: "待确认" };
const curPhase = R.rounds.length ? R.rounds[R.rounds.length - 1].phase : R.phases[0].id;
const SECTIONS = [["log", "进展"], ["tasks", "完成"], ["revision", "改稿"], ["feedback", "意见"], ["tools", "工具"], ["outputs", "成果"]];
const KINDS = ["完成", "反馈", "改稿", "工具"];
const GROUPS = [...new Set(S.tasks.map((t) => t.group))];
const FB = [...S.feedback.map((f) => [`${md2(f.date)} ${f.source}`, f.items]), ["待老师确认", S.questions.map((q) => ({ text: q, reply: "请老师确认", state: "ask" }))]];
const TOOLS = [["分工"], ["数据"], ["MCP"], ["Skill"], ["软件"], [`写作 Skills ${K.skills.length}`]];
const taskRow = (t) => `<div class="task${t.done ? " done" : ""}"><span class="box">${t.done ? CHECK : ""}</span><span>${esc(t.title)}${t.note ? `<span class="n">${esc(t.note)}</span>` : ""}</span>${t.date ? `<time>${md2(t.date)}</time>` : "<span></span>"}</div>`;
const head = (kicker, title) => `<span class="kicker">${kicker}</span><h2 class="title">${title}</h2>`;
const table = (cols, rows) => `<div class="tbl"><table><tr>${cols.map((c) => `<th>${c}</th>`).join("")}</tr>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</table></div>`;

// 给 AI 读
const ctxUrl = new URL("CONTEXT.md", S.meta.siteUrl).href;
const ask = `请阅读 ${ctxUrl} ，用不超过 5 句话总结余帅同学毕业论文的进展：已完成什么、正在做什么、下一个节点、老师反馈的落实情况、需要老师确认的问题。`;
const gpt = `https://chatgpt.com/?q=${encodeURIComponent(ask)}`, claude = `https://claude.ai/new?q=${encodeURIComponent(ask)}`;

$("#pillLinks").innerHTML = [["top", "流程"], ...SECTIONS].map(([id, n]) => `<a href="#${id}" data-s="${id}">${n}</a>`).join("");

$("#app").innerHTML = `
<header class="hero" id="top"><div class="art"><img src="assets/art/hero.jpg" alt="" /></div><div class="hero-in">
  <p class="eyebrow">本科毕业论文<i></i>更新于${ago <= 0 ? "今天" : ` ${ago} 天前`}</p>
  <h1>论文进展<span>-由Agent实时更新</span></h1>
  <p class="sub">${esc(S.meta.title)}${esc(S.meta.subtitle)}<br />${esc(S.meta.student)} · 指导老师 ${esc(S.meta.advisor)}</p>
  <div class="ai-strip"><span class="tag">给 AI 读</span><span>让 AI 读这一页，<b>一键总结余帅同学的进展</b></span>
    <nav><a href="${gpt}" target="_blank" rel="noopener">ChatGPT 总结</a><a href="${claude}" target="_blank" rel="noopener">Claude 总结</a><button id="copyCtx">复制全文</button><a href="${esc(S.meta.homepage)}" target="_blank" rel="noopener">个人主页</a></nav></div>
  <div class="window">
    <div class="win-bar"><b>${esc(S.flow.title)}</b><span>点圆圈看每一步</span>
      <div class="track"><span><i class="pulse"></i>当前<b>改稿 ${R.rounds.length} / ${R.target} 轮</b></span>${next ? `<span>下一站<b>${md2(next.date)} ${esc(next.label)}</b>${days >= 0 ? `<em>${days} 天</em>` : ""}</span>` : ""}</div></div>
    <div class="flow">${window.flowSVG(S)}</div>
    ${window.flowList(S)}
    <div class="panel" id="panel"></div>
  </div>
</div></header>

<nav class="sidenav" id="sidenav" aria-label="章节">${SECTIONS.map(([id, n]) => `<a href="#${id}" data-s="${id}"><i></i><span>${n}</span></a>`).join("")}</nav>
<div class="grid body" id="body">
  <div class="main">
    <section id="log" class="block"><div class="bh"><h2>每天进展</h2><div class="seg" data-tabs="log">${S.days.map((d, i) => `<button aria-pressed="${!i}" data-k="${i}">${md2(d.date)}</button>`).join("")}</div></div><div class="bp" id="p-log"></div></section>

    <section id="tasks" class="block"><div class="bh"><h2>完成情况 <em>${done} / ${S.tasks.length}</em></h2><div class="seg" data-tabs="tasks">${GROUPS.map((g, i) => `<button aria-pressed="${!i}" data-k="${i}">${esc(g)}</button>`).join("")}</div></div>
      <div class="bar"><i style="width:${(done / S.tasks.length) * 100}%"></i></div><div class="bp" id="p-tasks"></div></section>

    <section id="revision" class="block"><div class="bh"><h2>改稿 <em>${R.rounds.length} / ${R.target} 轮</em></h2><span class="hint">老师要求：AI 提意见 → 按意见改，循环 ${R.target} 轮</span></div>
      <div class="phases">${R.phases.map((p, i) => `${i ? '<span class="arr">→</span>' : ""}<div class="phase${p.id === curPhase ? " on" : ""}"><small>${R.rounds.filter((x) => x.phase === p.id).length} 轮</small><b>${esc(p.name)}</b><span>${esc(p.desc)}</span></div>`).join("")}</div>
      ${R.rounds.length ? table(["轮", "日期", "阶段", "谁", "改了什么", "Skill"], [...R.rounds].reverse().map((x) => [x.n, md2(x.date), esc(R.phases.find((p) => p.id === x.phase)?.name), esc(x.by), esc(x.change), x.skills.map((s) => `<span class="tag">${esc(s)}</span>`).join(" ")])) : ""}</section>

    <section id="feedback" class="block"><div class="bh"><h2>老师意见</h2><div class="seg" data-tabs="feedback">${FB.map(([n], i) => `<button aria-pressed="${!i}" data-k="${i}">${n}</button>`).join("")}</div></div><div class="bp" id="p-feedback"></div>
      <div class="legend"><span><i class="st done"></i>已落实</span><span><i class="st doing"></i>进行中</span><span><i class="st ask"></i>待确认</span></div></section>

    <section id="tools" class="block"><div class="bh"><h2>用到的工具</h2><div class="seg" data-tabs="tools">${TOOLS.map(([n], i) => `<button aria-pressed="${!i}" data-k="${i}">${n}</button>`).join("")}</div></div><div class="bp" id="p-tools"></div></section>

    <section id="outputs" class="block"><div class="bh"><h2>成果</h2><span class="hint">输入密码后打开</span></div>
      <div class="files">${S.outputs.map((o, i) => `<button class="file" data-id="${o.id}"><span class="cover" style="background-position:${["6% 52%", "32% 40%", "50% 30%", "78% 34%", "96% 50%"][i % 5]}"><i>${LOCK}</i></span><b>${esc(o.title)}</b><small>${esc(o.kind)} · ${esc(o.note)}</small></button>`).join("")}</div></section>
  </div>
</div>
<footer><span>王鸿鑫科研组 · ${esc(S.meta.student)} · 更新于 ${longDate(S.meta.updated)}</span><a href="CONTEXT.md">CONTEXT.md</a></footer>`;

// 各节横向切换：一次只显示一组
const PANEL = {
  log: (i) => { const d = S.days[i]; const counts = KINDS.map((x) => [x, d.items.filter((it) => it.kind === x).length]).filter(([, n]) => n);
    return `<h3 class="dt">${esc(d.title)}</h3><div class="chips">${counts.map(([x, n]) => `<span class="chip k-${x}${x === "完成" ? " accent" : ""}">${x} ${n}</span>`).join("")}</div>
      <ul class="items">${d.items.map((it) => `<li class="item"><h4>${esc(it.module)} · ${esc(it.kind)}</h4><p>${esc(it.text)}</p></li>`).join("")}</ul>`; },
  tasks: (i) => `<div class="cols">${S.tasks.filter((t) => t.group === GROUPS[i]).map(taskRow).join("")}</div>`,
  feedback: (i) => `<div class="fbt">` + table(["", "老师说", "落实"], FB[i][1].map((it) => [`<span class="st ${it.state}" title="${STATE[it.state]}"></span>`, esc(it.text), esc(it.reply)])) + "</div>",
  tools: (i) => { const t = S.tools;
    return [
      () => `<div class="roles">${t.models.map((d) => `<div class="role"><small>${esc(d[1] || "人工")}</small><b>${esc(d[0])}</b><span>${esc(d[2])}</span></div>`).join("")}</div>`,
      () => table(["来源", "用在哪"], t.data.map((d) => [esc(d[0]), esc(d[1])])) + `<p class="hint" style="margin-top:10px">${esc(t.dataNote)}</p>`,
      () => table(["名称", "在哪", "做什么"], t.mcp.map((d) => d.map(esc))),
      () => table(["名称", "在哪", "做什么", ""], t.skills.map((d) => [esc(d[0]), esc(d[1]), esc(d[2]), `<span class="tag">${d[3] === "used" ? "用过" : "已装"}</span>`])),
      () => table(["软件", "用途"], t.software.map((d) => d.map(esc))),
      () => `<div class="tools-row"><div class="seg sm" id="skChips">${["全部", ...new Set(K.skills.map((s) => s.group))].map((g, j) => `<button aria-pressed="${!j}" data-g="${esc(g)}">${esc(g)}</button>`).join("")}</div>
        <input class="search" type="search" id="sk" placeholder="搜索" /><label class="hint"><input type="checkbox" id="skInst" /> 只看已装 ${K.skills.filter((s) => s.installed).length}</label></div>
        <div class="scrollbox" id="skTable"></div><p class="hint" style="margin-top:10px">老师分享的清单；整包下载：${Object.entries(K.repos).map(([n, u]) => `<a href="${esc(u)}">${esc(n.split("/")[1])}</a>`).join("、")}</p>`,
    ][i](); },
};
function setTab(name, i) {
  document.querySelectorAll(`[data-tabs="${name}"] button`).forEach((b) => b.setAttribute("aria-pressed", +b.dataset.k === i));
  $(`#p-${name}`).innerHTML = PANEL[name](i);
  if (name === "tools" && i === 5) {
    skillTable();
    $("#skChips").onclick = (e) => { const b = e.target.closest("button"); if (!b) return; document.querySelectorAll("#skChips button").forEach((x) => x.setAttribute("aria-pressed", x === b)); skillTable(); };
    $("#sk").oninput = skillTable; $("#skInst").onchange = skillTable;
  }
}
document.querySelectorAll("[data-tabs]").forEach((seg) => {
  seg.onclick = (e) => { const b = e.target.closest("button"); if (b) setTab(seg.dataset.tabs, +b.dataset.k); };
  setTab(seg.dataset.tabs, 0);
});

// 流程图：点圆圈看这一步的完成项与工具
function show(i) {
  const s = S.flow.stages[i];
  document.querySelectorAll(".stage, .fl-item").forEach((g) => g.classList.toggle("sel", +g.dataset.i === i));
  $("#panel").innerHTML = `<h4>${esc(s.n)} ${esc(s.name)}<span>${esc(s.date)} · ${esc(s.badge)}</span></h4>
    <div class="ptasks">${s.tasks.map((id) => TASK[id]).filter(Boolean).map(taskRow).join("")}</div>
    <div class="toolchips">${s.tools.map((x) => `<span>${esc(x)}</span>`).join("")}</div>`;
}
document.querySelectorAll(".stage, .fl-item").forEach((g) => {
  g.onclick = () => show(+g.dataset.i);
  g.onkeydown = (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); show(+g.dataset.i); } };
});
show(Math.max(0, S.flow.stages.findIndex((s) => s.state === "now")));

// 写作 Skills 清单
function skillTable() {
  const g = $("#skChips [aria-pressed=true]")?.dataset.g ?? "全部", q = $("#sk").value.trim().toLowerCase(), inst = $("#skInst").checked;
  const rows = K.skills.filter((s) => (g === "全部" || s.group === g) && (!inst || s.installed) && (!q || `${s.name} ${s.summary} ${s.task}`.toLowerCase().includes(q)));
  $("#skTable").innerHTML = table(["编号", "类别", "名称", "用途", "建议", "已装"], rows.map((s) => [s.no, esc(s.group), s.url ? `<a href="${esc(s.url)}">${esc(s.name)}</a>` : esc(s.name), esc(s.summary), esc(s.advice), s.installed ? `<span class="yes">${CHECK}</span>` : ""]));
}

// 给 AI：复制全文 / 右上角按钮
async function copyCtx(btn) {
  try {
    const text = await (await fetch("CONTEXT.md")).text();
    await navigator.clipboard.writeText(`请用不超过 5 句话总结下面这位同学的毕业论文进展：已完成什么、正在做什么、下一个节点、老师反馈的落实情况、需要老师确认的问题。\n\n${text}`);
    btn.textContent = "已复制";
  } catch { btn.textContent = "复制失败"; }
}
$("#copyCtx").onclick = (e) => copyCtx(e.currentTarget);

// 目录高亮
const links = [...document.querySelectorAll("[data-s]")];
const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) links.forEach((a) => a.classList.toggle("on", a.dataset.s === e.target.id)); }), { rootMargin: "-35% 0px -60% 0px" });
["top", ...SECTIONS.map(([id]) => id)].forEach((id) => io.observe(document.getElementById(id)));
// 侧边导航：到正文区才浮现
new IntersectionObserver(([e]) => $("#sidenav").classList.toggle("show", e.isIntersecting), { rootMargin: "0px 0px -40% 0px" }).observe($("#body"));

// 成果：输入密码后在浏览器里解密；密码只留在内存里
let PASS = null;
async function decrypt(id, pass) {
  const buf = new Uint8Array(await (await fetch(`files/${id}.enc`)).arrayBuffer());
  const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(pass), "PBKDF2", false, ["deriveKey"]);
  const key = await crypto.subtle.deriveKey({ name: "PBKDF2", salt: buf.slice(4, 20), iterations: 600000, hash: "SHA-256" }, base, { name: "AES-GCM", length: 256 }, false, ["decrypt"]);
  return crypto.subtle.decrypt({ name: "AES-GCM", iv: buf.slice(20, 32) }, key, buf.slice(32));
}
async function openFile(o, pass, msg) {
  if (msg) msg.textContent = "解密中…";
  try {
    const pdf = o.kind === "PDF";
    const url = URL.createObjectURL(new Blob([await decrypt(o.id, pass)], { type: pdf ? "application/pdf" : "application/vnd.openxmlformats-officedocument.wordprocessingml.document" }));
    PASS = pass;
    $("#modal")?.remove();
    if (!(pdf && window.open(url, "_blank"))) Object.assign(document.createElement("a"), { href: url, download: `余帅_${o.title}.${pdf ? "pdf" : "docx"}` }).click();
  } catch { PASS = null; if (msg) msg.textContent = "密码不对"; }
}
document.querySelectorAll(".file").forEach((b) => (b.onclick = () => {
  const o = S.outputs.find((x) => x.id === b.dataset.id);
  if (PASS) return openFile(o, PASS);
  document.body.insertAdjacentHTML("beforeend", `<div id="modal"><form><b>${esc(o.title)}</b><input type="password" id="pw" placeholder="密码" autocomplete="off" /><div class="btns"><button class="btn">打开</button><button type="button" class="btn ghost" id="pwX">取消</button><span class="hint" id="pwMsg"></span></div></form></div>`);
  $("#pw").focus();
  $("#pwX").onclick = () => $("#modal").remove();
  $("#modal form").onsubmit = (e) => { e.preventDefault(); openFile(o, $("#pw").value, $("#pwMsg")); };
}));
