import styles from "./CafeBadilico.module.css";

const CafeBadilico = () => {
  return (
    <div className={styles.card}>
      {/* IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
        alt="Cafe"
        className={styles.image}
      />

      <div className={styles.body}>
        {/* HEADER */}
        <div className={styles.header}>
          <h3 className={styles.title}>Cafe Badilico</h3>
          <span className={styles.menu}>⋮</span>
        </div>

        {/* RATING */}
        <div className={styles.rating}>
          <span className={styles.stars}>★★★★☆</span>
          <span className={styles.ratingText}>4 Star (12.4k)</span>
        </div>

        {/* CATEGORY */}
        <p className={styles.category}>Italian Cafe</p>

        {/* DESCRIPTION */}
        <p className={styles.description}>
          The refrigerated dairy aisle of your local grocery store can be a great
          source tasty, convenient selections for your.
        </p>

        <hr className={styles.divider} />

        {/* AVAILABILITY */}
        <p className={styles.subtitle}>Tonight’s availability</p>

        <div className={styles.times}>
          <span>5:30PM</span>
          <span>7:00PM</span>
          <span>7:15PM</span>
        </div>

        {/* ACTION */}
        <button className={styles.book}>BOOK NOW</button>
      </div>
    </div>
  );
};

export default CafeBadilico;
