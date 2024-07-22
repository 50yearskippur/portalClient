import "./uploadStage.css";
import { useContext } from "react";
import { PopupContext } from "../../../store/popup-context";
import FileUploader from "../../Media/FileUploader";
import Button from "../../Button/Button";

const Files = ({ nextStage }) => {
  const { itemDetails } = useContext(PopupContext);

  return (
    <div className="stage-upload-container">
      <div className="files-container">
        <div className="stage-file-container" style={{ width: "70%" }}>
          <div className="stage-text">קובץ תוכן</div>
          <FileUploader
            text="צרף או גרור לתיבה קובץ"
            fileTypes={["PNG", "JPG"]}
            defaultFile={itemDetails["file"]}
          />
        </div>
        <div className="stage-file-container" style={{ width: "28%" }}>
          <div className="stage-text">תמונת קאבר</div>
          <FileUploader text="צרף קובץ" fileTypes={["PNG", "JPG"]} />
        </div>
      </div>
      <Button
        text={"המשך"}
        style={{
          width: "8.3vw",
          height: "4.4vh",
        }}
        disabled={!itemDetails["file"]}
        onClick={nextStage}
      />
    </div>
  );
};

export default Files;
