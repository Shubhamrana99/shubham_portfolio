import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageurl } from "../../utils";
import menuIcon from "../../assets/nav/menuIcon.png";
import closeIcon from "../../assets/nav/closeIcon.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        PortFolio
      </a>

      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          // src={
          //   menuOpen ? getImageurl("nav/closeIcon.png")
          //   : getImageurl("nav/menuIcon.png")
          // }

          src={menuOpen ? closeIcon : menuIcon}
          alt="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skill</a>
          </li>
          <li>
            <a href="#projects">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
