import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Cozy Café</h3>
            <p>Your favorite place for coffee and comfort</p>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>📍 123 Coffee Street, Café City, CC 12345</p>
            <p>📞 (555) 123-4567</p>
            <p>✉️ info@cozycafe.com</p>
          </div>

          <div className="footer-section">
            <h4>Hours</h4>
            <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
            <p>Saturday - Sunday: 8:00 AM - 9:00 PM</p>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘 Facebook</a>
              <a href="#" aria-label="Instagram">📷 Instagram</a>
              <a href="#" aria-label="Twitter">🐦 Twitter</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Cozy Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;