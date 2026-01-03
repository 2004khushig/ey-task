import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.left}>
        © 2022, Made with <span className={styles.heart}>♥</span> by{" "}
        <span className={styles.brand}>ThemeSelection</span>
      </p>

      <div className={styles.right}>
        <a href="#">License</a>
        <a href="#">More Themes</a>
        <a href="#">Documentation</a>
        <a href="#">Support</a>
      </div>
    </footer>
  );
};

export default Footer;
