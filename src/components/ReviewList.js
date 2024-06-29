// components/ReviewList.js
import React from 'react';
import './styles/ReviewList.css';

const ReviewList = ({ reviews }) => {
  return (
    <div className="reviews">
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className={star <= review.rating ? 'star selected' : 'star'}>
                &#9733;
              </span>
            ))}
          </div>
          <p>{review.feedback}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
