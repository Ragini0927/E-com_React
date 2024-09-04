import React, { useState, useEffect } from 'react';
import './App.css';
import ProductList from './ProductList.jsx';
import ProductCart from './ProductCart.js';
import Fruits from './Fruits.jsx';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import Login from './Login.js';
import Logout from './Logout.jsx';
import Payment from './Payment.jsx';
import Checkout from './Checkout.jsx';
import { About } from './About.jsx';
import Header from './Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [userName, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (!cart.includes(product)) {
      setCart([...cart, product]);
    }
  };

  // Update user state when userName changes
  useEffect(() => {
    setUser(userName);
  }, [userName]);

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Header" element={<Header user={user}/>} />
          <Route path="/login" element={<Login userName={userName} setUsername={setUsername} />} />
          <Route path="/ProductList" element={<ProductList user={user} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />} />
          <Route path="/ProductCart" element={<ProductCart cart={cart} setCart={setCart} />} />
          <Route path="/Logout" element={<Logout setUser={setUser} />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Checkout" element={<Checkout />} />
          {/* <Route path="/Payment1" element={<Payment1 />} /> */}
          <Route path="/About" element={<About />} />
          <Route path="/Fruits" element={<Fruits />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
