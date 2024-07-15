import "./EduType.css";
import EduTypes from "../../EduTypes/EduTypes";
import eduTypesTitles from "../../../constants/eduTypes";
import gameIcon from "../../../assets/media/Upload/game.png";
import Button from "../../Button/Button";
import { useContext } from "react";
import { PopupContext } from "../../../store/popup-context";

const EduType = () => {
  const { itemDetails } = useContext(PopupContext);
  return (
    <div className="edu-upload-container">
      <EduTypes
        eduTypesTitles={[...eduTypesTitles, { text: "משחק", img: gameIcon }]}
        width="8.715vw"
      />
      <Button
        text={"המשך"}
        style={{
          width: "8.3vw",
          height: "4.4vh",
        }}
        disabled={!itemDetails["type"]}
        onClick={() => {}}
      />
    </div>
  );
};

export default EduType;
