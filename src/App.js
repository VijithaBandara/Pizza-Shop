import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/user/HomePage.jsx'
import Products from './pages/user/ProductsPage.jsx'
import Cart from './pages/user/CartPage.jsx'
import Login from './pages/user/LoginPage.jsx';
import SignUp from './pages/user/SignUpPage.jsx';
import MainLayout from './components/common/MainLayout.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to='/home'/>} />
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
