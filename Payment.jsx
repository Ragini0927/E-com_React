import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link,useNavigate } from 'react-router-dom';


function Payment() {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Basic validation
    if (name && cardNumber && expiryDate && cvv) {
      // Simulate payment processing
      // Clear the form fields
      setName('');
      setCardNumber('');
      setExpiryDate('');
      setCvv('');
    } else {
      setPaymentStatus('Please fill out all fields.');
    }
  };
  const handleLogout = () => {
    navigate('/Logout');
  };
  const handlePayment01=() =>{
    if(name && cardNumber && expiryDate && cvv){
     handlePayment1();
     handlePayment2();
    }
    else{
        setPaymentStatus('Please fill out all fields.');
    }
  }

  const handlePayment1=()=>{
    navigate('/ProductList');
  }
  const handlePayment2=()=>{
    alert("Order Placed..")
  }
  return (
    <div>
      <Header handleLogout={handleLogout} />
      <div className="container">
        <h2>Payment Page</h2>

        {/* Payment Form */}
        <form className="mb-4">
          <div className="form-group">
            <label htmlFor="name">Name on Card</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              className="form-control"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 5678 9012 3456"
              maxLength="16"
              required
            />
          </div>
          <div className="form-row">
            <div className="col">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                className="form-control"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YY"
                maxLength="5"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                className="form-control"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
                maxLength="3"
                required
              />
            </div>
          </div>

          {/* Complete Payment Button */}
          <button
            className="btn btn-success btn-lg btn-block mb-5 mt-5" onClick={handlePayment01}
        >   Complete Payement
          </button>
        </form>

        {/* Payment Status
        {paymentStatus && <div className="alert alert-info">{paymentStatus}</div>} */}
      </div>
      <Footer />
    </div>
  );
}

export default Payment;
