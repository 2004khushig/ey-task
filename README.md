# 🧩 Admin Dashboard UI (Figma → React)

This project is a **frontend-focused admin dashboard UI** built from a Figma design into reusable React components.  
The Figma file was treated as the single source of truth for layout, spacing, colors, and typography.

---

## ✨ Components Implemented

### Mandatory Components
- **Header (Top Navigation)**
  - Search
  - Language selector  
  - Theme toggle (Light / Dark)
  - Notifications
  - User avatar
- **Footer**
  - Pixel-matched footer with links and branding

### Additional Components
- **Sidebar**
  - Collapsible Dashboard dropdown
  - Active item handling
  - Icon-based navigation
  - Dark mode support
- **Dashboard Cards**
  - Transactions Card
  - Upgrade Plan Card  
  - Meeting Schedule Card

### Bonus Components
- **Activity Timeline**
- **Cafe Badilico Card**

> More than the required 3 additional components implemented to show layout mastery & UI polish.

---

## 🧠 Key Design & Technical Decisions

- **Component-driven architecture**  
  Every UI section built as reusable, isolated React component
- **State managed at layout level**  
  Dark mode, sidebar state passed via props for scalability  
- **CSS Modules**  
  Scoped styles for pixel-perfect Figma matching
- **No UI libraries**  
  100% manual implementation per assignment rules

---

## 🛠 Tech Stack

```bash
React (Vite) + TypeScript + CSS Modules + SVG Assets
Deployment: Vercel

⏱ Time Investment
text
Design analysis: 1.5h
Core layout: 3h  
Dashboard cards: 3h
Dark mode + interactions: 1h
Polish: 1h
**Total: ~9-10h**
🤖 AI Usage (Responsible)
❌ NOT used for: Design decisions, layout, styling

✅ USED for: TypeScript debugging, React patterns, boilerplate acceleration

Figma → Code conversion was 100% manual pixel-matching.
