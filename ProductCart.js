// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';


// function ProductCart({ cart }) {
//   const totalAmount = cart.reduce((total, product) => total + product.price, 0);

//   return (
//     <div className="container">
//       <h2>Your Cart</h2>
//       {cart.length === 0 ? (
//         <p>No items in the cart</p>
//       ) : (
//         <ul className="list-group mb-3">
//           {cart.map(product => (
//             <li className="list-group-item d-flex justify-content-between lh-condensed" key={product.id}>
//               <div>
//               <img 
//                 src={product.image} 
//                 className="card-img-top" 
//                 alt={product.name} 
//                 style={{ height: '200px', objectFit: 'fit' }} 
//               />
//                 <h6 className="my-0">{product.title}</h6>
//               </div>
//               <span className="text-muted">${product.price}</span>
//             </li>
//           ))}
         
//         </ul>
//       )}
//       <h4>Total: ${totalAmount}</h4>
//       <button className="btn btn-success btn-lg btn-block">Proceed to Payment</button>
//     </div>
//   );
// }

// export default ProductCart;



import { Link, useNavigate } from 'react-router-dom';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';

function ProductCart({ cart, setCart }) {
  // Calculate total amount by ensuring that product.quantity is always defined
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const totalAmount = cart.reduce(
    (total, product) => total + product.price * (product.quantity || 1),
    0
  );

  // Handle increase in product quantity
  const handleIncreaseQuantity = (productId) => {
    const updatedCart = cart.map(product =>
      product.id === productId 
        ? { ...product, quantity: (product.quantity || 1) + 1 }
        : product
    );
    setCart(updatedCart);
  };

  // Handle decrease in product quantity
  const handleDecreaseQuantity = (productId) => {
    const updatedCart = cart.map(product =>
      product.id === productId && product.quantity > 0
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setCart(updatedCart);
  };
  const handleLogout = () => {
    navigate('/Logout');
  };

  const handleCheckout = (product)=>{
    if(product.length>0)
      navigate('/Checkout')
    else
    alert("Please add some Items in the Cart before Checkout......")

  }

  return (
    <div>
      <Header handleLogout={handleLogout} />
    <div className="container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul className="list-group mb-3">
          {cart.map(product => (
            <li className="list-group-item d-flex justify-content-between lh-condensed" key={product.id}>
              <div>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'fit' }}
                />
                <h6 className="my-0">{product.title}</h6>
                <div>
                  <button className="btn btn-outline-primary" onClick={() => handleDecreaseQuantity(product.id)}>-</button>
                  <span className="mx-2">{product.quantity || 1}</span>
                  <button className="btn btn-outline-primary" onClick={() => handleIncreaseQuantity(product.id)}>+</button>
                </div>
              </div>
              <span className="text-muted">${(product.price * (product.quantity || 1)).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
      <h4>Total: ${totalAmount.toFixed(2)}</h4>
      <button className="btn btn-success btn-lg mb-4" onClick={() => handleCheckout(cart)}>
        Checkout
      </button>
    </div>
    <Footer/>
    </div>
  );
}

export default ProductCart;