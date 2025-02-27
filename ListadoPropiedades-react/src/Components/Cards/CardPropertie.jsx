import React from 'react'
import styles from './CardPropertie.module.css'
import { useNavigate } from 'react-router-dom'

const CardPropertie = ({property}) => {
    const navigate = useNavigate();
    const handleClickNavigate = () => {
        navigate(`/property/${property.id}`);
    }


  return (
    <section className={styles.card}>
        <div className={styles.card_container} onClick={handleClickNavigate}>
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