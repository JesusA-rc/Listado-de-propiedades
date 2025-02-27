import React, { useEffect } from 'react'
import styles from './PropertyDetail.module.css'
import Header from '../../Components/Header/Header'
import propertiesData from '/src/data/properties';
import { useParams } from 'react-router-dom';
import {Navigate } from 'react-router-dom';

const PropertyDetail = () => {
  const {id} = useParams();
  const propertyId = parseInt(id);
  const property = propertiesData.find(property => property.id === propertyId);
  if (!property) {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={styles.propertyDetail}>
      <Header></Header>
      <div className={styles.propertyDetail_container}>
        <div className={styles.grid_properties}>
          <div className={styles.grid_main_image}>
            <img src={property.image_propertie} alt="" />
          </div>
          <div className={styles.grid_right_img}>
            <img src={property.image_propertie} alt="" />
            <img src={property.image_propertie} alt="" />
          </div>
        </div>

        <div className={styles.propertyDetail_info}>
          <div className={styles.main_info}>
            <h2>{property.title}</h2>
            <p>{property.description}</p>
            <p>Ubicacion: {property.ubication}</p>
            <p>contacto: {property.contact}</p>
            <p>${property.price}</p>
          </div>

          <div className={styles.propertyDetail_info_properties}>
            {
              property.typeId === 1 ?
                <div className={styles.property_list_info}>
                  <ul>
                    <li>
                      <p>Habitaciones:</p>
                      <p>{property.rooms}</p>
                    </li>
                    <li>
                      <p>Baños:</p>
                      <p>{property.bathrooms}</p>
                    </li>
                    <li>
                      <p>Estacionamiento:</p>
                      <p>{property.parking}</p>
                    </li>
                    <li>
                      <p>Patio:</p>
                      <p>{property.yard ? 'si' : 'no'}</p>
                    </li>
                    <li>
                      <p>Amueblado:</p>
                      <p>{property.furnished ? 'si' : 'no'}</p>
                    </li>
                    <li>
                      <p>Seguridad:</p>
                      <p>{property.security ? 'si' : 'no'}</p>
                    </li>
                    <li>
                      <p>Servicios:</p>
                      <p>{property.services ? 'si' : 'no'}</p>
                    </li>
                    <li>
                      <p>Alberca:</p>
                      <p>{property.pool ? 'si' : 'no'}</p>
                    </li>
                    <li>
                      <p>Pisos: </p>
                      <p>{property.floors}</p>
                    </li>
                  </ul>
                </div>
              : 
                <div className={styles.property_list_info}>
                  <ul>
                    <li>
                      <p>Superficie: </p>
                      <p>{property.size} m2</p>
                    </li>
                    <li>
                      <p>Capacidad: </p>
                      <p>{property.capacity} personas</p>
                    </li>
                    <li>
                      <p>Parking</p>
                      <p>{property.parking ? 'si' : 'no'}</p>
                    </li>
                    <li>
                      <p>Servicios</p>
                      <p>{property.services ? 'si' : 'no'}</p>
                    </li>
                    <li>
                      <p>Seguridad</p>
                      <p>{property.security ? 'si' : 'no'}</p>
                    </li>
                    <li>
                      <p>Pisos</p>
                      <p>{property.floors}</p>
                    </li>
                    <li>
                      <p>Amueblado</p>
                      <p>{property.furnished ? 'si' : 'no'}</p>
                    </li>
                  </ul>
                </div>
            }
          </div>
        </div>
      </div>

    </section>
  )
}

export default PropertyDetail