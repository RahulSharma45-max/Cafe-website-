import React, { useState } from 'react';
import { reservationAPI } from '../services/api';
import './Reservation.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    numberOfPeople: 2
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
      const response = await reservationAPI.create(formData);
      
      setStatus({
        loading: false,
        success: true,
        error: null
      });

      // Reset form
      setFormData({
        name: '',
        phone: '',
        date: '',
        time: '',
        numberOfPeople: 2
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: null });
      }, 5000);

    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: error.response?.data?.message || 'Failed to create reservation. Please try again.'
      });
    }
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="reservation-page">
      <div className="reservation-hero">
        <h1>Reserve a Table</h1>
        <p>Book your perfect spot at Cozy Café</p>
      </div>

      <div className="container">
        <div className="reservation-content">
          <div className="reservation-info">
            <h2>Why Reserve?</h2>
            <p>
              Skip the wait and guarantee your favorite spot. Whether you're planning 
              a business meeting, a date, or a casual catch-up with friends, we'll make 
              sure your table is ready.
            </p>

            <div className="reservation-features">
              <div className="feature">
                <div className="feature-icon">⏰</div>
                <div>
                  <h4>Flexible Timing</h4>
                  <p>Choose your preferred time slot</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">👥</div>
                <div>
                  <h4>Group Friendly</h4>
                  <p>Tables for 1-20 people</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">✓</div>
                <div>
                  <h4>Instant Confirmation</h4>
                  <p>Get confirmed immediately</p>
                </div>
              </div>
            </div>

            <div className="hours-info">
              <h3>Opening Hours</h3>
              <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
              <p>Saturday - Sunday: 8:00 AM - 9:00 PM</p>
            </div>
          </div>

          <div className="reservation-form-container">
            <form onSubmit={handleSubmit} className="reservation-form">
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
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10,15}"
                  placeholder="1234567890"
                  title="Please enter 10-15 digits"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Date *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={today}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="time">Time *</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="numberOfPeople">Number of People *</label>
                <select
                  id="numberOfPeople"
                  name="numberOfPeople"
                  value={formData.numberOfPeople}
                  onChange={handleChange}
                  required
                >
                  {[...Array(20)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} {i === 0 ? 'Person' : 'People'}
                    </option>
                  ))}
                </select>
              </div>

              {status.success && (
                <div className="success-message">
                  ✓ Reservation confirmed! We look forward to seeing you.
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
                {status.loading ? 'Reserving...' : 'Reserve Table'}
              </button>

              <p className="form-note">
                * All fields are required. You'll receive a confirmation shortly.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;