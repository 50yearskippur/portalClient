import "./Rate.css";
import { useState } from "react";
import Star from "./Star";

const Rate = ({ style, clickable, numberOfStars = 5 }) => {
  const [starsIndex, setStarsIndex] = useState(0);
  const onStarClick = (index) => {
    setStarsIndex(index);
  };

  return (
    <div className="rate-container">
      {Array.from({ length: numberOfStars }).map((_, index) => (
        <Star
          key={`star${index}`}
          style={style}
          onClick={() => onStarClick(index + 1)}
          pressed={index < starsIndex}
          clickable={clickable}
        />
      ))}
    </div>
  );
};

export default Rate;
