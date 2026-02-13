import React, { useState, useEffect } from 'react';
import { menuAPI } from '../services/api';
import './Menu.css';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Coffee', 'Pastry', 'Dessert', 'Food'];

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      setLoading(true);
      const response = await menuAPI.getAll();
      setMenuItems(response.data.data);
      setError(null);
    } catch (err) {
      setError('Failed to load menu items. Please try again later.');
      console.error('Error fetching menu:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  if (loading) {
    return (
      <div className="menu-page">
        <div className="container">
          <div className="loading">Loading menu...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="menu-page">
        <div className="container">
          <div className="error">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="menu-page">
      <div className="menu-hero">
        <h1>Our Menu</h1>
        <p>Discover our delicious offerings</p>
      </div>

      <div className="container">
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="menu-card">
              <div className="menu-image">
                <img 
                  src={item.imageUrl || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400'} 
                  alt={item.name}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400';
                  }}
                />
              </div>
              <div className="menu-content">
                <div className="menu-header">
                  <h3>{item.name}</h3>
                  <span className="category-badge">{item.category}</span>
                </div>
                <p className="description">{item.description}</p>
                <div className="menu-footer">
                  <span className="price">${item.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="no-items">
            No items found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;