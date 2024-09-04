import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Login = ({ userName,setUsername }) => {
  const [error, setError] = useState('');
  const [password,setpassword]=useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/Logout');
  };

  const handleLogin = (e) => {
    e.preventDefault();
      if(!userName)
      {
        setError("Email can not be empty")
      }
      else{
      if (userName === 'ragini@gmail.com' && password === '123') {
        setUsername(userName)
        navigate('/ProductList');
     } else {
      alert('Invalid credentials');
    }
  }
  };

  return (
    <div>
      <header className="bg-dark text-white py-3">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ borderRadius: "10px" }}>
            <h4 style={{ color: "black", margin: "auto", fontStyle: "revert-layer" }}>E-Commerce</h4>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
            </button>
          </nav>
        </div>
      </header>
      <div className='login-container'>
        <h2>Login Page</h2>
        <form onSubmit={handleLogin} className='login-form'>
          <div className='login-from input'>
            <label>Username:</label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className='login-form input'>
            <label>Password:</label>
            <input
              type="password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <button type="submit" className='login-form button'>Login</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
