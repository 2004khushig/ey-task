import styles from "./Header.module.css";
import SearchIcon from "../../../assets/search.svg";
import america from "../../../assets/america.svg";
import moon from "../../../assets/moon.svg";
import bell from "../../../assets/bell.svg";


const Header = () => {
    return (
        <header className={styles.header}>
            {/* LEFT */}
            <div className={styles.left}>
                <button className={styles.iconBtn}>
                    <img src={SearchIcon} alt="Search" />
                </button>
            </div>

            {/* RIGHT */}
            <div className={styles.right}>
                <button className={styles.iconBtn}>
                    <img
                        src={america}
                        alt="country"
                        className={styles.flag}
                    />
                </button>

                <button className={styles.iconBtn}>
                    <img src={moon} alt="theme" />
                </button>
                <button className={styles.iconBtn}>
                    <img src={bell} alt="notifications" />
                </button>

                <div className={styles.avatarWrapper}>
                    <img
                        src="https://i.pravatar.cc/40"
                        alt="User avatar"
                        className={styles.avatar}
                    />
                    <span className={styles.status} />
                </div>
            </div>
        </header>
    );
};

export default Header;
