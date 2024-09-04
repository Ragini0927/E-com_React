import React from 'react';
import { Link } from 'react-router-dom';

const Header=({ user, setUser,handleLogout }) =>{
  return (
    <header className="bg-dark text-white py-3" >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{borderRadius:"10px"}}>
          <Link className="navbar-brand pl-3" to="/">E-commerce</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/ProductList">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Fruits">Fruits</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ProductCart">Cart</Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              { (
                <>
                  <li className="nav-item">
                    <span className="navbar-text" style={{float:"right"}}>Hello,{user}</span>
                  </li>
                  <li className="nav-item mr-2">
                    <button className="btn btn-outline-danger ml-2 float-right" onClick={handleLogout} style={{float:"right"}}>Logout</button>
                  </li>
                </>
              ) }
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
