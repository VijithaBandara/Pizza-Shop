import React, { useState } from 'react';
import './LoginPage.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from '../../slices/userSlice';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password === confirm){
      dispatch(signup({name,email,password}));
      navigate('/home')
    }else{
      alert("confirm is not match")
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>🍕 Pizza Shop Sign Up 🍕</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input 
              type="name" 
              id="name" 
              placeholder="Enter your name"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>

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

          <div className="input-group">
            <label htmlFor="password">Confirm Password</label>
            <input 
              type="password" 
              id="confirm" 
              placeholder="Confirm your password" 
              value={confirm} 
              onChange={(e) => setConfirm(e.target.value)} 
              required 
            />
          </div>

          <button type="submit" className="btn-login">Sign Up</button>
        </form>

        <p className="signup-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
