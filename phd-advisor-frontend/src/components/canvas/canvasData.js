// Demo data for a lifter running a 12-week hypertrophy block.

export const DEMO_PROJECT = {
  title: "12-Week Hypertrophy Block — Upper/Lower",
  meta: "Intermediate lifter · muscle gain phase",
};

export const INSIGHTS = [
  {
    id: 'i-progress',
    title: 'Program progress',
    icon: 'graph',
    category: 'progress',
    confidence: 82,
    summary: 'Week 6 of a 12-week upper/lower block. Upper-body volume and pressing strength are trending up; leg volume and step count are the main gaps before the next deload.',
    bullets: [
      'Strength: <strong>bench +7.5kg</strong> · overhead press +5kg since week 1',
      'Volume: <strong>16 sets/week</strong> chest & back · legs lagging at 10',
      '<strong>Risk:</strong> right shoulder tightness on incline pressing',
    ],
    pinned: true,
    sources: 18,
    updatedMinutesAgo: 5,
    quotes: [
      '"Add a second lower day before increasing upper volume." — Program Planner chat',
      '"Warm up the rotator cuff before pressing." — Form & Safety Coach',
    ],
  },
  {
    id: 'i-method',
    title: 'Nutrition & recovery',
    icon: 'flask',
    category: 'theory',
    confidence: 71,
    summary: 'Protein target is being hit most days; total calories are slightly under the surplus goal. Sleep is the biggest recovery limiter this block.',
    bullets: [
      'Protein: <strong>1.9 g/kg</strong> avg · target 2.0–2.2 g/kg',
      'Calories: <strong>~250 kcal under</strong> the lean-bulk surplus',
      'Sleep: <strong>6.2 h avg</strong> — recovery and gym energy suffering',
    ],
    sources: 14,
    updatedMinutesAgo: 14,
    quotes: [
      '"Add a shake + carbs post-workout to close the calorie gap." — Nutrition Strategist',
      '"Prioritize 7.5h sleep before adding volume." — Recovery Specialist',
    ],
  },
  {
    id: 'i-lit',
    title: 'Training knowledge',
    icon: 'book',
    category: 'literature',
    confidence: 76,
    summary: 'Solid grasp of progressive overload and rep ranges for chest and back. Weaker on leg-day exercise selection and how to program a deload.',
    bullets: [
      '<strong>Coverage:</strong> hypertrophy rep ranges & progressive overload',
      '<strong>Gap:</strong> quad vs. hip-hinge <strong>exercise selection</strong> for legs',
      '<strong>Gap:</strong> no clear <strong>deload</strong> protocol planned',
    ],
    sources: 32,
    updatedMinutesAgo: 28,
    quotes: [
      '"Rotate hack squats and RDLs to balance quads and hamstrings." — Hypertrophy Coach',
      '"Plan a deload every 5–6 weeks." — Program Planner',
    ],
  },
  {
    id: 'i-questions',
    title: 'Open training questions',
    icon: 'sparkles',
    category: 'theory',
    confidence: 63,
    summary: 'Three live threads. Q1 (adding a third training day for legs) gates the next block. Q2–Q3 affect nutrition and recovery choices.',
    bullets: [
      '<strong>Q1:</strong> Move to a 4-day upper/lower or keep 3 full-body days?',
      '<strong>Q2:</strong> Lean-bulk surplus size — 200 or 400 kcal over maintenance?',
      '<strong>Q3:</strong> Cardio on rest days without hurting recovery?',
    ],
    sources: 9,
    updatedMinutesAgo: 41,
    quotes: [
      '"A 4th day lets you bring legs up without cutting upper volume." — Program Planner',
      '"Keep the surplus small to limit fat gain." — Nutrition Strategist',
    ],
  },
  {
    id: 'i-next',
    title: 'Next steps',
    icon: 'arrow',
    category: 'action',
    confidence: 85,
    summary: 'Near-term actions tied to the next training week and the upcoming deload. Two items have slipped a week.',
    bullets: [
      'Add a <strong>second lower-body day</strong> and rebalance leg volume',
      'Hit <strong>2.0 g/kg protein</strong> daily and log every meal for a week',
      'Add <strong>10 min mobility</strong> pre-lift for the shoulder',
      'Schedule a <strong>deload</strong> for week 7',
    ],
    sources: 7,
    updatedMinutesAgo: 9,
    quotes: [
      '"Under-recovered legs are the #1 progress blocker right now." — Recovery Specialist',
      '"Track protein before adding training volume." — Nutrition Strategist',
    ],
  },
  {
    id: 'i-blockers',
    title: 'Blockers & risks',
    icon: 'alert',
    category: 'risk',
    confidence: 74,
    summary: 'One physical limiter (shoulder tightness), one lifestyle limiter (sleep). Sleep is the higher risk to progress this block.',
    bullets: [
      '<strong>Physical:</strong> shoulder tightness limits incline pressing volume',
      '<strong>Lifestyle:</strong> sleep under 6.5h is capping recovery and gym energy',
    ],
    sources: 6,
    updatedMinutesAgo: 20,
    quotes: [
      '"Without recovery you cannot express the strength you are building." — Recovery Specialist',
      '"Fix sleep before chasing bigger lifts." — Form & Safety Coach',
    ],
  },
];

export const WIDGET_CATALOG = [
  { type: 'bibliography', name: 'Bibliography', desc: 'DOI lookup + BibTeX import; APA/MLA/Chicago/BibTeX export', icon: 'book', cat: 'research', defaultSize: 'M', enhanced: true },
  { type: 'reading-queue', name: 'Reading Queue', desc: 'CrossRef title search + DOI resolve to auto-fill papers', icon: 'list', cat: 'research', defaultSize: 'S', enhanced: true },
  { type: 'notes', name: 'Note Inbox', desc: 'Markdown rendering with full-text search', icon: 'notes', cat: 'research', defaultSize: 'S', enhanced: true },
  { type: 'concept-map', name: 'Concept Map', desc: 'Drag papers as nodes, tag themes', icon: 'network', cat: 'research', defaultSize: 'M', stub: true },
  { type: 'highlights', name: 'Highlights & Quotes', desc: 'Pulled quotes with citation key, copy-formatted', icon: 'cite', cat: 'research', defaultSize: 'M', enhanced: true },
  { type: 'paper-tldr', name: 'Paper TL;DR', desc: 'PDF → claim / method / limits / gaps', icon: 'microscope', cat: 'research', defaultSize: 'M', stub: true },

  { type: 'writing', name: 'Writing Tracker', desc: 'Inline writing pad, multi-chapter, 28-day heatmap', icon: 'pencil', cat: 'writing', defaultSize: 'M', enhanced: true },
  { type: 'outline', name: 'Outline Builder', desc: 'Collapsible tree with indent / outdent / inline editing', icon: 'list', cat: 'writing', defaultSize: 'M', enhanced: true },
  { type: 'latex', name: 'LaTeX Scratchpad', desc: 'Live KaTeX render-as-you-type with snippet chips', icon: 'flask', cat: 'writing', defaultSize: 'M', enhanced: true },
  { type: 'draft-locker', name: 'Draft Locker', desc: 'Versioned chapter drafts', icon: 'shield', cat: 'writing', defaultSize: 'S', stub: true },

  { type: 'kanban', name: 'Task Board', desc: 'Drag-to-move with priority filter chips and due-date sort', icon: 'kanban', cat: 'project', defaultSize: 'L', enhanced: true },
  { type: 'deadlines', name: 'Deadlines', desc: 'Countdown plus per-deadline .ics calendar export', icon: 'calendar', cat: 'project', defaultSize: 'S', enhanced: true },
  { type: 'pomodoro', name: 'Pomodoro', desc: 'Real timer with break cycle and session counter', icon: 'timer', cat: 'project', defaultSize: 'S', enhanced: true },
  { type: 'gantt', name: 'Milestone Timeline', desc: 'Base building → hypertrophy → peak', icon: 'flag', cat: 'project', defaultSize: 'L', stub: true },
  { type: 'meeting-log', name: 'Meeting Log', desc: 'Per-stakeholder, last contact, actions', icon: 'message', cat: 'project', defaultSize: 'M' },
  { type: 'goals', name: 'Goals / OKRs', desc: 'Quarterly milestones with progress sliders', icon: 'bullseye', cat: 'project', defaultSize: 'M' },
  { type: 'calendar', name: 'Calendar', desc: 'Month grid with deadlines and writing days', icon: 'calendar', cat: 'project', defaultSize: 'M', enhanced: true },
  { type: 'activity', name: 'Activity Feed', desc: 'Chronological log of edits across widgets', icon: 'graph', cat: 'project', defaultSize: 'M', enhanced: true },
  { type: 'documenter', name: 'Daily Documenter', desc: 'Date-stamped journal · AI weekly summary (LLM stub)', icon: 'pencil', cat: 'project', defaultSize: 'M', enhanced: true },
  { type: 'phd-journey', name: 'Training Roadmap', desc: 'Milestones from assessment → base building → hypertrophy → peak → maintain', icon: 'flag', cat: 'project', defaultSize: 'M', enhanced: true },
  { type: 'phd-resources', name: 'Fitness Resources', desc: 'Programs, exercise libraries, nutrition guides, and community references', icon: 'star', cat: 'research', defaultSize: 'M', enhanced: true },

  { type: 'mood', name: 'Mood / Burnout Check-in', desc: 'Daily slider, trend graph', icon: 'smile', cat: 'wellness', defaultSize: 'S', stub: true },
  { type: 'sleep', name: 'Sleep & Energy', desc: 'Correlate with productive days', icon: 'heart', cat: 'wellness', defaultSize: 'S', stub: true },
  { type: 'habits', name: 'Habit Tracker', desc: 'Daily research practices', icon: 'flame', cat: 'wellness', defaultSize: 'S' },
  { type: 'focus', name: 'Focus Playlist', desc: 'Ambient sounds & music', icon: 'music', cat: 'wellness', defaultSize: 'S', stub: true },

  { type: 'cfp', name: 'Conference / CFP Tracker', desc: 'Deadlines, fit, submission status', icon: 'send', cat: 'career', defaultSize: 'M', stub: true },
  { type: 'grants', name: 'Grant Tracker', desc: 'Applications, deadlines, awards', icon: 'award', cat: 'career', defaultSize: 'S', stub: true },
  { type: 'crm', name: 'Networking CRM', desc: 'Collaborators, last touch', icon: 'network', cat: 'career', defaultSize: 'M', stub: true },
  { type: 'cv', name: 'CV / Publications', desc: 'Track outputs, generate CV', icon: 'user', cat: 'career', defaultSize: 'S', stub: true },

  { type: 'datasets', name: 'Dataset Library', desc: 'Public datasets by domain', icon: 'database', cat: 'data', defaultSize: 'M', stub: true },
  { type: 'methods', name: 'Methods Cheat Sheet', desc: 'When to use what test', icon: 'flask', cat: 'data', defaultSize: 'M', stub: true },

  { type: 'budget', name: 'Budget Tracker', desc: 'Research spend vs. cap', icon: 'wallet', cat: 'practical', defaultSize: 'S' },
  { type: 'discounts', name: 'Student Discounts', desc: 'Software & services with edu pricing', icon: 'star', cat: 'practical', defaultSize: 'S', stub: true },

  { type: 'reviewer-2', name: 'Reviewer 2 Simulator', desc: 'Paste a plan → harsh, honest critique', icon: 'gavel', cat: 'critic', defaultSize: 'M', critic: true },
  { type: 'devils-advocate', name: 'Devil\'s Advocate', desc: 'Strongest counter-arguments to your plan', icon: 'scale', cat: 'critic', defaultSize: 'M', critic: true },
  { type: 'scope-realism', name: 'Scope Realism Check', desc: 'Brutal feasibility verdict given timeline', icon: 'bullseye', cat: 'critic', defaultSize: 'M', critic: true },
  { type: 'assumption', name: 'Assumption Excavator', desc: 'Names hidden assumptions, asks "what if wrong?"', icon: 'brain', cat: 'critic', defaultSize: 'M', critic: true, stub: true },
  { type: 'whats-missing', name: '"What\'s Missing"', desc: 'Gap analysis on your program or diet', icon: 'alert', cat: 'critic', defaultSize: 'S', critic: true, stub: true },
  { type: 'calibrator', name: 'Confidence Calibrator', desc: 'Challenges every "this always works" claim', icon: 'scale', cat: 'critic', defaultSize: 'S', critic: true, stub: true },
];

export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'research', label: 'Training' },
  { id: 'writing', label: 'Logging' },
  { id: 'project', label: 'Project' },
  { id: 'wellness', label: 'Wellness' },
  { id: 'career', label: 'Goals' },
  { id: 'data', label: 'Data' },
  { id: 'practical', label: 'Practical' },
  { id: 'critic', label: 'Anti-yes-man', critic: true },
];

// Workspace starts empty — users add widgets from the palette or pick a preset.
export const DEFAULT_LAYOUT = [];

// Curated starter layouts. Each preset assigns its own widget IDs so reseeding
// won't collide with manually-added widgets.
const presetIds = (types) => types.map((t, i) => ({ id: `pre-${t.type}-${i}`, ...t }));
export const WORKSPACE_PRESETS = [
  {
    id: 'day1-soc',
    name: 'Beginner Starter',
    desc: 'Get oriented: reading queue, notes, deadlines, task board, pomodoro.',
    icon: 'sparkles',
    layout: presetIds([
      { type: 'reading-queue', size: 'M' },
      { type: 'bibliography', size: 'M' },
      { type: 'notes', size: 'M' },
      { type: 'deadlines', size: 'S' },
      { type: 'pomodoro', size: 'S' },
      { type: 'kanban', size: 'L' },
    ]),
  },
  {
    id: 'writing-sprint',
    name: 'Program Builder',
    desc: 'Plan your split: writing pad, outline, highlights, task board, pomodoro.',
    icon: 'pencil',
    layout: presetIds([
      { type: 'writing', size: 'M' },
      { type: 'outline', size: 'M' },
      { type: 'pomodoro', size: 'S' },
      { type: 'latex', size: 'M' },
      { type: 'highlights', size: 'M' },
      { type: 'bibliography', size: 'M' },
    ]),
  },
  {
    id: 'audit-prep',
    name: 'Cut Prep',
    desc: 'Dial in nutrition and tracking: notes, reading queue, highlights, task board.',
    icon: 'book',
    layout: presetIds([
      { type: 'bibliography', size: 'L' },
      { type: 'reading-queue', size: 'M' },
      { type: 'notes', size: 'M' },
      { type: 'highlights', size: 'M' },
      { type: 'kanban', size: 'M' },
    ]),
  },
  {
    id: 'incident-mode',
    name: 'Plateau Buster',
    desc: 'Break through: planning widgets plus challenge widgets to pressure-test your program.',
    icon: 'gavel',
    layout: presetIds([
      { type: 'writing', size: 'M' },
      { type: 'outline', size: 'M' },
      { type: 'reviewer-2', size: 'M', critic: true },
      { type: 'devils-advocate', size: 'M', critic: true },
      { type: 'scope-realism', size: 'M', critic: true },
      { type: 'deadlines', size: 'S' },
    ]),
  },
];

// Initial state when a widget is first added — minimal scaffolding, no demo content.
export const EMPTY_STATE = {
  bibliography: { format: 'APA', entries: [] },
  kanban: {
    cols: [
      { id: 'todo', label: 'To Do' },
      { id: 'doing', label: 'Doing' },
      { id: 'stuck', label: 'Stuck' },
      { id: 'done', label: 'Done' },
    ],
    cards: [],
  },
  pomodoro: { focus: 25, brk: 5, sessionsToday: 0 },
  writing: {
    chapters: [{ id: 'c-default', name: 'Untitled chapter', target: 500, draft: '' }],
    activeChapterId: 'c-default',
    dailyTotals: {},
    target: 500,
  },
  deadlines: [],
  budget: { cap: 1000, items: [] },
  notes: { items: [] },
  habits: { items: [] },
  goals: { items: [] },
  'meeting-log': { items: [] },
  'reading-queue': [],
  'reviewer-2': { lastDraft: '', lastReview: null },
  'devils-advocate': { claim: '', counters: [] },
  'scope-realism': {
    target: '',
    score: 0,
    label: 'Set a target',
    factors: [],
    notes: '',
  },
  outline: { items: [], expanded: {} },
  highlights: { items: [] },
  latex: { source: '', displayMode: true },
  calendar: { viewMonth: new Date().toISOString().slice(0, 7) },
  activity: {},
  documenter: { entries: [], lastSummary: null },
  'phd-journey': {
    // Status per milestone: 'open' | 'in-progress' | 'completed'
    // Milestones come from the standard training roadmap (assessment → maintenance)
    statuses: {},
    notes: {},
  },
  'phd-resources': {
    customLinks: [],
  },
};

