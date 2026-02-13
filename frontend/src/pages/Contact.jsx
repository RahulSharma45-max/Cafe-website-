import React, { useState } from 'react';
import { contactAPI } from '../services/api';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await contactAPI.sendMessage(formData);
      
      setStatus({
        loading: false,
        success: true,
        error: null
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: null });
      }, 5000);

    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: error.response?.data?.message || 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </div>

      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Have a question or feedback? Fill out the form and we'll get back to you 
              as soon as possible.
            </p>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h4>Address</h4>
                <p>123 Coffee Street, Café City, CC 12345</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p>(555) 123-4567</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>info@cozycafe.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🕐</div>
              <div>
                <h4>Hours</h4>
                <p>Mon-Fri: 7:00 AM - 8:00 PM</p>
                <p>Sat-Sun: 8:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                  maxLength={100}
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  maxLength={1000}
                  rows={6}
                  placeholder="Your message..."
                />
              </div>

              {status.success && (
                <div className="success-message">
                  ✓ Thank you for contacting us! We'll get back to you soon.
                </div>
              )}

              {status.error && (
                <div className="error-message">
                  ✗ {status.error}
                </div>
              )}

              <button 
                type="submit" 
                className="submit-btn"
                disabled={status.loading}
              >
                {status.loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;