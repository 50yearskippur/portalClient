import { useState } from "react";
import emptyStar from "../../assets/media/Icons/emptyStar.svg";
import fullStar from "../../assets/media/Icons/fullStar.svg";
import handlePropagation from "../../utils/handlePropagation";


// Todo: delete this component and replace it with the one in the Rate.jsx file

const Star = ({ style, onClick = () => {}, clickable = true }) => {
  const [pressed, setPressed] = useState(false);

  const handleClick = (e) => {
    handlePropagation(e);
    if (clickable) setPressed((prev) => !prev);
  };

  return (
    <img
      src={pressed || !clickable ? fullStar : emptyStar}
      alt="star"
      style={style}
      onClick={(e) => handleClick(e)}
    />
  );
};

export default Star;
