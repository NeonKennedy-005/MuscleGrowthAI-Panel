// User Guide content for MuscleGrowthAI.
// Use {{appName}} as a placeholder — replaced at render time.

export const userGuideTopics = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: 'Sparkles',
    content: `# Welcome to {{appName}}

{{appName}} is your AI-powered fitness and bodybuilding guidance system. A panel of specialized coaches gives you diverse perspectives on training, hypertrophy, nutrition, recovery, form, and progress tracking.

## Your first steps
1. **Start a new chat** using the pencil icon next to the search bar
2. **Type a question** about workouts, muscle groups, nutrition, recovery, or your goals
3. **Read multiple advisor responses** — each coach brings a different lens
4. **Reply to a specific advisor** to go deeper on their angle

## Need help?
Return to this guide anytime via the **?** icon in the header.`,
  },
  {
    id: 'advisors',
    title: 'Your Coaches',
    icon: 'Dumbbell',
    content: `# Your Coaches

{{appName}} includes {{advisorCount}} specialized fitness personas, each focused on a different part of building muscle safely and effectively.

## Available advisors
{{advisorList}}

## Seeing who's available
Click the **advisors** dropdown in the top right of the chat to see the full panel.`,
  },
  {
    id: 'conversations',
    title: 'Conversations & Replies',
    icon: 'MessageCircle',
    content: `# Conversations & Replies

## Asking a question
Type into the chat box at the bottom. All coaches respond with their unique perspective.

## Replying to a specific coach
Click a coach's response to **reply directly to them** and continue one-on-one.

## Tips
- Include context (goal, experience level, equipment, days per week, injuries)
- Paste your current program, macros, or a training log for sharper advice
- Different coaches may prioritize differently — use that to balance gains, recovery, and safety`,
  },
  {
    id: 'documents',
    title: 'Uploading Documents',
    icon: 'Paperclip',
    content: `# Uploading Documents

Attach **PDFs, Word documents, and text files** so coaches can reference your materials.

## How it works
1. Click the paperclip icon in the chat input
2. Select your file
3. Wait for processing
4. Ask a question — coaches use **RAG** to pull relevant sections

## Good uploads
- Current training programs and splits
- Nutrition plans, macro breakdowns, and food logs
- Progress spreadsheets or bloodwork summaries (exported as PDF)`,
  },
  {
    id: 'sessions',
    title: 'Sessions & History',
    icon: 'MessagesSquare',
    content: `# Sessions & History

Every conversation is saved as a session. Use the sidebar search to find past chats, switch sessions, or start a new chat with the pencil icon.`,
  },
  {
    id: 'canvas',
    title: 'Fitness Canvas',
    icon: 'BarChart3',
    content: `# {{appName}} Canvas

The Canvas is a **structured workspace** for your training. Insights from chats can inform widgets such as:

- Training split & weekly plan
- Target muscle groups & volume
- Nutrition & protein goals
- Recovery, sleep & mobility
- Progress metrics & PRs
- Program adjustments over time

Open Canvas from the sidebar. Layout and widgets auto-save in your browser.`,
  },
  {
    id: 'tips',
    title: 'Tips & Shortcuts',
    icon: 'Sparkles',
    content: `# Tips & Shortcuts

## Useful workflows
- **Program design:** Hypertrophy Coach + Program Planner
- **Eating for your goal:** Nutrition Strategist + Hypertrophy Coach
- **Staying injury-free:** Form & Safety Coach + Recovery Specialist
- **Breaking a plateau:** Ask multiple coaches to compare volume, intensity, and recovery

## Theme
Switch light/dark mode from the toggle in the header.`,
  },
];
