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
<img width="2638" height="1088" alt="image" src="https://github.com/user-attachments/assets/1ab51cc4-207e-4535-b8e9-6e5cc87f7654" />
<img width="2637" height="1064" alt="image" src="https://github.com/user-attachments/assets/2c6cc0f5-7e4a-4290-93fc-abd1898c5759" />

---

## 🛠 Tech Stack

```bash
React (Vite) + TypeScript + CSS Modules + SVG Assets
Deployment: Vercel
```

---

## ⏱ Time Investment
Design analysis: 0.5h
Core layout: 0.5h  
Dashboard cards: 1h
Polish: 1h
**Total: ~3-4h**

---

##🤖 AI Usage (Responsible)
❌ NOT used for: Design decisions, layout, styling

✅ USED for: TypeScript debugging, React patterns, boilerplate acceleration

Figma → Code conversion was 100% manual pixel-matching.
