import React, { useState } from 'react';
import CartItem from '../../components/user/CartItem';
import './CartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Margherita Pizza', price: 12.99, quantity: 1, image: 'https://images.unsplash.com/photo-1601925187747-6e810dad6c1c' },
    { id: 2, name: 'Pepperoni Pizza', price: 15.49, quantity: 2, image: 'https://images.unsplash.com/photo-1576395031799-b5f1918c4a22' },
    { id: 3, name: 'BBQ Chicken Pizza', price: 18.99, quantity: 1, image: 'https://images.unsplash.com/photo-1600628422596-c9c0b45f6c43' },
  ]);

  const handleRemove = (id) => {
    const newCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(newCartItems);
  };

  const handleQuantityChange = (id, change) => {
    const updatedCartItems = cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + change } : item
    );
    setCartItems(updatedCartItems);
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart-page">
      <h1 className="cart-title">🛒 Your Pizza Cart</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem 
            key={item.id} 
            item={item} 
            onRemove={handleRemove} 
            onQuantityChange={handleQuantityChange} 
          />
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total Amount: ${totalAmount}</h2>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
