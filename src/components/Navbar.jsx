import { FaBars } from "react-icons/fa";

import styles from "./Navbar.module.css";

function Navbar({ onMenuClick }) {
  return (
    <header className={styles.navbar}>
      <div className={styles.left}>
        <button
          className={styles.menuButton}
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <FaBars />
        </button>

        <h3 className={styles.title}>Dashboard</h3>
      </div>

      <div className={styles.user}>
        <span className={styles.notification}>
          🔔
        </span>

        <span className={styles.name}>Amir</span>
      </div>
    </header>
  );
}

export default Navbar;