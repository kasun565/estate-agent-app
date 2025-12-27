import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

export const BookingProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const calculateTotalCost = (pricePerNight, checkIn, checkOut) => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return nights * pricePerNight;
  };

  const addToCart = (property, dates) => {
    const totalCost = calculateTotalCost(property.price, dates.checkIn, dates.checkOut);
    setCart([...cart, { 
      id: Date.now(), 
      property, 
      checkIn: dates.checkIn, 
      checkOut: dates.checkOut, 
      totalCost 
    }]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const confirmBooking = () => {
    setCart([]);
  };

  return (
    <BookingContext.Provider value={{ cart, addToCart, removeFromCart, confirmBooking, calculateTotalCost }}>
      {children}
    </BookingContext.Provider>
  );
};
