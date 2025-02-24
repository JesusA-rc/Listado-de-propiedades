import React from 'react'
import styles from './CardPropertie.module.css'

const CardPropertie = ({property}) => {
  return (
    <section className={styles.card}>
        <div className={styles.card_container}>
            <img src={property.image_propertie} alt="Propiedad" />
            <div className={styles.circle_img_container}>
                <img src={property.image_estate} alt="Estado" />
            </div>
            <div className={styles.card_info}>
                <h3>{property.title}</h3>
                <p>{property.description}</p>
                <p>Ubicación: {property.ubication}</p>
                <p>${property.price}</p>
            </div>
        </div>
    </section>
)}

export default CardPropertie