# 毕业论文进展上下文（给 AI 读）

> 自动生成于 2026-10-25，来源 data/status.json。要改内容，改 JSON 后运行 `node build.mjs`，或用 `node update.mjs`。

- 论文：人工智能应用对企业创新质量的影响研究——基于“说”与“做”的再检验
- 学生：余帅（武汉学院 管理学院 工商管理2301）；指导老师：王鸿鑫老师
- 阶段：初稿已成，开始改稿；清单完成 25/35；改稿 0/50 轮

## AI 必须遵守

1. 每一轮都遵守《武汉学院本科毕业论文（设计）撰写基本规范及参考格式》。要点：A4，页边距上 3 cm、下 2.5 cm、左 2.5 cm、右 2 cm；正文小四宋体 / Times New Roman，1.25 倍行距，首行缩进 2 字符；标题层级 一、（一）1．（1）；三线表、表题在上、图题在下、连续编号；参考文献 GB/T 7714-2015，中文在前按拼音、外文在后按字母。
2. 改稿顺序：1. 先改实证（变量、模型、主结果站得住）；2. 再改检验（稳健性与内生性）；3. 最后改文字（语言、结构、学校格式）。前一阶段站稳再进入下一阶段。
3. 每轮先请 AI 以审稿人身份提意见，再按意见修订；从 data/skills.json 的老师 Skills 清单中自行判断选用，并记录用了哪些。
4. 不改动已核定的数字与引用，除非重新跑过分析或重新核对过原文；结论强度与证据一致，不挑显著结果报告。
5. 原始数据（CSMAR、CNRDS）只存本机，不上传、不公开。

## 时间节点

- 2026-10-22（周四）第一次指导会议 ✓
- 2026-10-23（周五）初稿与中期汇报完成 ✓
- 2026-10-24（周六）排版、答辩稿完成，开始改稿 ← 当前
- 2026-11-11（周三）交初稿
- 2026-11-12（周四）第二次会议
- 2027-04-15（周四）定稿

## 完成清单

### 选题与设计
- [x] 确定选题与“说与做”主线（2026-10-23）  `topic`
- [x] 提出主效应、中介、调节三类假设（2026-10-23）：含一组竞争性假设 H1b-1 / H1b-2  `hypo`
- [x] 读顶刊范文与中英文文献：引用 41 篇；中文 17 篇，少于会上建议的 20 篇  `lit`
### 数据
- [x] 下载 CSMAR 数据（AI 词频、AI 投资、财务治理）  `data-csmar`
- [x] 下载 CNRDS 专利与 AI 专利数据  `data-cnrds`
- [x] 合并老师的控制变量包  `data-ctrl`
- [x] 样本筛选：52 563 / 45 992 个企业-年度  `sample`
### 测量检验
- [x] AI 词频测量不变性检验  `mi`
- [x] 构造校正指数并分解差异来源  `index`
### 实证分析
- [x] 基准回归  `base`
- [x] 机制检验（四条渠道全部报告）  `mech`
- [x] 调节效应与产权差异稳健性  `mod`
- [x] 异质性分析  `het`
- [x] 稳健性检验与样本选择检验  `rob`
- [x] 内生性与核心结论强弱对照：准自然实验已评估，暂不具备条件  `endo`
### 写作
- [x] 初稿全文（摘要至附录）（2026-10-23）  `draft`
- [x] 两轮审稿式自查（2026-10-23）  `selfreview`
- [x] 引用逐条核定（2026-10-23）  `cite`
### 排版
- [x] Word 排版版（学校格式）（2026-10-23）  `word`
- [x] LaTeX 版 PDF（2026-10-23）  `latex`
- [ ] 逐页人工校对版式：自动检查发现空白页与静态目录待改  `visual`
- [ ] 致谢  `ack`
- [ ] 作者声明手写签名、完成时间  `sign`
### 汇报与节点
- [x] 中期汇报与流程图（2026-10-23）  `midterm`
- [x] 答辩演示初版（18 页）（2026-10-23）  `defense`
- [x] 进展实时反馈页（以流程图为首页）（2026-10-24）  `progress`
### 改稿
- [x] 装第一批写作 Skills（22 项）（2026-10-24）：清单见 论文排版/写作Skills下载_交付文档_20261024.md  `skills-1`
- [ ] 先改实证  `rev-empirical`
- [ ] 再改检验（稳健性、内生性）  `rev-robust`
- [ ] 最后改文字  `rev-text`
### 汇报与节点
- [ ] 11 月 11 日提交初稿  `submit`
- [ ] 11 月 12 日第二次会议  `meeting2`
- [ ] 学校系统各节点按时提交  `system`
- [ ] 2027 年 4 月 15 日定稿  `final`
### 改稿
- [x] 装第二批写作 Skills（14 项）（2026-10-24）：用户已授权两批全部安装；两批合计36项，另3个共享资源目录。  `skills-2`

## 改稿记录（0/50）

- 尚未开始。

## 老师反馈

### 2026-10-24（周六）群内反馈
- 【进行中】交给 AI 提意见再修订，循环 50 轮
  - 回应：已建改稿记录，0 / 50 轮
- 【进行中】尽量多用 GitHub 写作 Skills
  - 回应：清单 105 项已录入，每轮记录所用 Skill
- 【已落实】始终遵守武汉学院格式
  - 回应：已写入 AI 固定规则
- 【进行中】先实证，再稳健性与内生性，最后文字
  - 回应：先改实证 → 再改检验 → 最后改文字
### 2026-10-22（周四）第一次会议
- 【进行中】中英文顶刊各 20 篇
  - 回应：引用 41 篇，中文 17 篇
- 【已落实】主效应、中介、调节三个假设
  - 回应：H1、H2、H3
- 【已落实】用老师的控制变量包
  - 回应：已用
- 【待老师确认】双向固定效应
  - 回应：已做，主模型选择待确认
- 【已落实】引用真实准确
  - 回应：逐条核定
- 【进行中】11 月 11 日前交初稿
  - 回应：初稿已成

## 想请老师确认的问题

1. 测量检验是否移一部分到附录？
2. 主模型用企业固定效应是否合适？
3. 产权差异的结论表述是否合适？
4. 参考文献引用方式有无额外要求？

## 协作记录（新在前）

- 2026-10-25 · Claude：研究框架图补充作用逻辑、H2理论依据与H3a/H3b两种预期；技术路线图试验区改为“试验区准实验讨论”
- 2026-10-25 · Claude：变量符号去下划线（SubInno/AI/AINoPat/Grant），公式改为单行 LaTeX、正文数学符号改行内公式；15号交接补公式与数学符号规范
- 2026-10-25 · Claude：按学校规范改年份区间与千分位；补齐附录一7张附表；15号交接改为插图更新与排版规范（排除大块留白、逐条核对文经管格式）
- 2026-10-25 · Claude：技术路线图与框架图定为配色版（与统计图同一配色）；写15号插图交接给GPT
- 2026-10-25 · Claude：插图增至21张（分省份、质量指标分组、渠道检验）；技术路线图与框架图改为科研样式黑白示意图；藏青标题改黑色加粗；14号交接同步图号
- 2026-10-25 · Claude：第二批审稿意见：选择性采纳（摘要、英文摘要、渠道与吸收能力解释、Oster 一句），不采纳“说买做升格为假设”；写 14 号交接给 GPT（D8/D9 补检验＋排版同步）
- 2026-10-25 · Claude：复审补 D7（质量指标不依赖 AI 专利）并修正“说买”表述、摘要字数与效应换算；按田轩、李宁文风规则润色全文（数字引用未变）；写好 13 号排版交接给 GPT
- 2026-10-25 · Claude：09/11 号核表后自跑 12 号诊断（创新惯性、双向格兰杰、说买做分项、IV 第二阶段、Oster 重算）；V6 草稿按新框架回填全部结果；按武汉学院格式完成 18 张插图
- 2026-10-25 · GPT：完成09全套实证65个模型，并补做11号S1-S8检验；修正Oster同样本比较、产权线性组合和SVG输出，结果待Claude审核
- 2026-10-25 · Claude：论文 V6 草稿：新主线的理论框架、三个假设和研究设计已写好，等全套实证结果回填数字。
- 2026-10-25 · GPT：完成08号G3调节稳健性补充检验：26个预定模型全部估计成功；AbsCap仅部分设定成立，SOE正向交互按门槛稳健；未改正文、未上传Cloudflare。
- 2026-10-25 · GPT：最小验证 V1 完成：G1、G2、G4通过，G3不通过；33个模型无错误，未改正文和旧数据，Cloudflare未上传
- 2026-10-25 · GPT：按原题目完成 Step3–Step6 研究设计重写：收窄 AI 应用测量、创新质量、智能制造识别与机制边界；未上传 Cloudflare、未改正文
- 2026-10-25 · GPT：题目不换：完成网页文献搜集 S1–S5，补齐AI应用测量、创新质量指标、中国外生冲击、机制边界和中文顶刊先行研究；未上传Cloudflare、未改正文和原始数据。
- 2026-10-25 · GPT：完成一区方向可行性测试：T1核验22条DOI；T2 shift-share未过F值与前趋势门槛；T3生成式AI岗位与专利时滞数据暂不足；T4完成150句双模型一致性试验，50句待人工复核。未改正文或原始数据。
- 2026-10-25 · GPT：已整理阶段交付：实证实现修复及测量披露全部待审核；明确排版副本尚未合入新结果，并汇总模板、技能、作者档案边界与接手顺序。本次不计正文改稿轮次。
- 2026-10-25 · GPT：writing-dna-skill已安装双端；26位作者分别建档，其中11位形成有来源证据的v1、15位缺正文待补。已记录阅读范围与未达成的成熟度标准；长期研究文献及衍生档案仅存本地，未改论文，不计改稿轮次。
- 2026-10-25 · GPT：完成文经管LaTeX模板与初稿排版副本，独立试用通过；仅更新版式，待审实证修复未合入，不计正文改稿轮次。
- 2026-10-24 · GPT：实证口径修复 R1：20条实施意见已修待审，假设对应表及测量披露事实卡已交付；原稿、原数据与原结果未改，不计正文改稿轮次，待Claude审核。
- 2026-10-24 · GPT：已汇总两轮评审核查，形成74条意见的接手顺序与关闭标准；未改正文、未重估，不计改稿轮次。
- 2026-10-24 · GPT：完成第二轮只读评审：使用gemini-4-argon-high、GPT 6.1 sol及6项方法Skill，核定新增7条意见，累计74条；原67条保留，未改正文与数据、未跑回归，不计50轮改稿。
- 2026-10-24 · GPT：完成改稿前置T1—T6：三份独立审稿输入经核验，67条意见（26必改），772项表格数值及星号核对，补6篇中文全文证据卡；只出报告，未改正文或重跑回归，不计改稿轮次。Claude的82项Skill标记已核实，补正103。
- 2026-10-24 · Claude：写好改稿前置任务交付：审稿意见池、数字一致性、识别策略菜单、中文文献补充、格式与文字预检交给 GPT。
- 2026-10-24 · GPT：老师清单写作 Skills 已装到 Claude：第一批 22 项、第二批 14 项及扩展，0 冲突。
- 2026-10-24 · GPT：新增安装46项写作Skills，累计82项；AMJ、SMJ、AMR、ASQ、Organization Science各12项已齐。申报书、CNS引用与3项PPT工具已装；102源码已核实，因自动推定外发授权未启用。安装清单与资源路径已核验，不计改稿轮次。
- 2026-10-24 · GPT：两批写作 Skills 共36项已安装至Claude，另补3个共享资源目录；完成逐项入口与文件哈希核验，留存安装清单。未执行仓库脚本，未修改论文正文，不计作改稿轮次。
- 2026-10-24 · Claude：写好写作 Skills 下载交付文档：第一批 22 项、第二批 14 项，统一装到 Claude 能用的位置并留安装清单。
- 2026-10-24 · Claude：进展页公开上线：charlie-yus.github.io/researchers，AI 总结按钮指向线上 CONTEXT.md。
- 2026-10-24 · 老师：群内反馈：初稿交给 AI 提意见再修订，循环 50 轮；先实证，再稳健性与内生性，最后文字；始终遵守武汉学院格式；附最新写作 Skills 清单。
- 2026-10-24 · Claude：搭建本进展页：进展、完成清单、老师反馈、工具与数据、给 AI 读的上下文文件。
- 2026-10-24 · GPT：安装 6 个科研写作 Skill、Zotero 与 Pandoc；论文材料去重并备份到私有云。
- 2026-10-23 · GPT：Word 排版版、LaTeX 版（32 页）和 18 页答辩演示完成。
- 2026-10-23 · GPT：引用逐条核定：中文对照全文，英文对照 DOI 元数据；无法核实的两条已删去。
- 2026-10-23 · Claude：初稿 v0 至 v5；两轮审稿式自查，修正统计口径、收窄结论；中期汇报与流程图。
- 2026-10-23 · Claude：完成机制、内生性与两轮复核回归（脚本 11–14）；主线定为 AI 的“说”与“做”。
- 2026-10-22 · 老师：第一次会议：实证论文七步法、三个假设、用控制变量包、11 月 11 日前交初稿。

## 工具与数据

- 数据：CSMAR 数字化转型指标库（年报人工智能关键词词频（“说”））；CSMAR 人工智能研究数据库（人工智能相关软硬件资产（“做”））；CSMAR 财务、治理、上市状态（控制变量、ST 识别、企业所在城市）；CNRDS 专利数据库（发明专利申请、授权、IPC 分类、被引）；CNRDS 人工智能专利库（人工智能发明专利申请）；老师的常用控制变量包（2000-2025 年控制变量与产权性质）；巨潮资讯网年报（公开年报，抽查关键词语境）；国家知识产权局 AI 技术分类（2023 年版，界定 AI 专利口径）；人工智能创新发展试验区名单（公开名单，评估准自然实验）；知网、Web of Science、EBSCO、Wiley（文献检索与全文下载）；Crossref、OpenAlex（题录核验）。原始数据只存本机和私有云备份，不公开、不转发。
- 模型：Claude Code（Claude Opus）：研究设计与假设、R / Python 实证代码、测量检验、审稿式自查、插图、中期汇报、本进展页；ChatGPT / Codex（GPT）：文献检索与引用核定、数据下载清洗、Word 与 LaTeX 排版、答辩演示、云备份、工具安装；本人：选题与取舍、校内网络下载数据、审阅每一稿、与老师沟通
- MCP：Claude 内置浏览器 / Claude in Chrome（Claude，网页查阅与核对）；scholar-search（Codex，文献检索）；zotero-research（Codex，读取 Zotero 文献库（库目前为空））；cloudflare-thesis（Codex，论文私有云备份与回读核对）；r-mcptools（Codex，调用 R）；computer-use（Codex，操作桌面应用）
- Skill：老师清单写作 Skills（Claude，已装）；docx（Claude，用过）；academic-search（Codex，已装）；academic-research-suite（Codex，已装）；snl-paper-writing（Codex，已装）；paper-writing-tips（Codex，已装）；latex-to-word-workflow（Codex，已装）；zotero-cli（Codex，已装）；nature-* 系列（Codex，已装）；Supervisor-Skills（Codex，已装）；写作 Skills（82项）（Claude，已装）
- 软件：R（data.table、fixest、lavaan、semTools、sirt）；Python（pandas、numpy；数据清洗与插图）；XeLaTeX、Pandoc（LaTeX 版论文与答辩演示、格式转换）；Pages、LibreOffice（导出 PDF、检查 Word 版式）；Zotero（文献管理（已装，库为空））；Citation Checker（引用题录核验）；PyMuPDF、Poppler、MinerU（PDF 转文本与版式检查）；Playwright + Chrome（SVG 插图转高清 PNG）；Cloudflare R2（论文材料私有备份）；Idea Gatekeeper（研究扩展线索（只读浏览））

## 老师的写作 Skills 清单（105 项，本机已装 89 项）

来源：王鸿鑫老师群内分享《论文与申报书写作Skills清单》2026-10-24版。整包下载：
- Yuan1z0825/nature-skills：https://github.com/Yuan1z0825/nature-skills/archive/refs/heads/main.zip
- AIScientists-Dev/academic-humanizer：https://github.com/AIScientists-Dev/academic-humanizer/archive/refs/heads/main.zip
- blader/humanizer：https://github.com/blader/humanizer/archive/refs/heads/main.zip
- Kiterlin/anti-defensive-writing：https://github.com/Kiterlin/anti-defensive-writing/archive/refs/heads/main.zip
- njzjz/nsfc-agent-skills：https://github.com/njzjz/nsfc-agent-skills/archive/refs/heads/master.zip
- brycewang-stanford/Awesome-Journal-Skills：https://github.com/brycewang-stanford/Awesome-Journal-Skills/archive/refs/heads/main.zip

| 编号 | 类别 | 名称 | 用途 | 建议 | 已装 |
| --- | --- | --- | --- | --- | --- |
| 010 | SMJ | [smj-workflow](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Strategic-Management-Journal-Skills/skills/smj-workflow/SKILL.md) | 安排从选题到返修的任务顺序 | 需适配 | 是 |
| 031 | SMJ | [smj-topic-selection](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Strategic-Management-Journal-Skills/skills/smj-topic-selection/SKILL.md) | 聚焦研究问题与期刊适配 | 按需使用 | 是 |
| 032 | SMJ | [smj-theory-development](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Strategic-Management-Journal-Skills/skills/smj-theory-development/SKILL.md) | 界定构念，展开机制与假设 | 优先参考 | 是 |
| 033 | SMJ | [smj-literature-positioning](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Strategic-Management-Journal-Skills/skills/smj-literature-positioning/SKILL.md) | 定位最接近文献和研究缺口 | 优先参考 | 是 |
| 034 | SMJ | [smj-methods](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Strategic-Management-Journal-Skills/skills/smj-methods/SKILL.md) | 检查研究设计与论断是否匹配 | 按需使用 | 是 |
| 035 | SMJ | [smj-data-analysis](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Strategic-Management-Journal-Skills/skills/smj-data-analysis/SKILL.md) | 组织分析、证据与替代解释 | 按需使用 | 是 |
| 036 | SMJ | [smj-contribution-framing](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Strategic-Management-Journal-Skills/skills/smj-contribution-framing/SKILL.md) | 明确理论增量与贡献边界 | 优先参考 | 是 |
| 037 | SMJ | [smj-tables-figures](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Strategic-Management-Journal-Skills/skills/smj-tables-figures/SKILL.md) | 组织表格、图件和结果展示 | 按需使用 | 是 |
| 038 | SMJ | [smj-writing-style](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Strategic-Management-Journal-Skills/skills/smj-writing-style/SKILL.md) | 改善句段结构、术语和行文 | 优先参考 | 是 |
| 039 | SMJ | [smj-submission](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Strategic-Management-Journal-Skills/skills/smj-submission/SKILL.md) | 核对投稿材料与准备事项 | 按需使用 | 是 |
| 040 | SMJ | [smj-review-process](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Strategic-Management-Journal-Skills/skills/smj-review-process/SKILL.md) | 组织审稿预判与修改任务 | 按需使用 | 是 |
| 041 | SMJ | [smj-rebuttal](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Strategic-Management-Journal-Skills/skills/smj-rebuttal/SKILL.md) | 逐条回应意见并对应稿件修改 | 按需使用 | 是 |
| 009 | AMJ | [amj-workflow](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Academy-of-Management-Journal-Skills/skills/amj-workflow/SKILL.md) | 安排从选题到返修的任务顺序 | 需适配 | 是 |
| 042 | AMJ | [amj-topic-selection](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Academy-of-Management-Journal-Skills/skills/amj-topic-selection/SKILL.md) | 聚焦研究问题与期刊适配 | 按需使用 | 是 |
| 043 | AMJ | [amj-theory-development](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Academy-of-Management-Journal-Skills/skills/amj-theory-development/SKILL.md) | 界定构念，展开机制与假设 | 优先参考 | 是 |
| 044 | AMJ | [amj-literature-positioning](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Academy-of-Management-Journal-Skills/skills/amj-literature-positioning/SKILL.md) | 定位最接近文献和研究缺口 | 优先参考 | 是 |
| 045 | AMJ | [amj-methods](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Academy-of-Management-Journal-Skills/skills/amj-methods/SKILL.md) | 检查研究设计与论断是否匹配 | 按需使用 | 是 |
| 046 | AMJ | [amj-data-analysis](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Academy-of-Management-Journal-Skills/skills/amj-data-analysis/SKILL.md) | 组织分析、证据与替代解释 | 按需使用 | 是 |
| 047 | AMJ | [amj-contribution-framing](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Academy-of-Management-Journal-Skills/skills/amj-contribution-framing/SKILL.md) | 明确理论增量与贡献边界 | 优先参考 | 是 |
| 048 | AMJ | [amj-tables-figures](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Academy-of-Management-Journal-Skills/skills/amj-tables-figures/SKILL.md) | 组织表格、图件和结果展示 | 按需使用 | 是 |
| 049 | AMJ | [amj-writing-style](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Academy-of-Management-Journal-Skills/skills/amj-writing-style/SKILL.md) | 改善句段结构、术语和行文 | 优先参考 | 是 |
| 050 | AMJ | [amj-submission](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Academy-of-Management-Journal-Skills/skills/amj-submission/SKILL.md) | 核对投稿材料与准备事项 | 按需使用 | 是 |
| 051 | AMJ | [amj-review-process](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Academy-of-Management-Journal-Skills/skills/amj-review-process/SKILL.md) | 组织审稿预判与修改任务 | 按需使用 | 是 |
| 052 | AMJ | [amj-rebuttal](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Academy-of-Management-Journal-Skills/skills/amj-rebuttal/SKILL.md) | 逐条回应意见并对应稿件修改 | 按需使用 | 是 |
| 053 | AMR | [amr-workflow](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Academy-of-Management-Review-Skills/skills/amr-workflow/SKILL.md) | 安排从选题到返修的任务顺序 | 需适配 | 是 |
| 054 | AMR | [amr-topic-selection](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Academy-of-Management-Review-Skills/skills/amr-topic-selection/SKILL.md) | 聚焦研究问题与期刊适配 | 按需使用 | 是 |
| 055 | AMR | [amr-theory-development](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Academy-of-Management-Review-Skills/skills/amr-theory-development/SKILL.md) | 界定构念，展开机制与假设 | 优先参考 | 是 |
| 056 | AMR | [amr-literature-positioning](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Academy-of-Management-Review-Skills/skills/amr-literature-positioning/SKILL.md) | 定位最接近文献和研究缺口 | 优先参考 | 是 |
| 057 | AMR | [amr-methods](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Academy-of-Management-Review-Skills/skills/amr-methods/SKILL.md) | 检查研究设计与论断是否匹配 | 按需使用 | 是 |
| 058 | AMR | [amr-data-analysis](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Academy-of-Management-Review-Skills/skills/amr-data-analysis/SKILL.md) | 检查论证逻辑、反事实与替代解释 | 按需使用 | 是 |
| 059 | AMR | [amr-contribution-framing](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Academy-of-Management-Review-Skills/skills/amr-contribution-framing/SKILL.md) | 明确理论增量与贡献边界 | 优先参考 | 是 |
| 060 | AMR | [amr-tables-figures](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Academy-of-Management-Review-Skills/skills/amr-tables-figures/SKILL.md) | 组织表格、图件和结果展示 | 按需使用 | 是 |
| 061 | AMR | [amr-writing-style](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Academy-of-Management-Review-Skills/skills/amr-writing-style/SKILL.md) | 改善句段结构、术语和行文 | 优先参考 | 是 |
| 062 | AMR | [amr-submission](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Academy-of-Management-Review-Skills/skills/amr-submission/SKILL.md) | 核对投稿材料与准备事项 | 按需使用 | 是 |
| 063 | AMR | [amr-review-process](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Academy-of-Management-Review-Skills/skills/amr-review-process/SKILL.md) | 组织审稿预判与修改任务 | 按需使用 | 是 |
| 064 | AMR | [amr-rebuttal](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Academy-of-Management-Review-Skills/skills/amr-rebuttal/SKILL.md) | 逐条回应意见并对应稿件修改 | 按需使用 | 是 |
| 065 | ASQ | [asq-workflow](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Administrative-Science-Quarterly-Skills/skills/asq-workflow/SKILL.md) | 安排从选题到返修的任务顺序 | 需适配 | 是 |
| 066 | ASQ | [asq-topic-selection](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Administrative-Science-Quarterly-Skills/skills/asq-topic-selection/SKILL.md) | 聚焦研究问题与期刊适配 | 按需使用 | 是 |
| 067 | ASQ | [asq-theory-development](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Administrative-Science-Quarterly-Skills/skills/asq-theory-development/SKILL.md) | 界定构念，展开机制与假设 | 优先参考 | 是 |
| 068 | ASQ | [asq-literature-positioning](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Administrative-Science-Quarterly-Skills/skills/asq-literature-positioning/SKILL.md) | 定位最接近文献和研究缺口 | 优先参考 | 是 |
| 069 | ASQ | [asq-methods](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Administrative-Science-Quarterly-Skills/skills/asq-methods/SKILL.md) | 检查研究设计与论断是否匹配 | 按需使用 | 是 |
| 070 | ASQ | [asq-data-analysis](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Administrative-Science-Quarterly-Skills/skills/asq-data-analysis/SKILL.md) | 组织分析、证据与替代解释 | 按需使用 | 是 |
| 071 | ASQ | [asq-contribution-framing](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Administrative-Science-Quarterly-Skills/skills/asq-contribution-framing/SKILL.md) | 明确理论增量与贡献边界 | 优先参考 | 是 |
| 072 | ASQ | [asq-tables-figures](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Administrative-Science-Quarterly-Skills/skills/asq-tables-figures/SKILL.md) | 组织表格、图件和结果展示 | 按需使用 | 是 |
| 073 | ASQ | [asq-writing-style](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Administrative-Science-Quarterly-Skills/skills/asq-writing-style/SKILL.md) | 改善句段结构、术语和行文 | 优先参考 | 是 |
| 074 | ASQ | [asq-submission](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Administrative-Science-Quarterly-Skills/skills/asq-submission/SKILL.md) | 核对投稿材料与准备事项 | 按需使用 | 是 |
| 075 | ASQ | [asq-review-process](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Administrative-Science-Quarterly-Skills/skills/asq-review-process/SKILL.md) | 组织审稿预判与修改任务 | 按需使用 | 是 |
| 076 | ASQ | [asq-rebuttal](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Administrative-Science-Quarterly-Skills/skills/asq-rebuttal/SKILL.md) | 逐条回应意见并对应稿件修改 | 按需使用 | 是 |
| 077 | JIBS | [jibs-workflow](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Journal-of-International-Business-Studies-Skills/skills/jibs-workflow/SKILL.md) | 安排从选题到返修的任务顺序 | 需适配 |  |
| 078 | JIBS | [jibs-topic-selection](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Journal-of-International-Business-Studies-Skills/skills/jibs-topic-selection/SKILL.md) | 聚焦研究问题与期刊适配 | 按需使用 |  |
| 079 | JIBS | [jibs-theory-development](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Journal-of-International-Business-Studies-Skills/skills/jibs-theory-development/SKILL.md) | 界定构念，展开机制与假设 | 优先参考 |  |
| 080 | JIBS | [jibs-literature-positioning](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Journal-of-International-Business-Studies-Skills/skills/jibs-literature-positioning/SKILL.md) | 定位最接近文献和研究缺口 | 优先参考 |  |
| 081 | JIBS | [jibs-methods](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Journal-of-International-Business-Studies-Skills/skills/jibs-methods/SKILL.md) | 检查研究设计与论断是否匹配 | 按需使用 |  |
| 082 | JIBS | [jibs-data-analysis](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Journal-of-International-Business-Studies-Skills/skills/jibs-data-analysis/SKILL.md) | 组织分析、证据与替代解释 | 按需使用 |  |
| 083 | JIBS | [jibs-contribution-framing](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Journal-of-International-Business-Studies-Skills/skills/jibs-contribution-framing/SKILL.md) | 明确理论增量与贡献边界 | 优先参考 |  |
| 084 | JIBS | [jibs-tables-figures](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Journal-of-International-Business-Studies-Skills/skills/jibs-tables-figures/SKILL.md) | 组织表格、图件和结果展示 | 按需使用 |  |
| 085 | JIBS | [jibs-writing-style](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Journal-of-International-Business-Studies-Skills/skills/jibs-writing-style/SKILL.md) | 改善句段结构、术语和行文 | 优先参考 |  |
| 086 | JIBS | [jibs-submission](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Journal-of-International-Business-Studies-Skills/skills/jibs-submission/SKILL.md) | 核对投稿材料与准备事项 | 按需使用 |  |
| 087 | JIBS | [jibs-review-process](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Journal-of-International-Business-Studies-Skills/skills/jibs-review-process/SKILL.md) | 组织审稿预判与修改任务 | 按需使用 |  |
| 088 | JIBS | [jibs-rebuttal](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Journal-of-International-Business-Studies-Skills/skills/jibs-rebuttal/SKILL.md) | 逐条回应意见并对应稿件修改 | 按需使用 |  |
| 089 | OS | [orgsci-workflow](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Organization-Science-Skills/skills/orgsci-workflow/SKILL.md) | 安排从选题到返修的任务顺序 | 需适配 | 是 |
| 090 | OS | [orgsci-topic-selection](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Organization-Science-Skills/skills/orgsci-topic-selection/SKILL.md) | 聚焦研究问题与期刊适配 | 按需使用 | 是 |
| 091 | OS | [orgsci-theory-development](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Organization-Science-Skills/skills/orgsci-theory-development/SKILL.md) | 界定构念，展开机制与假设 | 优先参考 | 是 |
| 092 | OS | [orgsci-literature-positioning](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Organization-Science-Skills/skills/orgsci-literature-positioning/SKILL.md) | 定位最接近文献和研究缺口 | 优先参考 | 是 |
| 093 | OS | [orgsci-methods](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Organization-Science-Skills/skills/orgsci-methods/SKILL.md) | 检查研究设计与论断是否匹配 | 按需使用 | 是 |
| 094 | OS | [orgsci-data-analysis](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Organization-Science-Skills/skills/orgsci-data-analysis/SKILL.md) | 组织分析、证据与替代解释 | 按需使用 | 是 |
| 095 | OS | [orgsci-contribution-framing](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Organization-Science-Skills/skills/orgsci-contribution-framing/SKILL.md) | 明确理论增量与贡献边界 | 优先参考 | 是 |
| 096 | OS | [orgsci-tables-figures](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Organization-Science-Skills/skills/orgsci-tables-figures/SKILL.md) | 组织表格、图件和结果展示 | 按需使用 | 是 |
| 097 | OS | [orgsci-writing-style](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Organization-Science-Skills/skills/orgsci-writing-style/SKILL.md) | 改善句段结构、术语和行文 | 优先参考 | 是 |
| 098 | OS | [orgsci-submission](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Organization-Science-Skills/skills/orgsci-submission/SKILL.md) | 核对投稿材料与准备事项 | 按需使用 | 是 |
| 099 | OS | [orgsci-review-process](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Organization-Science-Skills/skills/orgsci-review-process/SKILL.md) | 组织审稿预判与修改任务 | 按需使用 | 是 |
| 100 | OS | [orgsci-rebuttal](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/Organization-Science-Skills/skills/orgsci-rebuttal/SKILL.md) | 逐条回应意见并对应稿件修改 | 按需使用 | 是 |
| 003 | 申报书 | [nsfc-write](https://github.com/njzjz/nsfc-agent-skills/blob/master/nsfc-write/SKILL.md) | 梳理立项依据、研究内容与研究方案 | 需适配 | 是 |
| 005 | 申报书 | [researchwrite](https://github.com/Yuan1z0825/nature-skills/blob/main/skills/nature-proposal-writer/SKILL.md) | 用事实台账与证据组织申请书论证 | 需适配 | 是 |
| 027 | 申报书 | [nsfc-figure](https://github.com/njzjz/nsfc-agent-skills/blob/master/nsfc-figure/SKILL.md) | 制作可编辑框架图与技术路线图 | 按需使用 | 是 |
| 028 | 申报书 | [nsfc-literature](https://github.com/njzjz/nsfc-agent-skills/blob/master/nsfc-literature/SKILL.md) | 补查候选文献与初步引用元数据 | 按需使用 | 是 |
| 029 | 申报书 | [nsfc-policy](https://github.com/njzjz/nsfc-agent-skills/blob/master/nsfc-policy/SKILL.md) | 建立年度政策与模板核验事项 | 限定用途 | 是 |
| 004 | 论文通用 | [nature-social-science](https://github.com/Yuan1z0825/nature-skills/blob/main/skills/nature-social-science/SKILL.md) | 梳理问题、构念、机制与证据路线 | 优先参考 | 是 |
| 013 | 论文通用 | [nature-writing](https://github.com/Yuan1z0825/nature-skills/blob/main/skills/nature-writing/SKILL.md) | 组织论文论证、章节与初投材料 | 需适配 | 是 |
| 014 | 论文通用 | [nature-reviewer](https://github.com/Yuan1z0825/nature-skills/blob/main/skills/nature-reviewer/SKILL.md) | 模拟审稿并核查稿件内部矛盾 | 需适配 | 是 |
| 021 | 论文通用 | [nature-response](https://github.com/Yuan1z0825/nature-skills/blob/main/skills/nature-response/SKILL.md) | 对应审稿意见、修改位置与返修材料 | 按需使用 | 是 |
| 030 | 论文通用 | [journal-of-international-business-studies](https://github.com/brycewang-stanford/Awesome-Journal-Skills/blob/main/English-SocialScience-Journal-Skills/skills/journal-of-international-business-studies/SKILL.md) | 检查国际商务机制、贡献与跨国测量 | 需适配 |  |
| 006 | 文献工作 | [nature-academic-search](https://github.com/Yuan1z0825/nature-skills/blob/main/skills/nature-academic-search/SKILL.md) | 多源检索文献并整理引用元数据 | 优先参考 | 是 |
| 007 | 文献工作 | [nature-ref-verifier](https://github.com/Yuan1z0825/nature-skills/blob/main/skills/nature-ref-verifier/SKILL.md) | 核对作者、年份、题名、页码和DOI | 优先参考 | 是 |
| 008 | 文献工作 | [nature-reader](https://github.com/Yuan1z0825/nature-skills/blob/main/skills/nature-reader/SKILL.md) | 阅读原文并核对具体观点的支持证据 | 优先参考 | 是 |
| 015 | 文献工作 | [nature-citation](https://github.com/Yuan1z0825/nature-skills/blob/main/skills/nature-citation/SKILL.md) | 匹配Nature、Science、Cell范围文献 | 限定用途 | 是 |
| 018 | 文献工作 | [nature-paper-xray](https://github.com/Yuan1z0825/nature-skills/blob/main/skills/nature-paper-xray/SKILL.md) | 还原研究起点、设计、推理与证据边界 | 按需使用 | 是 |
| 019 | 文献工作 | [nature-paper-trans](https://github.com/Yuan1z0825/nature-skills/blob/main/skills/nature-paper-trans/SKILL.md) | 生成保留原版布局的中文图片型PDF | 按需使用 |  |
| 020 | 文献工作 | [nature-paper-card](https://github.com/Yuan1z0825/nature-skills/blob/main/skills/nature-paper-card/SKILL.md) | 整理主张、方法、结果和可检验想法 | 按需使用 | 是 |
| 024 | 文献工作 | [nature-downloader](https://github.com/Yuan1z0825/nature-skills/blob/main/skills/nature-downloader/SKILL.md) | 从开放或有权访问的入口获取全文 | 按需使用 | 是 |
| 025 | 文献工作 | [nature-literature-pipeline](https://github.com/Yuan1z0825/nature-skills/blob/main/skills/nature-literature-pipeline/SKILL.md) | 持续发现、精读与归档新文献 | 按需使用 | 是 |
| 001 | 表达润色 | [academic-humanizer](https://github.com/AIScientists-Dev/academic-humanizer/blob/main/SKILL.md) | 校准论断强度，保留证据与作者语气 | 优先参考 | 是 |
| 002 | 表达润色 | [anti-defensive-writing](https://github.com/Kiterlin/anti-defensive-writing/blob/main/SKILL.md) | 删除防御性措辞、空泛让步与重复解释 | 优先参考 | 是 |
| 012 | 表达润色 | [nature-polishing](https://github.com/Yuan1z0825/nature-skills/blob/main/skills/nature-polishing/SKILL.md) | 润色、翻译和精简已有学术文本 | 优先参考 | 是 |
| 026 | 表达润色 | [humanizer](https://github.com/blader/humanizer/blob/main/SKILL.md) | 检查套话、机械对比和重复收尾 | 按需使用 | 是 |
| 011 | 方法与图件 | [nature-figure](https://github.com/Yuan1z0825/nature-skills/blob/main/skills/nature-figure/SKILL.md) | 制作统计图、交互效应图与理论框架图 | 按需使用 | 是 |
| 016 | 方法与图件 | [nature-data](https://github.com/Yuan1z0825/nature-skills/blob/main/skills/nature-data/SKILL.md) | 编写数据和代码可用性说明 | 按需使用 | 是 |
| 017 | 方法与图件 | [nature-statistics](https://github.com/Yuan1z0825/nature-skills/blob/main/skills/nature-statistics/SKILL.md) | 审核样本、效应量、区间与数值一致性 | 需适配 | 是 |
| 022 | 方法与图件 | [nature-paper2ppt](https://github.com/Yuan1z0825/nature-skills/blob/main/skills/nature-paper2ppt/SKILL.md) | 从论文或笔记生成中文汇报PPT与讲稿 | 按需使用 | 是 |
| 023 | 方法与图件 | [nature-image2ppt](https://github.com/Yuan1z0825/nature-skills/blob/main/skills/nature-image2ppt/SKILL.md) | 将图片型幻灯片重建为可编辑对象 | 按需使用 | 是 |
| 101 | 文献工作 | [literature-downloader-skill](https://github.com/Lucaswangzcx/literature-downloader-skill/blob/main/SKILL.md) | 检索文献、整理题录及获取可访问全文 | 按需使用 | 是 |
| 102 | 方法与图件 | [Image-to-editable-PPT](https://github.com/ningzimu/image-to-editable-ppt-skill/blob/main/skills/image-to-editable-ppt/SKILL.md) | 将图片、PDF及图片型PPT重建为可编辑对象 | 来源待确认 |  |
| 103 | 方法与图件 | [literature-report-ppt-builder](https://github.com/fangyuanopus/literature-report-ppt-builder/blob/main/skills/academic-slide-pragmatic-fallback/SKILL.md) | 依据论文与补充材料制作中文文献汇报PPT | 按需使用 | 是 |
| 104 | 综合工具包 | [academic-research-skills-codex](https://github.com/Imbad0202/academic-research-skills-codex/blob/main/skills/academic-research-suite/SKILL.md) | 统筹文献研究、论文写作、评审与修订 | 按需使用 | 是 |
| 105 | 综合工具包 | codex-claude-academic-skills | 整合学术写作、Word／PPT及科研计算 | 按需使用 |  |

## 流程图八个阶段

- ① 选题定位（10 月 21 日，协作）：转向实证，主线定为“说与做”；[卡] 选题常见，怎么出新意；[卡] 只能用二手数据；[时] 主线改了三次；[人] 取舍由本人拍板
- ② 文献（10 月 21–23 日，AI 为主 · 人工把关）：41 篇进入参考文献，逐条核定；[源] 知网、期刊官网、DOI；[卡] 检索跑题、年份有误；[时] 题录核实与全文核对；[人] 平台登录、全文下载
- ③ 数据获取（10 月 22–23 日，人工为主）：6 类数据，部分库学校无权限；[源] CSMAR、CNRDS；[源] 年报 2,505 份；[源] 老师的控制变量包；[卡] 部分库学校无权限
- ④ 数据清洗（10 月 22–23 日，AI）：合并为面板，52,563 个企业-年度；[卡] ST 状态逐年重建；[卡] 专利覆盖低，改用 CNRDS；[时] 年报下载 795 条失败；[卡] 磁盘空间不足
- ⑤ 测量检验（10 月 22 日，AI）：检验词频是否跨组可比，构造校正指数；[卡] 打分造成假跳变，已改；[卡] 统计软件不显示中文；[？] 篇幅是否过长
- ⑥ 实证分析（10 月 23 日，AI 建模 · 人工定方向）：说与做同进模型；产权差异最稳健；[卡] 被引按引用年统计；[卡] 专利口径变，开篇重写；[时] 机制换过一次；[？] 主模型用哪种固定效应
- ⑦ 自查修改（10 月 23 日，协作）：按审稿标准自查两轮，收窄结论；[卡] 正文与表两处不一致；[卡] “高估”来源重新分解；[时] 每轮补跑回归、改正文；[人] 逐条判断是否采纳
- ⑧ 写作排版（10 月 23–24 日，AI 写作 · 人工收尾，进行中）：两版排版完成，剩致谢与签名；[源] 学校撰写规范；[待] 致谢、完成时间；[人] 声明签名、逐页通读；[？] 引用格式有无额外要求

## 成果（网页“成果”页，输入密码后下载）

- 论文初稿（PDF，32 页）
- 可编辑初稿（Word，可编辑）
- 答辩演示（PDF，18 页）
- 中期汇报（PDF，12 页）
- 论文流程图（PDF，1 页）

## 网址

- 进展页：https://charlie-yus.github.io/researchers/
- 本文件：https://charlie-yus.github.io/researchers/CONTEXT.md
- 数据源：https://charlie-yus.github.io/researchers/data/status.json
- 个人主页：https://charlie-yus.github.io/
