import React from 'react';
import './Location.css';

const Location = () => {
  // Café coordinates (example: Times Square, New York)
  const cafeLocation = {
    lat: 40.758896,
    lng: -73.985130,
    name: "Cozy Café",
    address: "123 Coffee Street, Café City, CC 12345"
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${cafeLocation.lat},${cafeLocation.lng}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${cafeLocation.lat},${cafeLocation.lng}`;

  return (
    <div className="location-page">
      <div className="location-hero">
        <h1>Visit Us</h1>
        <p>Find your way to Cozy Café</p>
      </div>

      <div className="container">
        <div className="location-content">
          <div className="location-info">
            <h2>Our Location</h2>
            
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div>
                <h3>Address</h3>
                <p>{cafeLocation.address}</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">🕐</div>
              <div>
                <h3>Opening Hours</h3>
                <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                <p>Saturday - Sunday: 8:00 AM - 9:00 PM</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <div>
                <h3>Contact</h3>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@cozycafe.com</p>
              </div>
            </div>

            <div className="action-buttons">
              <a 
                href={directionsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="directions-btn"
              >
                🗺️ Get Directions
              </a>
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="maps-btn"
              >
                📍 Open in Google Maps
              </a>
            </div>
          </div>

          <div className="map-container">
            <iframe
              title="Cozy Café Location"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '15px' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${cafeLocation.lat},${cafeLocation.lng}&zoom=15`}
            />
            
            <div className="map-fallback">
              <p>
                <strong>Note:</strong> To display the interactive map, you need to:
              </p>
              <ol>
                <li>Get a Google Maps API key from <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer">Google Cloud Console</a></li>
                <li>Enable "Maps Embed API"</li>
                <li>Replace <code>YOUR_GOOGLE_MAPS_API_KEY</code> in Location.jsx with your actual API key</li>
              </ol>
              <p>Meanwhile, you can:</p>
              <div className="fallback-buttons">
                <a 
                  href={googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="fallback-btn"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="parking-info">
          <h3>🅿️ Parking Information</h3>
          <p>
            Street parking is available nearby. We also have partnerships with local 
            parking garages within a 2-minute walk from our café.
          </p>
        </div>

        <div className="transport-info">
          <h3>🚇 Public Transportation</h3>
          <p>
            <strong>Subway:</strong> N, Q, R, W lines - Times Square Station (2 min walk)
          </p>
          <p>
            <strong>Bus:</strong> M7, M20, M104 - Stop at 42nd Street
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;