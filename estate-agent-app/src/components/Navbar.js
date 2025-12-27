import React from 'react';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import './Navbar.css';

const Navbar = () => {
  const { cart } = useBooking();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🏠 Property Rentals
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/checkout" className="nav-link cart-link">
              🛒 Cart ({cart.length})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;