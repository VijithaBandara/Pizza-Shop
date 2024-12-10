import React from 'react';
import './HomePage.css';
import { useSelector } from 'react-redux';

const HomePage = () => {

  const name = useSelector((state) => state.user.name);
  console.log(name)
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
