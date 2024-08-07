import "./uploadStage.css";
import { useContext } from "react";
import { PopupContext } from "../../../store/popup-context";
import EduTypes from "../../EduTypes/EduTypes";
import Button from "../../Button/Button";

const EduType = ({ nextStage, eduTypesTitles, numberOfItemsInLine }) => {
  const { itemDetails } = useContext(PopupContext);
  return (
    <div className="stage-upload-container">
      <EduTypes
        eduTypesTitles={eduTypesTitles}
        defaultValue={itemDetails["type"]}
        numberOfItemsInLine={numberOfItemsInLine}
      />
      <Button
        text={"הבא"}
        style={{
          width: "6.667vw",
          height: "4.4vh",
          margin: "0 auto",
        }}
        disabled={!itemDetails["type"]}
        onClick={nextStage}
      />
    </div>
  );
};

export default EduType;
