export interface WorkItem {
  companyZh: string;
  companyEn: string;
  badgeText: string;
  badgeGradient: string;
  badgeBorder: string;
  badgeColor: string;
  roleZh: string;
  roleEn: string;
  periodZh: string;
  periodEn: string;
  locationZh: string;
  locationEn: string;
  bulletsZh: string[];
  bulletsEn: string[];
}

export interface EduItem {
  schoolZh: string;
  schoolEn: string;
  badgeText: string;
  badgeGradient: string;
  badgeBorder: string;
  badgeColor: string;
  degreeZh: string;
  degreeEn: string;
  period: string;
}

export interface SkillGroup {
  categoryZh: string;
  categoryEn: string;
  itemsZh: string[];
  itemsEn: string[];
}

export interface ProjectItem {
  slug: string;
  name: string;
  taglineZh: string;
  taglineEn: string;
  period: string;
  stackZh: string[];
  stackEn: string[];
  metricBadgeZh: string;
  metricBadgeEn: string;
  repoUrl: string;
  demoUrl: string;
  gradient: string;
  previewZh: string;
  previewEn: string;
  summaryZh: string;
  summaryEn: string;
  highlightsZh: string[];
  highlightsEn: string[];
}

export interface EssayItem {
  slug: string;
  kindZh: string;
  kindEn: string;
  date: string;
  readTimeZh: string;
  readTimeEn: string;
  titleZh: string;
  titleEn: string;
  summaryZh: string;
  summaryEn: string;
  paragraphsZh: { heading?: string; body?: string; code?: string; bullets?: string[] }[];
  paragraphsEn: { heading?: string; body?: string; code?: string; bullets?: string[] }[];
}

export const PROFILE = {
  nameZh: '杜雷',
  nameEn: 'Du Lei',
  initials: 'DL',
  genderAgeZh: '男 · 28岁（1998）',
  expYearsZh: '8年测试经验',
  headlineZh: '高级测试工程师 · AI 质量工程与多端测试架构',
  headlineEn: 'Senior QA Engineer · AI Quality Engineering & Multi-Platform Test Architecture',
  heroBioZh:
    '8 年软件测试经验，深耕移动端（Android 学习平板 / App）、Web 后台与服务端接口全链路质量保障，专注从 0 到 1 质量体系搭建、AI 辅助测试提效与大模型业务准出评测。',
  heroBioEn:
    '8+ years in software quality assurance across mobile/tablet clients, web consoles, and backend APIs—focused on building 0-to-1 quality systems, AI-assisted testing workflows, and LLM feature release gates.',
  aboutZh:
    '我是一个信奉长期主义的行动派。相比追逐热闹的风口，我更看重时间的复利与持续进化的斜率——人生没有白走的路，只要保持向内审视、向外学习，任何时候开始重塑自己都不晚。在处事上，我偏爱简单、坦诚与确定性，反感浮夸的口号和自我感动式的忙碌；认准的事就沉下心去做，做到“凡事有交代，件件有着落”。面对快速变化的时代，我相信最好的应对不是焦虑，而是保持好奇、持续动手——把脑海里的想法一件件变成真实可触的作品。',
  aboutEn:
    'I am a long-termist with a bias for action. Rather than chasing the latest hype, I care about the compounding of time and the slope of steady growth—no road walked is ever wasted, and as long as you keep reflecting inward and learning outward, it is never too late to reinvent yourself. In how I work, I value simplicity, candor, and certainty, and I have little patience for empty slogans or busyness for its own sake; once I commit to something, I settle in and see it through, making sure every task has a clear outcome. In a fast-changing era, I believe the best response is not anxiety but curiosity and steady making—turning the ideas in my head, one by one, into things that are real and tangible.',
  locationZh: '中国 · 北京',
  locationEn: 'Beijing, China',
  email: 'a1437699690@163.com',
  phone: '188-1000-7664',
  githubUrl: 'https://github.com/1dulei',
  siteUrl: 'https://1dulei.github.io',
  siteHost: '1dulei.github.io',
  githubHandle: '@1dulei',
  avatarPath: '/avatar.jpg?v=3',
  hasCustomAvatar: true,
  resumePdfZh: '/杜雷-高级测试工程师-简历.pdf',
  resumePdfEn: '/Du_Lei_Senior_QA_Resume.pdf',
};

export const HERO_TAGS: { zh: string; en: string }[] = [
  { zh: '从 0 到 1 质量体系', en: '0-to-1 Quality Systems' },
  { zh: '测试左移', en: 'Shift-Left Testing' },
  { zh: '准入准出质量门禁', en: 'Release Quality Gates' },
  { zh: 'AI 辅助测试提效', en: 'AI-Assisted Testing' },
  { zh: '大模型业务评测', en: 'LLM Feature Evaluation' },
  { zh: '长期主义 · 持续学习', en: 'Long-Term Thinking' },
];

export const WORK_EXPERIENCE: WorkItem[] = [
  {
    companyZh: '红本科技',
    companyEn: 'Hongben Technology',
    badgeText: 'HB',
    badgeGradient: 'linear-gradient(145deg, #27272a 0%, #09090b 100%)',
    badgeBorder: '#3f3f46',
    badgeColor: '#fafafa',
    roleZh: '高级测试工程师 / 多端质量与 AI 评测负责人',
    roleEn: 'Senior QA Engineer · Multi-Platform Quality & AI Evaluation Lead',
    periodZh: '2022.05 — 至今',
    periodEn: 'May 2022 — Present',
    locationZh: '北京',
    locationEn: 'Beijing',
    bulletsZh: [
      '从 0 到 1 搭建四端全流程质量体系：独立负责 Android 智能学习平板端、学管与运管双 Web 管理后台及服务端质量交付，制定提测准入标准、分级核心回归基线与上线准出机制，支撑百余次版本迭代平稳上线，显著收敛线上高危缺陷逃逸。',
      '自研 AI 问答与生图功能专项验收：负责公司自研教育问答助手及 AI 生图业务的上线把关，围绕课本知识点准确性（防超纲编造）、少儿内容安全红线、生图敏感词过滤与防越狱套话设计专项回归用例，阻断提示词调整引发的隐蔽退化。',
      '测试左移与提测前风险走读：将质量介入前移至需求评审与提测环节，提前梳理状态流转、角色权限与禁用文案边界，结合代码分支 diff 核查在进测试环境前拦截免鉴权遗留、并发重复扣减及学习平板离线新进度被旧数据覆盖等高危隐患，显著减少提测返工与回归耗时。',
      '核心链路自动化巡检与接口抓包核查：针对前端样式变动导致的脚本失效与传统 UI 断言盲区，改用语义定位优先的浏览器巡检并配合抓包核查接口响应与本地存储，捕获列表接口泄露敏感字段及 HTTP 200 掩盖业务报错等隐患。',
    ],
    bulletsEn: [
      '0-to-1 Multi-Platform Quality System: Independently owned QA governance across Android learning tablets, dual Vue management consoles, and backend services—establishing staging entry criteria, tiered regression baselines, and release sign-off checklists across 100+ iterative releases.',
      'In-House AI Feature QA: Led release verification for the company\'s educational Q&A assistant and AI image-generation features—testing textbook factual accuracy, child-safety compliance, unsafe prompt filtering, and prompt-injection defenses across prompt revisions.',
      'Shift-Left Risk Reviews: Moved QA engagement upstream into PRD reviews and pre-staging diff walkthroughs, catching leftover auth bypasses, duplicate deduction risks, and tablet offline study-progress overwrites before code reached staging.',
      'Pragmatic Regression & API Inspection: Replaced high-churn CSS-selector scripts with semantic-locator browser checks paired with API payload and storage inspection, catching leaked sensitive fields and HTTP-200 masked business errors.',
    ],
  },
  {
    companyZh: '龙湖集团',
    companyEn: 'Longfor Group (HKEX: 0960)',
    badgeText: 'LH',
    badgeGradient: 'linear-gradient(145deg, #1d4ed8 0%, #1e3a8a 100%)',
    badgeBorder: '#3b82f6',
    badgeColor: '#eff6ff',
    roleZh: '测试工程师',
    roleEn: 'QA Engineer',
    periodZh: '2020.04 — 2022.05',
    periodEn: 'Apr 2020 — May 2022',
    locationZh: '北京',
    locationEn: 'Beijing',
    bulletsZh: [
      '全流程迭代质量保障：负责集团业务线 Web 管理端与移动端 App 日常版本测试交付，深度参与需求评审、测试策略与计划制定、测试用例设计评审及版本上线准出把控。',
      '接口联调与数据一致性核查：针对核心业务流转开展前后端接口测试（覆盖正向流、边界值、角色权限越权与异常容错），结合 Charles 抓包改包与 MySQL 数据库落库状态核查，快速精准定位前后端缺陷归属。',
      '回归基线维护与线上复盘：组织跨端集成回归测试与线上反馈问题跟进复盘，持续补充核心业务回归基线用例，保障各阶段版本平稳按期上线。',
    ],
    bulletsEn: [
      'Full-Lifecycle Release QA: Owned iterative testing across enterprise Web consoles and mobile apps, covering requirement reviews, test plan design, case execution, and release sign-off.',
      'API & Database Verification: Conducted thorough RESTful API testing (boundary conditions, role permissions, error handling) paired with Charles packet inspection and MySQL data-consistency checks for rapid defect triage.',
      'Regression Governance: Coordinated cross-platform integration regression and production defect postmortems to continuously harden core regression baselines.',
    ],
  },
  {
    companyZh: '51Talk 无忧英语',
    companyEn: '51Talk Online Education (NYSE: COE)',
    badgeText: '51',
    badgeGradient: 'linear-gradient(145deg, #f59e0b 0%, #b45309 100%)',
    badgeBorder: '#fbbf24',
    badgeColor: '#fffbeb',
    roleZh: '测试工程师',
    roleEn: 'QA Engineer',
    periodZh: '2018.05 — 2020.04',
    periodEn: 'May 2018 — Apr 2020',
    locationZh: '北京',
    locationEn: 'Beijing',
    bulletsZh: [
      '实时互动在线教室测试：负责 1v1 及小班在线课堂客户端（Android / iOS / Web）核心上课流程、双向白板信令同步、动态课件交互及音视频通话稳定性测试。',
      '弱网专项与多机型兼容治理：开展高丢包、高延迟抖动、断网重连等弱网环境模拟测试，执行 40+ 主流 Android 与 iOS 机型兼容回归，配合研发采集日志定位修复客户端 Crash / ANR 问题，保障线上课堂低崩溃率稳定运行。',
    ],
    bulletsEn: [
      'Real-Time Online Classroom QA: Tested 1v1 and small-group interactive classroom apps (Android / iOS / Web), covering whiteboard synchronization, interactive courseware, and live audio/video stability.',
      'Weak-Network & Device Compatibility: Executed packet-loss, latency/jitter, and reconnect simulations alongside compatibility matrices across 40+ mobile devices, assisting developers in resolving Crash/ANR defects.',
    ],
  },
];

export const EDUCATION: EduItem[] = [
  {
    schoolZh: '兰州资源环境职业技术大学',
    schoolEn: 'Lanzhou Resources & Environment Vocational University',
    badgeText: 'LZ',
    badgeGradient: 'linear-gradient(145deg, #059669 0%, #064e3b 100%)',
    badgeBorder: '#34d399',
    badgeColor: '#ecfdf5',
    degreeZh: '人工智能工程技术 · 本科（在读）',
    degreeEn: 'B.Eng. in Artificial Intelligence Engineering Technology (In Progress)',
    period: '2026.03 — 2028.06',
  },
  {
    schoolZh: '北京理工大学（继续教育学院）',
    schoolEn: 'Beijing Institute of Technology (Continuing Education)',
    badgeText: 'BIT',
    badgeGradient: 'linear-gradient(145deg, #334155 0%, #0f172a 100%)',
    badgeBorder: '#64748b',
    badgeColor: '#f8fafc',
    degreeZh: '计算机科学与技术 · 大专',
    degreeEn: 'Associate Degree in Computer Science & Technology',
    period: '2015.09 — 2018.06',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    categoryZh: 'AI 功能评测与提效落地',
    categoryEn: 'AI Feature QA & Workflows',
    itemsZh: [
      '问答 Agent 准确性/防幻觉评测',
      'AI 生图合规与敏感词审核测试',
      '越狱 / Prompt 注入红队测试',
      '提示词迭代退化回归对比',
      'AI 辅助需求拆解与用例生成',
    ],
    itemsEn: [
      'Q&A Agent Groundedness Evals',
      'AI Image-Gen Safety Testing',
      'Prompt Injection / Jailbreak QA',
      'Prompt Regression Diffing',
      'AI-Assisted Test Design',
    ],
  },
  {
    categoryZh: '全链路测试设计与左移',
    categoryEn: 'Test Architecture & Shift-Left',
    itemsZh: [
      '多端全流程测试方案设计',
      'PRD 需求盲区与状态机挖掘',
      '提测代码 Diff 变更风险核查',
      '版本准入准出质量门禁',
      '线上缺陷复盘与防漏测沉淀',
    ],
    itemsEn: [
      'Multi-Platform Test Strategy',
      'PRD Edge-Case & State Analysis',
      'Pre-QA Diff Risk Walkthrough',
      'Release Quality Gates',
      'Root-Cause & Escape Prevention',
    ],
  },
  {
    categoryZh: '接口、数据与移动端专项',
    categoryEn: 'API, Data & Mobile Specialized QA',
    itemsZh: [
      'RESTful 接口深度测试（越权/幂等）',
      'Charles / Mitmproxy 抓包与弱网模拟',
      'MySQL 复杂查询与落库一致性核查',
      'Redis 缓存状态校验',
      'Android ADB / Monkey / Crash 定位',
      '客户端离线同步与多机型兼容',
    ],
    itemsEn: [
      'API Testing (Auth / Idempotency)',
      'Charles / Mitmproxy & Weak-Net',
      'MySQL Data Consistency Verification',
      'Redis Cache Validation',
      'Android ADB / Monkey / Crash Triage',
      'Offline Sync & Device Compatibility',
    ],
  },
  {
    categoryZh: '自动化巡检与工程工具',
    categoryEn: 'Test Automation & Tooling',
    itemsZh: [
      'Python 自动化测试脚本',
      'Playwright 浏览器意图巡检',
      'Pytest / Unittest',
      '后台接口敏感泄露被动监听',
      'Linux 常用命令与日志排查',
      'Git / GitHub Actions CI 门禁',
    ],
    itemsEn: [
      'Python Test Scripting',
      'Playwright Browser Probing',
      'Pytest / Unittest',
      'Passive API Leak Telemetry',
      'Linux Log Triage',
      'Git / GitHub Actions CI Gates',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    slug: 'evalgate',
    name: 'EvalGate',
    taglineZh: '大模型功能上线前的评测与红队检查工具',
    taglineEn: 'Release Evaluation & Red-Team Checks for LLM Features',
    period: '2026 · 个人开源',
    stackZh: ['Python 3.10+', '零依赖', '断言矩阵', 'LLM 裁判（可选）', '红队检查'],
    stackEn: ['Python 3.10+', 'Zero-Dep', 'Assertion Matrix', 'Optional LLM Judge', 'Red-Team Checks'],
    metricBadgeZh: '11 项单测 · 含 6 条自查 bug 回归',
    metricBadgeEn: '11 Tests · 6 Regression Cases',
    repoUrl: 'https://github.com/1dulei/evalgate',
    demoUrl: '/demos/evalgate.html',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 55%, #312e81 100%)',
    previewZh: `【评测套件】教育问答助手与 AI 生图（脱敏示例）\n ✓ [结构校验] 卡片 JSON 必填字段与类型（布尔值不算数字）\n ✓ [红队检查] 先查指令/隐私泄露，再查是否明确拒绝\n – [LLM 裁判] 未配置裁判模型 → 标记为跳过，不算通过`,
    previewEn: `[Suite] Edu Q&A assistant & AI image (desensitized sample)\n ✓ [Schema] Required keys & types (booleans are not numbers)\n ✓ [Red-Team] Check leaks first, then explicit refusal\n – [LLM Judge] No judge configured → SKIPPED, never counted as pass`,
    summaryZh:
      '源于测试 AI 问答与生图功能时的真实痛点：改一句提示词，接口照样 200，边缘问题却开始答错。用确定性断言做每次 CI 的快速检查，用可选的 LLM 裁判兜住字词匹配看不出的逻辑错误。',
    summaryEn:
      'Born from testing AI Q&A and image features: a one-line prompt change keeps HTTP 200 while edge cases quietly break. Deterministic assertions run on every CI build; an optional LLM judge catches logical errors that token overlap cannot.',
    highlightsZh: [
      '断言矩阵：关键信息/违禁内容、JSON 结构与类型、字词重合度、响应耗时，外加可选的 LLM 裁判判断回答是否与参考原文矛盾。',
      '红队检查按「敏感信息 → 越狱话术 → 指令泄露 → 是否拒绝」顺序判定；嘴上说「不能」但照样泄露指令也判失败。任一红队用例失败即阻断上线。',
      '自查发现并修复了 3 个判错问题（拒绝词掩盖泄露、布尔值被当整数、规则说反仍高分），全部补成回归用例；README 如实列出已知局限。',
    ],
    highlightsEn: [
      'Assertion matrix: required/forbidden content, JSON schema & types, token-overlap groundedness, latency, plus an optional LLM judge for contradictions.',
      'Red-team checks run in order: PII → jailbreak phrases → instruction leaks → refusal. Saying "I can\'t" while leaking instructions still fails. Any red-team failure blocks release.',
      'Self-review found and fixed 3 misjudgments (refusal words masking leaks, booleans passing as integers, reversed rules scoring high), each locked in by a regression test; known limitations are documented.',
    ],
  },
  {
    slug: 'specgate',
    name: 'SpecGate',
    taglineZh: '提测前的需求测试契约与代码变更风险检查',
    taglineEn: 'Pre-QA Requirement Contracts & Diff Risk Checks',
    period: '2026 · 个人开源',
    stackZh: ['Python 3.11', '零依赖', '测试左移', 'Diff 新增+删除行', 'CI 退出码'],
    stackEn: ['Python 3.11', 'Zero-Dep', 'Shift-Left', 'Added + Removed Lines', 'CI Exit Code'],
    metricBadgeZh: '10 例评测 · 7 例完全正确（含难例）',
    metricBadgeEn: '10 Cases · 7 Fully Correct',
    repoUrl: 'https://github.com/1dulei/specgate',
    demoUrl: '/demos/specgate.html',
    gradient: 'linear-gradient(135deg, #090d16 0%, #064e3b 60%, #065f46 100%)',
    previewZh: `【提测前风险清单】每条都带文件与行号\n ✕ [P0] RefundController.java:24  删除了 @PreAuthorize，同文件未见替代\n ✕ [P0] MallServiceImpl.java:22   直接采信客户端传入的订单状态\n ✕ [P1] HomeworkServiceImpl.java  多行空 catch 吞掉推送异常`,
    previewEn: `[Pre-QA Risk List] Every finding has file & line\n ✕ [P0] RefundController.java:24  @PreAuthorize removed, no replacement\n ✕ [P0] MallServiceImpl.java:22   Trusts client-supplied order status\n ✕ [P1] HomeworkServiceImpl.java  Multi-line empty catch swallows errors`,
    summaryZh:
      '把我在多端提测中反复遇到的高危问题固化成确定性规则：从需求文档整理状态流转与禁用文案，同时扫描提测 diff 的新增行和删除行，在进测试环境前拦下低级但致命的缺陷。',
    summaryEn:
      'Codifies high-risk issues I repeatedly saw during multi-platform releases into deterministic rules: extracts states and copy redlines from PRDs, and scans both added and removed diff lines before code reaches staging.',
    highlightsZh: [
      '11 条规则覆盖免鉴权、删除权限注解/事务注解、采信前端状态、无锁扣减、空 catch、离线进度覆盖等，每条风险附文件行号、修复建议和验证方法。',
      '评测集分「种子样例」和「难例」：种子 4/4 通过；6 个难例中 3 个完全正确，剩余漏报/误报在 README 中逐条说明原因与改进方向。',
      '需求契约标记 non_executable 并附 SHA-256 摘要，只作为测试设计依据；业务禁用词从需求或参数传入，不内置任何公司词汇。',
    ],
    highlightsEn: [
      '11 rules covering auth bypasses, removed permission/transaction annotations, client-trusted status, non-atomic deductions, empty catches, and offline sync overwrites—each with file:line, fix, and verification hint.',
      'Benchmark split into seed and hard cases: seed 4/4; hard 3/6 fully correct, with every remaining miss/false positive explained in the README.',
      'PRD contracts are marked non_executable with a SHA-256 digest; business copy redlines come from the PRD or flags, never hardcoded.',
    ],
  },
  {
    slug: 'tracepilot',
    name: 'TracePilot',
    taglineZh: '浏览器业务流程巡检 + 后台接口被动检查',
    taglineEn: 'Browser Flow Probing + Passive API Checks',
    period: '2026 · 个人开源',
    stackZh: ['Python', 'Playwright', '语义定位优先', '后台被动检查', '截图证据报告'],
    stackEn: ['Python', 'Playwright', 'Semantic Locators', 'Passive API Checks', 'Evidence Report'],
    metricBadgeZh: '用例无 CSS/XPath · 抓假 200',
    metricBadgeEn: 'No CSS/XPath in Specs · Catches False-200',
    repoUrl: 'https://github.com/1dulei/tracepilot',
    demoUrl: '/demos/tracepilot.html',
    gradient: 'linear-gradient(135deg, #18181b 0%, #1e293b 55%, #0f172a 100%)',
    previewZh: `【浏览器巡检 + 后台被动检查】\n ✓ [降级定位] 隐藏复选框、div 按钮、window.open 新标签页均已兼容\n ⚠ [接口告警] /api/roster 响应中出现 payPwd 字段\n ⚠ [接口告警] /api/stats 返回 HTTP 200，但业务码不在成功白名单`,
    previewEn: `[Browser Flow + Passive API Checks]\n ✓ [Fallback] Hidden checkbox, div button & window.open tab handled\n ⚠ [API Alert] /api/roster response contains 'payPwd'\n ⚠ [API Alert] /api/stats returned HTTP 200 with a non-success code`,
    summaryZh:
      '针对 UI 自动化的两个老问题：前端一改样式脚本就失效，以及页面正常但接口暗中出错。用例只写页面可见文字，后台在流程运行时顺带检查所有接口响应。',
    summaryEn:
      'Targets two classic UI automation problems: scripts breaking on every style change, and green pages hiding broken APIs. Specs use visible text only, while every API response is checked in the background.',
    highlightsZh: [
      '定位顺序：可访问性标签/角色 → 常见组件库兼容规则 → 精确文本；每一步用了哪种策略都写进报告，便于判断页面是否该补标签。',
      '被动检查敏感字段外泄、localStorage 明文密码、HTTP 200 但业务失败；敏感字段、成功码、业务码字段名都可在用例中配置。',
      '检查逻辑不依赖浏览器，有独立单元测试；支持子进程超时隔离，输出带每步截图的 HTML 报告。',
    ],
    highlightsEn: [
      'Locator order: accessibility labels/roles → common component-library fallbacks → exact text; the strategy used per step is recorded in the report.',
      'Passively flags leaked sensitive fields, plaintext passwords in localStorage, and HTTP-200 business failures; sensitive keys, success codes, and code field are configurable per spec.',
      'Detection logic is browser-free and unit tested; supports subprocess timeouts and outputs an HTML report with per-step screenshots.',
    ],
  },
];

export const ESSAYS: EssayItem[] = [
  {
    slug: 'deterministic-evals-for-llm-apps',
    kindZh: 'AI 测试实战',
    kindEn: 'AI QA Practice',
    date: '2026-11-18',
    readTimeZh: '5 分钟阅读',
    readTimeEn: '5 min read',
    titleZh: '测教育问答助手与 AI 生图时，为什么单靠字词匹配拦不住逻辑颠倒',
    titleEn: 'Testing AI Q&A & Image Features: Why Token Overlap Alone Misses Logical Contradictions',
    summaryZh: '复盘我们在测试问答助手与 AI 生图功能时遇到的提示词退化问题，以及我在开源实现 EvalGate 后通过自查暴露出的 3 个判错 bug 和取舍。',
    summaryEn: 'Notes from testing educational AI Q&A and image features, plus 3 assertion bugs uncovered by self-reviewing EvalGate and how they were fixed.',
    paragraphsZh: [
      {
        heading: '一、测 AI 功能遇到的第一个难题：接口返回 200，回答却开始偏离规则',
        body: '以前测常规业务接口，输入参数固定，返回的字段值也是固定的。但在测试教育类问答助手和 AI 生图功能时，哪怕只是为了优化语气微调了一句系统提示词，原本答得准的课本知识点也可能开始超纲编造，甚至把教务请假扣课时的比例答错；手工抽查十几个问题看着没毛病，一上边缘场景就露馅。',
      },
      {
        heading: '二、做成个人工具 EvalGate 后，自查出的三个判错问题',
        body: '为了把这些检查固化下来，我把脱敏场景写成了开源工具 EvalGate。但在拿边界用例反测自己写的代码时，一下子暴露出三个典型问题：',
        bullets: [
          '字词重合度看不出逻辑颠倒：把“开课前 2 小时以上免费、不足 2 小时扣 0.5 课时”完全说反，因为词都一样，字词重合度依然打出 0.909 的高分。最后补了可选的 LLM 裁判模式（llm_judge）专门抓逻辑矛盾，未配置裁判时明确标为跳过，绝不默默算作通过。',
          '拒绝关键词会掩盖泄露：如果回答里先说“虽然我不能保证准确”，后面却照样把系统提示词吐了出来，单靠匹配“不能/抱歉”会误判为安全。改成先查敏感信息与指令泄露，再查是否明确拒绝。',
          'Python 里布尔值会被当成整数：JSON 里返回 {"score": true} 时 isinstance(True, int) 为真，漏过了类型校验，已显式排除 bool。',
        ],
      },
      {
        heading: '三、现在的边界与运行示例',
        code: 'python -m evalgate run --config examples/edu_assistant_eval.json --html report.html\n# Mock 模式报告会在页首明确标注「不代表真实模型表现」；真机评测加 --provider http --judge',
        body: '确定性断言负责每次 CI 零成本初筛，LLM 裁判负责按需复核逻辑矛盾；同时如实记录了词库覆盖有限、JSON Schema 仅为子集等已知局限。',
      },
    ],
    paragraphsEn: [
      {
        heading: '1. When HTTP 200 Still Hides a Prompt Regression',
        body: 'While testing educational Q&A and AI image features, small prompt edits frequently kept HTTP 200 green while quietly fabricating textbook facts or misstating cancellation rules on edge cases.',
      },
      {
        heading: '2. Three Bugs Found by Self-Reviewing EvalGate',
        bullets: [
          'Token overlap cannot catch reversed logic: swapping "free" and "charged" in a policy sentence still scored 0.909. Added an optional LLM-as-judge assertion that reports SKIPPED rather than PASS when no judge is configured.',
          'Refusal words can mask leaks: a response saying "I cannot guarantee..." while still leaking instructions used to pass. Reordered checks to inspect PII and instruction leaks before refusal.',
          'Python booleans subclass int: {"score": true} slipped past integer validation until bool was excluded explicitly.',
        ],
      },
    ],
  },
  {
    slug: 'why-heavy-ai-frameworks-stall',
    kindZh: '工程复盘',
    kindEn: 'Retrospective',
    date: '2026-11-12',
    readTimeZh: '4 分钟阅读',
    readTimeEn: '4 min read',
    titleZh: '为什么重型 Page-Object 框架两周就停摆，以及 TracePilot 的取舍',
    titleEn: 'Why Heavy Page-Object Frameworks Stall in Two Weeks, and the Trade-offs in TracePilot',
    summaryZh: '复盘从“搭一套规整的分层 UI 框架”到每天疲于修定位符，最终改成语义定位优先 + 后台被动接口检查的过程与已知局限。',
    summaryEn: 'Field notes on why brittle CSS selectors rot under fast UI iterations, and how semantic locators plus passive API payload checks stay maintainable.',
    paragraphsZh: [
      {
        heading: '一、踩坑：修定位符花的时间比手工测一遍还长',
        body: '早期我尝试搭过标准的分层 Page-Object 前端自动化框架，但放进双周迭代里跑了不到两轮就维护不动了：登录页隐藏的原生复选框、div 写的伪按钮、window.open 弹出的新标签页报告，前端微调一次样式类名就成片报错。',
      },
      {
        heading: '二、更隐蔽的盲区：页面全绿，接口暗中泄密或假 200',
        body: '单纯断言页面元素在不在，根本拦不住接口带病：曾遇到名册接口把整张表实体直接序列化返回，JSON 里顺手带出了学员 payPwd 密码哈希；还有看板接口超时仍返回 HTTP 200、只在包体写业务错误码，传统 UI 脚本一路绿灯漏了过去。',
      },
      {
        heading: '三、TracePilot 的务实做法与边界',
        bullets: [
          '语义定位优先 + 组件兼容降级：用例只写可见文字，底层按「可访问性角色/标签 → 常见组件库兼容规则 → 精确文本」逐级降级，并把每步触发的策略记录在报告里。',
          '后台顺手检查全量接口与存储：流程运行时自动检查 JSON 响应和 localStorage，敏感字段和成功业务码支持在用例中配置，检查逻辑本身不依赖浏览器、可单独跑单元测试。',
          '已知局限：目前只在自建演示靶场上验证过，尚未在公开真实站点跑过并提交报告；敏感字段也只按键名识别，不识别值内容模式。',
        ],
      },
    ],
    paragraphsEn: [
      {
        heading: '1. Fixing Brittle Selectors Took Longer Than Manual QA',
        body: 'Standard Page-Object UI scripts broke constantly due to hidden native checkboxes, styled div buttons, and window.open report tabs.',
      },
      {
        heading: '2. Green UI Checks Missed API Leaks & False 200s',
        body: 'DOM assertions stayed green even when list endpoints leaked payPwd hashes in JSON payloads or returned HTTP 200 with a non-success business code.',
      },
      {
        heading: '3. Practical Trade-offs in TracePilot',
        bullets: [
          'Semantic locators first, followed by explicit component-library fallbacks, with every step strategy logged in the report.',
          'Configurable passive API & localStorage checks decoupled from browser execution so they are unit tested directly.',
          'Documented limits: verified on a built-in demo target so far; key-name matching only, not value-pattern scanning.',
        ],
      },
    ],
  },
  {
    slug: 'shift-left-diff-gate',
    kindZh: '测试左移案例',
    kindEn: 'Shift-Left Case',
    date: '2026-11-04',
    readTimeZh: '5 分钟阅读',
    readTimeEn: '5 min read',
    titleZh: '单人盯四端迭代时怎么防漏测：SpecGate 的规则设计与难例复盘',
    titleEn: 'Preventing Escapes Across 4 Platforms: SpecGate Rules, Hard Cases & Known Limits',
    summaryZh: '把提测前高频踩坑收敛成 11 条确定性规则后，我专门补了 6 个反例测试它的盲区——如实记录哪些修好了、哪些受限于正则仍会漏报或误报。',
    summaryEn: 'After turning multi-platform pre-QA bugs into 11 deterministic diff rules, I added 6 adversarial hard cases—documenting both fixes and remaining regex limits.',
    paragraphsZh: [
      {
        heading: '一、背景：等代码进了测试环境再点页面，排期根本不够用',
        body: '单人负责 Android 学习平板端、双 Web 后台与服务端版本测试时，如果每次都等提测部署后再从头点一遍找低级漏洞，大量精力都会耗在返工打回上。早期试过把 git diff 直接喂给大模型审代码，但模型口径忽紧忽松，还经常编造不存在的代码行号。',
      },
      {
        heading: '二、SpecGate 的 11 条规则与补上的删除行检测',
        bullets: [
          '先拆需求契约：从 PRD 梳理状态机流转、权限边界与禁用文案，附 SHA-256 摘要作为核对基准；工具本身不内置任何公司业务词。',
          '同时检查新增行与删除行：不仅拦新增 @SaIgnore、采信前端状态、无锁扣减、多行空 catch、mapper.updateById 丢弃返回值与平板离线进度覆盖，也拦删除 @PreAuthorize / @Transactional 这类高危改动，每条必带精确文件与行号。',
        ],
      },
      {
        heading: '三、补完 6 个难例后的真实成绩单',
        code: 'specgate eval --manifest evals/manifest.json\n# total: 10 (4 seed + 6 hard) | seed: 4/4 | hard: 3/6 | accuracy: 0.70',
        body: '种子样例 4/4 通过只能证明规则能跑通；6 个难例里修好了删除权限注解、多行空 catch 和权限上移类级，但间接局部变量传参、只读 VO 减法误报和跨文件合并逻辑仍受限于单行正则——这些边界我都如实写在了仓库 README 里。',
      },
    ],
    paragraphsEn: [
      {
        heading: '1. Late-Stage Manual Clicking Was Too Expensive',
        body: 'Supporting learning tablets, two admin consoles, and backend releases solo meant catching structural bugs late in staging burned half the sprint.',
      },
      {
        heading: '2. 11 Rules Covering Both Added and Removed Lines',
        bullets: [
          'Extracts state transitions, role boundaries, and copy redlines from PRDs into non-executable contracts with a SHA-256 digest.',
          'Scans both added and removed diff lines (including deleted @PreAuthorize / @Transactional, mapper.updateById, and multi-line empty catches) with exact file:line anchors.',
        ],
      },
      {
        heading: '3. Honest Benchmark Results on Seed + Hard Cases',
        code: 'specgate eval --manifest evals/manifest.json\n# total: 10 (4 seed + 6 hard) | seed: 4/4 | hard: 3/6 | accuracy: 0.70',
        body: 'Seed cases pass 4/4, while 3 of 6 hard cases still expose regex limits (indirect local variables, read-only VO arithmetic, cross-file merge context)—all documented openly in the README.',
      },
    ],
  },
];
