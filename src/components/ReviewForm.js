import React, { useState } from 'react';
import './styles/ReviewForm.css';

const ReviewForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ rating, feedback });
    setRating(0);
    setFeedback('');
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <div className="rating">
        <label>Rating:</label>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            className={star <= rating ? 'star selected' : 'star'}
          >
            &#9733;
          </span>
        ))}
      </div>
      <div className="feedback">
        <label>Feedback:</label>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows="4"
          placeholder="Write your feedback here..."
        ></textarea>
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
