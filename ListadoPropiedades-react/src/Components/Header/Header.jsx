import React, { useState } from 'react'
import logo from '/src/assets/logo.jpg'
import styles from './Header.module.css'

const Header = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const toggleMenu = async()=>{
        setIsMenuOpen(!isMenuOpen);
    }

  return (
    <nav class={styles.navbar}>
        <div class={styles.logo}>
            <img src={logo} alt=""/>
            <span>Properties</span>
        </div>
        <ul className={`${styles.nav_links} ${isMenuOpen ? styles.active : ''}`}>
            <li><a href="#">Commercial</a></li>
            <li><a href="#">Residencial</a></li>
        </ul>
        <div class={styles.menu_icon} onClick={()=>toggleMenu()}>
            &#9776;
        </div>
    </nav>
  )
}

export default Header