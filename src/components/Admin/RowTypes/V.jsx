import { useState } from "react";
import handlePropagation from "../../../utils/handlePropagation";
import vPressed from "../../../assets/media/Icons/vPressed.svg";
import vUnressed from "../../../assets/media/Icons/vUnpresed.svg";

const V = () => {
  const [isPressed, setIsPressed] = useState();

  const onVClick = (e) => {
    handlePropagation(e);
    setIsPressed((prev) => !prev);
  };

  return (
    <img
      src={`${isPressed ? vPressed : vUnressed}`}
      alt="v to pressed"
      onClick={(e) => onVClick(e)}
    />
  );
};

export default V;
