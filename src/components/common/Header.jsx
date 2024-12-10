import React, { useEffect } from 'react';
import Navbar from '../user/Navbar';
import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { quantityCount } from '../../slices/productSlice';

const Header = () => {

  const count = useSelector((state) => state.product.quantityCount);
  const cartItems = useSelector((state) => state.product.cartItems);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(quantityCount());
  }, [cartItems])

  return (
    <header>
      <div className="logo">PizzaShop</div>
      <Navbar/>
      <div className="cart-icon">🛒<span className='count'>{count}</span></div>
    </header>
  );
};

export default Header;

