// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import ProductCart from './ProductCart';

// // function ProductList({ addToCart, removeFromCart }) {
// //   const [products, setProducts] = useState([]);
// //   const [cart, setCart] = useState([]);

// //   useEffect(() => {
// //     axios.get('http://localhost:3000/products')
// //       .then(response => setProducts(response.data))
// //       .catch(error => console.error('Error fetching products:', error));
// //   }, []);

// //   return (
// //     <div className="container" >
// //       <h2>E-commerce</h2>
// //        <nav class="navbar navbar-expand-lg navbar-light bg-light">
    
// //   <div style={{float: "right "}} >Welcome, User</div>

// //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
// //     <span class="navbar-toggler-icon"></span>
// //   </button>
// //   <div class="collapse navbar-collapse" id="navbarNav">
// //     <ul class="navbar-nav">
// //       <li class="nav-item active">
// //         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
// //       </li>
// //       <li class="nav-item">
// //         <a class="nav-link" href="#">About</a>
// //       </li>
// //       <li class="nav-item">
// //         <a class="nav-link" href={<ProductCart cart={cart}></ProductCart>}>Cart
// //         </a>
// //       </li>
// //       <li class="nav-item">
// //         <a class="nav-link disabled" href="#">Disabled</a>
// //       </li>
// //     </ul>
// //   </div>
// // </nav>
// //       <div className="row mt-2">
// //         {products.map(product => (
// //           <div className="col-md-4" key={product.id}>
// //             <div className="card mb-4">
// //               <img 
// //                 src={product.image} 
// //                 className="card-img-top" 
// //                 alt={product.name} 
// //                 style={{ height: '200px', objectFit: 'fit' }} 
// //               />
// //               <div className="card-body">
// //                 <h5 className="card-title">{product.title}</h5>
// //                 <p className="card-text">${product.price}</p>
// //                 <button 
// //                   className="btn btn-primary mr-2" 
// //                   onClick={() => addToCart(product)}>
// //                   Add
// //                 </button>
// //                 <button 
// //                   className="btn btn-danger" 
// //                   onClick={() => removeFromCart(product)}>
// //                   Remove
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default ProductList;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function ProductList({ user, addToCart, removeFromCart, cart }) {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3000/products')
//       .then(response => setProducts(response.data))
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   return (
//     <div className="container">
//       <div className="row">
//         {/* Left side for displaying user name */}
//         <div className="col-md-2">
//           <h4>Welcome, {user ? user.name : 'Guest'}</h4>
//         </div>

//         {/* Right side for product list */}
//         <div className="col-md-10">
//           <h2>E-commerce</h2>
//           <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav">
//                 <li className="nav-item active">
//                   <Link className="nav-link" to="/">Home</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/about">About</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/ProductCart">Cart</Link>
//                 </li>
//               </ul>
//             </div>
//           </nav>

//           <div className="row mt-2">
//             {products.map(product => (
//               <div className="col-md-4" key={product.id}>
//                 <div className="card mb-4">
//                   <img 
//                     src={product.image} 
//                     className="card-img-top" 
//                     alt={product.name} 
//                     style={{ height: '200px', objectFit: 'fit' }} 
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{product.title}</h5>
//                     <p className="card-text">${product.price}</p>
//                     <button 
//                       className="btn btn-primary mr-2" 
//                       onClick={() => addToCart(product)}>
//                       Add
//                     </button>
//                     <button 
//                       className="btn btn-danger" 
//                       onClick={() => removeFromCart(product)}>
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductList;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductList({ user, addToCart, removeFromCart, cart }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State to track search input
  const navigate = useNavigate();
 

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleLogout = () => {
    navigate('/Logout');
  };

  // Filtered products based on the search term
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <Header user={user} handleLogout={handleLogout} />

      <div className="container">
        {/* Search Bar */}
        <div className="row my-4">
          <div className="col-md-12">
            <input
              type="text"
              className="form-control"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Product List */}
        <div className="row">
          {filteredProducts.map(product => (
            <div className="col-md-4" key={product.id}>
              <div className="card mb-4">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'fit' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <button
                    className="btn btn-primary" style={{marginRight:"2px"}}
                    onClick={() => addToCart(product)}
                  >
                    Add
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(product)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ProductList;