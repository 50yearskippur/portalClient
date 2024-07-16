import emptyStar from "../../assets/media/Icons/emptyStar.svg";
import fullStar from "../../assets/media/Icons/fullStar.svg";
import handlePropagation from "../../utils/handlePropagation";

const Star = ({ style, onClick = () => {}, clickable = true, pressed }) => {
  const handleClick = (e) => {
    handlePropagation(e);
    if (clickable) onClick();
  };

  return (
    <img
      src={pressed ? fullStar : emptyStar}
      alt="star"
      style={style}
      onClick={(e) => handleClick(e)}
    />
  );
};

export default Star;
