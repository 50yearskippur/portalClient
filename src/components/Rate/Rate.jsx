import "./Rate.css";
import Star from "./Star";
import React from 'react';

const Rate = ({ style, clickable = true, numberOfStars = 5 }) => {
  return (
    <div className="rate-container">
      {Array.from({ length: numberOfStars }).map((_, index) => (
        <Star key={`star${index}`} style={style} clickable={clickable} />
      ))}
    </div>
  );
};

export default Rate;
