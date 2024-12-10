import React, { useState } from 'react';
import CartItem from '../../components/user/CartItem';
import './CartPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { quantityChange, removeProduct } from '../../slices/productSlice';

const CartPage = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) =>state.product.cartItems);

  const handleRemove = (id) => {
    dispatch(removeProduct({ id }));
  };

  const handleQuantityChange = (id, change) => {
    dispatch(quantityChange({ id, change}));
  };

  //const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  const totalAmount = 111;
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
