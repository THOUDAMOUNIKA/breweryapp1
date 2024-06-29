// components/BreweryDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import './styles/BreweryDetails.css';

const BreweryDetails = () => {
  const { id } = useParams();
  const [brewery, setBrewery] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchBreweryDetails = async () => {
      const response = await fetch(`https://api.openbrewerydb.org/breweries/${id}`);
      const data = await response.json();
      setBrewery(data);
    };
    fetchBreweryDetails();
  }, [id]);

  const handleReviewSubmit = (review) => {
    setReviews([...reviews, review]);
  };

  if (!brewery) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <div className="brewery-details">
      <h2>{brewery.name}</h2>
      <p><strong>ID:</strong> {brewery.id}</p>
      <p><strong>Brewery Type:</strong> {brewery.brewery_type}</p>
      <p><strong>Address 1:</strong> {brewery.address_1}</p>
      {brewery.address_2 && <p><strong>Address 2:</strong> {brewery.address_2}</p>}
      {brewery.address_3 && <p><strong>Address 3:</strong> {brewery.address_3}</p>}
      <p><strong>City:</strong> {brewery.city}</p>
      <p><strong>State/Province:</strong> {brewery.state_province}</p>
      <p><strong>Postal Code:</strong> {brewery.postal_code}</p>
      <p><strong>Country:</strong> {brewery.country}</p>
      <p><strong>Longitude:</strong> {brewery.longitude}</p>
      <p><strong>Latitude:</strong> {brewery.latitude}</p>
      <p><strong>Phone:</strong> {brewery.phone}</p>
      <p><strong>Website:</strong> <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a></p>
      <p><strong>State:</strong> {brewery.state}</p>
      <p><strong>Street:</strong> {brewery.street}</p>
      
    </div>
    <div className="brewery-details">
      <h3>Leave a Review</h3>
    <ReviewForm onSubmit={handleReviewSubmit} />

    <h3>Reviews</h3>
    <ReviewList reviews={reviews} />
    </div>
    </div>
    
    
  );
};

export default BreweryDetails;
