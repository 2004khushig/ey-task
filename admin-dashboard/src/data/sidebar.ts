export type SidebarItem = {
  id: string;
  label: string;
  icon?: string; // "circle" or "home" etc.
  active?: boolean;
  badge?: string;
  children?: SidebarItem[];
};

export type SidebarSection = {
  title?: string;
  items: SidebarItem[];
};

export const sidebarSections: SidebarSection[] = [
  {
    items: [
      {
        id: "dashboard",
        label: "Dashboards",
        icon: "home",
        badge: "New",
        children: [
          { id: "crm", label: "CRM", icon: "circle" },
          { id: "analytics", label: "Analytics", icon: "circle", active: true },
          { id: "ecommerce", label: "eCommerce", icon: "circle" },
        ],
      },
    ],
  },
  {
    title: "APPS & PAGES",
    items: [
      { id: "email", label: "Email", icon: "mail" },
      { id: "chat", label: "Chat", icon: "message" },
      { id: "calendar", label: "Calendar", icon: "calendar", active: true },
      { id: "invoice", label: "Invoice", icon: "file" },
      { id: "user", label: "User", icon: "user" },
      { id: "roles", label: "Roles & Permission", icon: "shield" },
      { id: "pages", label: "Pages", icon: "file" },
      { id: "dialog", label: "Dialog Examples", icon: "square" },
    ],
  },
  {
    title: "USER INTERFACE",
    items: [
      { id: "typography", label: "Typography", icon: "type" },
      { id: "icons", label: "Icons", icon: "star" },
      { id: "cards", label: "Cards", icon: "card" },
      { id: "components", label: "Components", icon: "layout" },
    ],
  },
  {
    title: "FORMS & TABLES",
    items: [
      { id: "form-elements", label: "Form Elements", icon: "circle" },
      { id: "form-layout", label: "Form Layout", icon: "monitor" },
      { id: "form-validation", label: "Form Validation", icon: "check" },
      { id: "form-wizard", label: "Form Wizard", icon: "dots" },
      { id: "table", label: "Table", icon: "grid" },
      { id: "mui-datagrid", label: "Mui DataGrid", icon: "grid" },
    ],
  },
  {
    title: "CHARTS & MISC",
    items: [
      { id: "charts", label: "Charts", icon: "chart" },
      { id: "others", label: "Others", icon: "chevron" },
    ],
  },
];
