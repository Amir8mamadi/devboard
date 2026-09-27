import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import styles from "./DashboardLayout.module.css";

function DashboardLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.layout}>
      <Sidebar
        isMenuOpen={isMenuOpen}
        onClose={closeMenu}
      />

      <main className={styles.main}>
        <Navbar
          onMenuClick={toggleMenu}
        />

        <div className={styles.content}>
          <Outlet />
        </div>
      </main>

      {isMenuOpen && (
        <div
          className={styles.overlay}
          onClick={closeMenu}
        />
      )}
    </div>
  );
}

export default DashboardLayout;