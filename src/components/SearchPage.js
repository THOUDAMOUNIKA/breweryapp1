// SearchPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/SearchPage.css';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('by_city');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    const response = await fetch(`https://api.openbrewerydb.org/breweries?${searchType}=${searchTerm}`);
    const data = await response.json();
    setResults(data);
  };

  const navigateToBreweryDetails = (id) => {
    navigate(`/brewery/${id}`);
  };

  return (
    <div className="search-container">
      <h2>Search Breweries</h2>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select 
          value={searchType} 
          onChange={(e) => setSearchType(e.target.value)}
          className="search-select"
        >
          <option value="by_city">City</option>
          <option value="by_name">Name</option>
          <option value="by_type">Type</option>
        </select>
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
      <div className="results">
        {results.map(brewery => (
          <div key={brewery.id} className="brewery" onClick={() => navigateToBreweryDetails(brewery.id)}>
            <h3>{brewery.name}</h3>
            <p>{brewery.street}, {brewery.city}, {brewery.state}</p>
            <p>{brewery.phone}</p>
            <p><a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a></p>
            <p>Type: {brewery.brewery_type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
