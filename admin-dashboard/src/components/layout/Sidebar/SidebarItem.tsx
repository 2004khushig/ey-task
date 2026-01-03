import styles from "./Sidebar.module.css";
import type { SidebarItem as Item } from "../../../data/sidebar";

interface Props {
  item: Item;
  active: boolean;
  onClick: () => void;
  showArrow?: boolean;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  home: "🏠",
  mail: "📧",
  message: "💬",
  calendar: "📅",
  file: "📄",
  user: "👤",
  shield: "🛡️",
  square: "⬜",
  type: "🔤",
  star: "⭐",
  card: "💳",
  layout: "📐",
  monitor: "🖥️",
  check: "✅",
  dots: "⋯",
  grid: "📊",
  chart: "📈",
  chevron: "›",
};

const SidebarItem = ({
  item,
  active,
  onClick,
  showArrow,
}: Props) => {
  const icon = ICON_MAP[item.icon || ""] || null;

  return (
    <div
      className={`${styles.item} ${active ? styles.active : ""}`}
      onClick={onClick}
    >
      <div className={styles.left}>
        {/* ICON */}
        {icon ? (
          <span className={styles.icon}>{icon}</span>
        ) : (
          <span className={styles.circleIcon} />
        )}

        <span className={styles.label}>{item.label}</span>
      </div>

      <div className={styles.right}>
        {item.badge && <span className={styles.badge}>{item.badge}</span>}
        {showArrow && <span className={styles.arrow}>›</span>}
      </div>
    </div>
  );
};

export default SidebarItem;
