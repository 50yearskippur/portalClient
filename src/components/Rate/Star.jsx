import React, { useState } from "react";
import emptyStar from "../../assets/media/Icons/emptyStar.svg";
import fullStar from "../../assets/media/Icons/fullStar.svg";

const Star = ({ style, clickable }) => {
  const [pressed, setPressed] = useState(clickable ? false : true);

  const handleClick = () => {
    if (clickable) {
      setPressed((prev) => !prev);
    }
  };

  return (
    <img
      src={pressed ? fullStar : emptyStar}
      alt="star"
      style={style}
      onClick={handleClick}
    />
  );
};

export default Star;
