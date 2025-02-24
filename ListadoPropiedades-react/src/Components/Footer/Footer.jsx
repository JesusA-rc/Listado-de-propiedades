import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer_contact}>
            <h3>Contacto</h3>
            <ul>
                <li>
                    <img src="https://img.icons8.com/ios-filled/50/FFFFFF/marker.png" alt="ubicacion" />
                    <span>30 calle maestros Mexico,Mexico </span>
                </li>
                <li>
                    <img src="https://img.icons8.com/ios-filled/50/FFFFFF/phone.png" alt="telefono" />
                    <span>+52 000 000 000</span>
                </li>
                <li>
                    <img src="https://img.icons8.com/ios-filled/50/FFFFFF/email.png" alt="correo" />
                    <span>support@correo.com</span>
                </li>
            </ul>
        </div>
        <div className={styles.footer_about}>
            <h3>Sobre la empresa</h3>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit in aspernatur doloremque, quos 
                nobis dolor dolore facere voluptatem corporis harum inventore accusantium quas illum libero, 
                deserunt officia quae eveniet mollitia!
            </span>
            <div className={styles.footer_social}>
                <h3>Síguenos</h3>
                <div className={styles.social_icons}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook-new.png" alt="Facebook" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/50/FFFFFF/twitter.png" alt="Twitter" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-new.png" alt="Instagram" />
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer