import React from 'react';
import '../../pages/user/CartPage.css';

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  const { id, name, price, quantity, image } = item;

  return (
    <div className="cart-item">
      <img src={image} alt={name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-name">{name}</h3>
        <p className="cart-item-price">${price}</p>
        <div className="quantity-controls">
          <button onClick={() => onQuantityChange(id, -1)} disabled={quantity <= 1}>-</button>
          <span>{quantity}</span>
          <button onClick={() => onQuantityChange(id, 1)}>+</button>
        </div>
      </div>
      <button className="remove-btn" onClick={() => onRemove(id)}>Remove</button>
    </div>
  );
};

export default CartItem;
