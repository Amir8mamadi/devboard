import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaTasks,
  FaProjectDiagram,
  FaUsers,
  FaCog,
  FaTimes,
} from "react-icons/fa";

import styles from "./Sidebar.module.css";

function Sidebar({ isMenuOpen, onClose }) {
  return (
    <aside
      className={`${styles.sidebar} ${
        isMenuOpen ? styles.open : ""
      }`}
    >
      <div className={styles.sidebarHeader}>
        <h2 className={styles.logo}>DevBoard</h2>

        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close menu"
        >
          <FaTimes />
        </button>
      </div>

      <nav className={styles.nav}>
        <NavLink
          to="/"
          end
          onClick={onClose}
          className={({ isActive }) =>
            `${styles.link} ${
              isActive ? styles.active : ""
            }`
          }
        >
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/tasks"
          onClick={onClose}
          className={({ isActive }) =>
            `${styles.link} ${
              isActive ? styles.active : ""
            }`
          }
        >
          <FaTasks />
          <span>Tasks</span>
        </NavLink>

        <NavLink
          to="/projects"
          onClick={onClose}
          className={({ isActive }) =>
            `${styles.link} ${
              isActive ? styles.active : ""
            }`
          }
        >
          <FaProjectDiagram />
          <span>Projects</span>
        </NavLink>

        <NavLink
          to="/team"
          onClick={onClose}
          className={({ isActive }) =>
            `${styles.link} ${
              isActive ? styles.active : ""
            }`
          }
        >
          <FaUsers />
          <span>Team</span>
        </NavLink>

        <NavLink
          to="/settings"
          onClick={onClose}
          className={({ isActive }) =>
            `${styles.link} ${
              isActive ? styles.active : ""
            }`
          }
        >
          <FaCog />
          <span>Settings</span>
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;