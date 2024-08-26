import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './Rate.css';

const Rate = ({ style, clickable = true, numberOfStars = 5 }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="rate-container">
      {[...Array(numberOfStars)].map((_, index) => {
        const currentRating = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
              disabled={!clickable}
            />
            <FaStar
              className="star"
              size={35}
              style={style}
              color={currentRating <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              onMouseEnter={() => clickable && setHover(currentRating)}
              onMouseLeave={() => clickable && setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rate;
