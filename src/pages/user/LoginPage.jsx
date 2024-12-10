import React, { useState } from 'react';
import './LoginPage.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../slices/userSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({email,password}));
    navigate('/home')
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>🍕 Pizza Shop Login 🍕</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <button type="submit" className="btn-login">Log In</button>
        </form>

        <p className="signup-text">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>

      <div className="pizza-image">
        <img 
          src="	https://milanoperth.co.uk/imgs/hero/Milano-Perth-Pizza.jpg" 
          alt="Delicious Pizza" 
        />
      </div>
    </div>
  );
};

export default Login;
