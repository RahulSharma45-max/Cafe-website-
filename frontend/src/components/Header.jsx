import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <h1>☕ Cozy Café</h1>
          </Link>

          <button className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/menu" onClick={closeMenu}>Menu</Link>
            <Link to="/about" onClick={closeMenu}>About</Link>
            <Link to="/reservation" onClick={closeMenu}>Reservation</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
            <Link to="/location" onClick={closeMenu}>Location</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;