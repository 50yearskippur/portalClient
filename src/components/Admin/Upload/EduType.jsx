import "./uploadStage.css";
import { useContext } from "react";
import { PopupContext } from "../../../store/popup-context";
import EduTypes from "../../EduTypes/EduTypes";
import eduTypesTitles from "../../../constants/eduTypes";
import gameIcon from "../../../assets/media/Upload/game.png";
import Button from "../../Button/Button";

const EduType = ({ nextStage }) => {
  const { itemDetails } = useContext(PopupContext);
  return (
    <div className="stage-upload-container">
      <EduTypes
        eduTypesTitles={[...eduTypesTitles, { text: "משחק", img: gameIcon }]}
        width="7.3vw"
        defaultValue={itemDetails["type"]}
      />
      <Button
        text={"המשך"}
        style={{
          width: "8.3vw",
          height: "4.4vh",
        }}
        disabled={!itemDetails["type"]}
        onClick={nextStage}
      />
    </div>
  );
};

export default EduType;
