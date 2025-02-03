import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "./img/logo.png";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.navbarLogo}>
        <img src={logo} alt="Logo" />
      </div>

      {/* Links */}
      <ul className={`${styles.navbarLinks} ${isMobileMenuOpen ? styles.mobileActive : ""}`}>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#developers">Developers</a>
        </li>
        <li>
          <a href="#company">Company</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#changelog">Changelog</a>
        </li>
      </ul>

      {/* Join Button */}
      <div className={styles.rightMenu}>
        <div className={styles.buttonwrapper}>
          <button className={styles.joinBtn}>Join Waitlist</button>
        </div>
        {/* Hamburger Icon */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
