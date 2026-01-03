import { useState } from "react";
import styles from "./Sidebar.module.css";
import { sidebarSections } from "../../../data/sidebar";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const [activeId, setActiveId] = useState<string>("analytics");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    dashboard: true, // default open
  });

  const toggle = (id: string) => {
    setOpenIds(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <aside className={styles.sidebar}>
      {sidebarSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className={styles.section}>
          {section.title && (
            <p className={styles.sectionTitle}>{section.title}</p>
          )}

          {section.items.map(item => {
            const hasChildren = !!item.children?.length;
            const isOpen = openIds[item.id];

            return (
              <div key={item.id}>
                {/* PARENT ITEM */}
                <SidebarItem
                  item={item}
                  active={activeId === item.id}
                  onClick={() =>
                    hasChildren ? toggle(item.id) : setActiveId(item.id)
                  }
                  showArrow={hasChildren}
                />

                {/* CHILDREN */}
                {hasChildren && isOpen && (
                  <div className={styles.children}>
                    {item.children!.map(child => (
                      <SidebarItem
                        key={child.id}
                        item={child}
                        active={activeId === child.id}
                        onClick={() => setActiveId(child.id)}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
