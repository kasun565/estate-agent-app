import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import './Checkout.css';

const Checkout = () => {
  const { cart, removeFromCart, confirmBooking } = useBooking();
  const navigate = useNavigate();

  const totalAmount = cart.reduce((sum, item) => sum + item.totalCost, 0);

  const handleConfirmBooking = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    confirmBooking();
    alert('Booking confirmed successfully!');
    navigate('/');
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button onClick={() => navigate('/')}>Browse Properties</button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.property.image} alt={item.property.title} />
                <div className="item-details">
                  <h3>{item.property.title}</h3>
                  <p>Check-in: {new Date(item.checkIn).toLocaleDateString()}</p>
                  <p>Check-out: {new Date(item.checkOut).toLocaleDateString()}</p>
                  <p className="cost">£{item.totalCost}</p>
                </div>
                <button 
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="checkout-summary">
            <h2>Total: £{totalAmount}</h2>
            <button className="confirm-btn" onClick={handleConfirmBooking}>
              Confirm Booking
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;