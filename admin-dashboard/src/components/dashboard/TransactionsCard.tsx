import styles from "./DashboardCards.module.css";
import pp from "../../assets/pp.png";
const transactions = [
  { 
    Image: pp,
    name: "Paypal", 
    desc: "Received Money", 
    amount: "+$24,820", 
    up: true,
    bgColor: "#fdeff2"
  },
  { 
    icon: "💳", 
    name: "Credit Card", 
    desc: "Digital Ocean", 
    amount: "-$1,250", 
    up: false,
    bgColor: "#eff6f6"
  },
  { 
    icon: "💳", 
    name: "Mastercard", 
    desc: "Netflix", 
    amount: "-$99", 
    up: false,
    bgColor: "#fdf4f0"
  },
  { 
    icon: "💳", 
    name: "Wallet", 
    desc: "Mac'D", 
    amount: "-$82", 
    up: false,
    bgColor: "#f0f7f4"
  },
  { 
    icon: "🔄", 
    name: "Transfer", 
    desc: "Refund", 
    amount: "+$8,934", 
    up: true,
    bgColor: "#f0f7f4"
  },
  { 
    icon: "💳", 
    name: "Wallet", 
    desc: "Buy Apple Watch", 
    amount: "-$399", 
    up: false,
    bgColor: "#f4f0ff"
  },
];

export default function TransactionsCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3>Transactions</h3>
        <span className={styles.menu}>⋮</span>
      </div>

      {transactions.map((t, i) => (
        <div key={i} className={styles.transactionRow}>
          <div className={styles.leftContent}>
            <div 
              className={styles.iconBox}
              style={{ backgroundColor: t.bgColor }}
            >
              {t.icon}
            </div>
            <div>
              <p className={styles.bold}>{t.name}</p>
              <span className={styles.muted}>{t.desc}</span>
            </div>
          </div>

          <div className={styles.amount}>
            <span className={t.up ? styles.green : styles.red}>
              {t.amount}
            </span>
            <span className={`${styles.arrow} ${t.up ? styles.green : styles.red}`}>
              {t.up ? "▲" : "▼"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
