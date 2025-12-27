import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import propertiesData from '../json/properties.json';
import './PropertyDetails.css';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const properties = propertiesData.properties || [];
  const property = properties.find(p => p.id === id);

  if (!property) {
    return <div className="not-found">Property not found</div>;
  }

  return (
    <div className="property-details">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="details-content">
        <div className="image-section">
          <img src={property.image || property.picture} alt={property.title || property.type} />
        </div>
        <div className="info-section">
          <h1>{property.title || `${property.type} in ${property.location}`}</h1>
          <p className="location">📍 {property.location}</p>
          <p className="bedrooms">🛏️ {property.bedrooms} Bedrooms</p>
          <p className="price">£{property.price} / night</p>
          {property.tenure && <p className="tenure">Tenure: {property.tenure}</p>}
          <div className="description">
            <h3>Description</h3>
            <p dangerouslySetInnerHTML={{ __html: property.description }}></p>
          </div>
          {property.amenities && property.amenities.length > 0 && (
            <div className="amenities">
              <h3>Amenities</h3>
              <ul>
                {property.amenities.map((amenity, index) => (
                  <li key={index}>✓ {amenity}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="booking-section">
          <BookingForm property={property} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;