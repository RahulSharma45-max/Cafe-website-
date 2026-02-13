import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About Cozy Café</h1>
        <p>Where every cup tells a story</p>
      </div>

      <div className="container">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2020, Cozy Café began with a simple dream: to create a space where 
            people could escape the hustle of daily life and enjoy exceptional coffee in a 
            warm, welcoming environment. What started as a small neighborhood coffee shop 
            has grown into a beloved community gathering place.
          </p>
          <p>
            Our founders, passionate coffee enthusiasts with years of experience in the 
            hospitality industry, wanted to bring together the best of both worlds: 
            premium quality beverages and a homely atmosphere that makes everyone feel welcome.
          </p>
        </section>

        <section className="mission-vision">
          <div className="mv-card">
            <h3>🎯 Our Mission</h3>
            <p>
              To serve exceptional coffee and create memorable experiences that bring 
              people together, one cup at a time.
            </p>
          </div>
          <div className="mv-card">
            <h3>👁️ Our Vision</h3>
            <p>
              To be the community's favorite gathering place, known for quality, 
              warmth, and genuine hospitality.
            </p>
          </div>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">☕</div>
              <h4>Quality First</h4>
              <p>We source only the finest ingredients and never compromise on quality.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h4>Community</h4>
              <p>We believe in building strong relationships with our customers and local community.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🌱</div>
              <h4>Sustainability</h4>
              <p>We're committed to environmentally friendly practices in everything we do.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">❤️</div>
              <h4>Passion</h4>
              <p>We love what we do, and it shows in every cup we serve.</p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Meet Our Team</h2>
          <p className="team-intro">
            Our dedicated team of baristas and staff are the heart of Cozy Café. 
            With years of combined experience and a genuine love for coffee, 
            they're here to make your visit special.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;