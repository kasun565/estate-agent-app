import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import PropertyList from '../components/PropertyList';
import propertiesData from '../json/properties.json';
import './Home.css';

const Home = () => {
  const [properties, setProperties] = useState(propertiesData.properties || []);
  const [filteredProperties, setFilteredProperties] = useState(propertiesData.properties || []);

  const handleSearch = (filters) => {
    let filtered = properties;

    // Filter by location
    if (filters.location) {
      filtered = filtered.filter(p => 
        p.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Filter by type
    if (filters.type) {
      filtered = filtered.filter(p => p.type && p.type.toLowerCase() === filters.type.toLowerCase());
    }

    // Filter by postcode area
    if (filters.postcode) {
      filtered = filtered.filter(p => 
        p.postcode.toLowerCase().startsWith(filters.postcode.toLowerCase())
      );
    }

    // Filter by minimum bedrooms
    if (filters.minBedrooms) {
      filtered = filtered.filter(p => p.bedrooms >= parseInt(filters.minBedrooms));
    }

    // Filter by maximum bedrooms
    if (filters.maxBedrooms) {
      filtered = filtered.filter(p => p.bedrooms <= parseInt(filters.maxBedrooms));
    }

    // Filter by minimum price
    if (filters.minPrice) {
      filtered = filtered.filter(p => p.price >= parseInt(filters.minPrice));
    }

    // Filter by maximum price
    if (filters.maxPrice) {
      filtered = filtered.filter(p => p.price <= parseInt(filters.maxPrice));
    }

    // Filter by date added (after specified date)
    if (filters.dateFrom) {
      filtered = filtered.filter(p => new Date(p.dateAdded) >= new Date(filters.dateFrom));
    }

    // Filter by date added (before specified date)
    if (filters.dateTo) {
      filtered = filtered.filter(p => new Date(p.dateAdded) <= new Date(filters.dateTo));
    }

    setFilteredProperties(filtered);
  };

  return (
    <div className="home">
      <div className="hero-section">
        <h1>Find Your Perfect Property</h1>
        <p>Discover amazing places to stay</p>
      </div>
      <SearchBar onSearch={handleSearch} />
      <PropertyList properties={filteredProperties} />
    </div>
  );
};

export default Home;