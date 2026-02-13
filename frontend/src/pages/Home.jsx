import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Cozy Café</h1>
          <p>Experience the perfect blend of comfort and flavor</p>
          <Link to="/reservation" className="cta-button">
            Reserve a Table
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">☕</div>
              <h3>Premium Coffee</h3>
              <p>Sourced from the finest beans around the world</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🥐</div>
              <h3>Fresh Pastries</h3>
              <p>Baked fresh daily by our expert bakers</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏡</div>
              <h3>Cozy Atmosphere</h3>
              <p>A warm and welcoming space for everyone</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="container">
          <h2>Our Story</h2>
          <p>
            At Cozy Café, we believe in creating moments that matter. 
            Since 2020, we've been serving not just coffee, but experiences 
            that warm the heart and soul.
          </p>
          <Link to="/about" className="learn-more">
            Learn More About Us →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;