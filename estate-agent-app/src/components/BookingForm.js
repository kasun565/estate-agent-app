import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import './BookingForm.css';

const BookingForm = ({ property }) => {
  const { addToCart, calculateTotalCost } = useBooking();
  const [dates, setDates] = useState({
    checkIn: '',
    checkOut: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dates.checkIn || !dates.checkOut) {
      alert('Please select both check-in and check-out dates');
      return;
    }
    if (new Date(dates.checkIn) >= new Date(dates.checkOut)) {
      alert('Check-out date must be after check-in date');
      return;
    }
    addToCart(property, dates);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setDates({ checkIn: '', checkOut: '' });
  };

  const totalCost = dates.checkIn && dates.checkOut ? 
    calculateTotalCost(property.price, dates.checkIn, dates.checkOut) : 0;

  return (
    <div className="booking-form">
      <h3>Book this property</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Check-in Date:</label>
          <input
            type="date"
            value={dates.checkIn}
            onChange={(e) => setDates({ ...dates, checkIn: e.target.value })}
            min={new Date().toISOString().split('T')[0]}
            required
          />
        </div>
        <div className="form-group">
          <label>Check-out Date:</label>
          <input
            type="date"
            value={dates.checkOut}
            onChange={(e) => setDates({ ...dates, checkOut: e.target.value })}
            min={dates.checkIn || new Date().toISOString().split('T')[0]}
            required
          />
        </div>
        {totalCost > 0 && (
          <div className="total-cost">
            <p>Total Cost: £{totalCost}</p>
          </div>
        )}
        <button type="submit">Add to Cart</button>
      </form>
      {showSuccess && <div className="success-message">Added to cart successfully!</div>}
    </div>
  );
};

export default BookingForm;