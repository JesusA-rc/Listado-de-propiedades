import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <h3>{property.title}</h3>
      <p>Tipo: {property.type}</p>
      <p>Precio: ${property.price}</p>
      <button>Ver más</button>
    </div>
  );
};

export default PropertyCard;