import styles from "./DashboardCards.module.css";

export default function UpgradePlanCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3>Upgrade Your Plan</h3>
        <span className={styles.menu}>⋮</span>
      </div>

      <p className={styles.upgradeText}>
        Please make the payment to start enjoying all the features of our premium 
        plan as soon as possible.
      </p>

      <div className={styles.planBox}>
        <div className={styles.planLeft}>
          <div className={styles.planIcon}>👛</div>
          <div>
            <p className={styles.bold}>Platinum</p>
            <span className={styles.planLabel}>Upgrade Plan</span>
          </div>
        </div>
        <p className={styles.price}>$5,250<span>/Year</span></p>
      </div>

      <p className={styles.sectionTitle}>Payment details</p>

      <div className={styles.paymentCard}>
        <div className={styles.cardLeft}>
          <img src="https://via.placeholder.com/36x22/ff0000/ffffff?text=Visa" alt="Visa" className={styles.cardLogo} />
          <span>2566 **** **** 9808</span>
        </div>
        <div className={styles.cvvBox}>
          <span className={styles.cvvLabel}>CVV</span>
          <input className={styles.cvvInput} placeholder="256" />
        </div>
      </div>

      <div className={styles.paymentCard}>
        <div className={styles.cardLeft}>
          <img src="https://via.placeholder.com/36x22/0066cc/ffffff?text=MC" alt="Mastercard" className={styles.cardLogo} />
          <span>2566 **** **** 9808</span>
        </div>
        <div className={styles.cvvBox}>
          <span className={styles.cvvLabel}>CVV</span>
          <input className={styles.cvvInput} placeholder="256" />
        </div>
      </div>

      <p className={styles.link}>Add Payment Method</p>

      <input
        className={styles.input}
        placeholder="Email Address"
      />

      <button className={styles.primaryBtn}>
        CONTACT NOW
      </button>
    </div>
  );
}
