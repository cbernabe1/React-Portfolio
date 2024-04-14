import React, {useState} from 'react'
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../fetchImage";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className={styles.navbar}>
        <h1 className={styles.title}>Portfolio</h1>
        <ul className={`${styles.list} ${openMenu && styles.openMenu}`}>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <img className={styles.menu} src={getImageUrl("icons/menu.png")} onClick={()=>setOpenMenu(!openMenu)} alt="menu icon" />
    </nav>
  )
}
