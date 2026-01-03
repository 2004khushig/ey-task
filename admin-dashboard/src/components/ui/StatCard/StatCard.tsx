import styles from "./StatCard.module.css";

interface StatCardProps {
  title: string;
  value: string;
  icon: string;
  trend?: string;
  positive?: boolean;
}

const StatCard = ({ title, value, icon, trend, positive }: StatCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div>
          <p className={styles.title}>{title}</p>
          <h3 className={styles.value}>{value}</h3>
        </div>

        <div className={styles.iconBox}>{icon}</div>
      </div>

      {trend && (
        <p
          className={`${styles.trend} ${
            positive ? styles.positive : styles.negative
          }`}
        >
          {trend}
        </p>
      )}
    </div>
  );
};

export default StatCard;
