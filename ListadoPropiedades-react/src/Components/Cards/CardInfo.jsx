import React from 'react'
import styles from './CardInfo.module.css'

const CardInfo = ({titulo,descripcion,urlImg}) => {
  return (
    <section className={styles.card_info}>
        <div className={styles.card_info_container}>
            <img src={urlImg} alt="" />
            <div className={styles.card_info_text}>
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
            </div>
        </div>
    </section>
  )
}

export default CardInfo