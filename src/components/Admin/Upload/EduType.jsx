import "./EduType.css";
import EduTypes from "../../EduTypes/EduTypes";
import eduTypesTitles from "../../../constants/eduTypes";
import gameIcon from "../../../assets/media/Upload/game.png";

const EduType = () => {
  return (
    <EduTypes
      eduTypesTitles={[...eduTypesTitles, { text: "משחק", img: gameIcon }]}
    />
  );
};

export default EduType;
