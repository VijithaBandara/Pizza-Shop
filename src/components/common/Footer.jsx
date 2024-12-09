import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 PizzaShop. All Rights Reserved.</p>
        <p>Developed by YourName</p>
        <div className="social-icons">
          <a href="#" aria-label="Facebook">🌐</a>
          <a href="#" aria-label="Twitter">🐦</a>
          <a href="#" aria-label="Instagram">📸</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
