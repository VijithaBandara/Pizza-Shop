import React from 'react';
import Navbar from '../user/Navbar';
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="logo">PizzaShop</div>
      <Navbar/>
      <div className="cart-icon">🛒</div>
    </header>
  );
};

export default Header;
