import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session or token
    // Redirect to login page
    navigate('/login');
  };

  return (
    <div>
         <header className="bg-dark text-white py-3">
        < div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{borderRadius:"10px"}}>
        <h4 style={{color:"black", margin:"auto", fontStyle:"revert-layer"}}>E-Commerce</h4>
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
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card shadow p-4 text-center" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="mb-4">You have been logged out!</h2>
        <button className="btn btn-primary btn-lg w-100" onClick={handleLogout}>
          Go to Login
        </button>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Logout;