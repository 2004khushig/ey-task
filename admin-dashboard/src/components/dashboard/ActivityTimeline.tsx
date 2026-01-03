import styles from "./ActivityTimeline.module.css";

const activities = [
  {
    color: "red",
    title: "8 Invoices have been paid",
    desc: "Invoices have been paid to the company.",
    meta: "invoice.pdf",
    date: "Wednesday",
  },
  {
    color: "purple",
    title: "Create a new project for client 😎",
    desc: "Invoices have been paid to the company.",
    meta: "John Doe (Client)",
    date: "April, 18",
    avatar: true,
  },
  {
    color: "blue",
    title: "Order #37745 from September",
    desc: "Invoices have been paid to the company.",
    date: "January, 10",
  },
];

const ActivityTimeline = () => {
  return (
    <div className={styles.card}>
      {/* Image Header */}
      <img
        src="https://images.unsplash.com/photo-1544148103-0773bf10d330"
        alt="banner"
        className={styles.banner}
      />

      <h3 className={styles.title}>Activity Timeline</h3>

      <div className={styles.timeline}>
        {activities.map((item, i) => (
          <div key={i} className={styles.item}>
            <span className={`${styles.dot} ${styles[item.color]}`} />

            <div className={styles.content}>
              <p className={styles.itemTitle}>{item.title}</p>
              <p className={styles.desc}>{item.desc}</p>

              {item.meta && (
                <div className={styles.meta}>
                  {item.avatar ? (
                    <img
                      src="https://i.pravatar.cc/30"
                      alt="avatar"
                      className={styles.avatar}
                    />
                  ) : (
                    <span className={styles.pdf}>PDF</span>
                  )}
                  <span>{item.meta}</span>
                </div>
              )}
            </div>

            <span className={styles.date}>{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityTimeline;
