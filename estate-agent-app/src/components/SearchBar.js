import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    minBedrooms: '',
    maxBedrooms: '',
    minPrice: '',
    maxPrice: '',
    postcode: '',
    dateFrom: '',
    dateTo: ''
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
  };

  const handleReset = () => {
    const emptyFilters = {
      location: '',
      type: '',
      minBedrooms: '',
      maxBedrooms: '',
      minPrice: '',
      maxPrice: '',
      postcode: '',
      dateFrom: '',
      dateTo: ''
    };
    setFilters(emptyFilters);
    onSearch(emptyFilters);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <div className="search-row">
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={filters.location}
            onChange={handleChange}
          />
          <select
            name="type"
            value={filters.type}
            onChange={handleChange}
          >
            <option value="">Any Type</option>
            <option value="house">House</option>
            <option value="flat">Flat</option>
          </select>
          <input
            type="text"
            name="postcode"
            placeholder="Postcode Area (e.g., BR1)"
            value={filters.postcode}
            onChange={handleChange}
          />
        </div>
        <div className="search-row">
          <input
            type="number"
            name="minBedrooms"
            placeholder="Min Bedrooms"
            value={filters.minBedrooms}
            onChange={handleChange}
            min="1"
          />
          <input
            type="number"
            name="maxBedrooms"
            placeholder="Max Bedrooms"
            value={filters.maxBedrooms}
            onChange={handleChange}
            min="1"
          />
          <input
            type="number"
            name="minPrice"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={handleChange}
            min="0"
          />
          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={handleChange}
            min="0"
          />
        </div>
        <div className="search-row">
          <label>
            Added After:
            <input
              type="date"
              name="dateFrom"
              value={filters.dateFrom}
              onChange={handleChange}
            />
          </label>
          <label>
            Added Before:
            <input
              type="date"
              name="dateTo"
              value={filters.dateTo}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Search</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;