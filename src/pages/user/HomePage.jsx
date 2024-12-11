import React, { useEffect, useRef } from 'react';
import './HomePage.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, getProducts } from '../../slices/productSlice';

const HomePage = () => {

  const dispatch = useDispatch();
  const pizzas = useRef(useSelector((state) => state.product.products));
  
  useEffect(() => {
    dispatch(fetchProducts())
    console.log("get")
    },[pizzas]);

  const name = useSelector((state) => state.user.name);

  return (
    <div className="home-page">
      <div className="overlay">
        <p>{name}</p>
        <h1>Welcome to Pizza Paradise – Savor the Taste of Perfection</h1>
        <h2>Hot, Fresh & Delicious – Delivered to Your Doorstep!</h2>
      </div>
    </div>
  )
}

export default HomePage;
function dispatch(arg0) {
  throw new Error('Function not implemented.');
}

