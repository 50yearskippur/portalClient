import "./uploadStage.css";
import { useContext } from "react";
import { PopupContext } from "../../../store/popup-context";
import FileUploader from "../../Media/FileUploader";
import Button from "../../Button/Button";

const Files = ({ nextStage, fileTypes, hasCover }) => {
  const { itemDetails } = useContext(PopupContext);

  return (
    <div className="stage-upload-container">
      <div className="stage-files-container">
        <div className="admin-upload-file">
          <div className="stage-text">קובץ תוכן</div>
          <FileUploader
            text="צרף או גרור לתיבה קובץ"
            fileTypes={fileTypes}
            defaultFile={itemDetails["file"]}
          />
        </div>
        {hasCover && (
          <div className="admin-upload-file" style={{ width: "28%" }}>
            <div className="stage-text">תמונת קאבר</div>
            <FileUploader
              text="צרף קובץ"
              fileTypes={["PNG", "JPG"]}
              isCover={true}
            />
          </div>
        )}
      </div>
      <Button
        text={"הבא"}
        style={{
          width: "6.667vw",
          height: "4.4vh",
          margin: "0 auto",
        }}
        disabled={!itemDetails["files"]["media"]}
        onClick={nextStage}
      />
    </div>
  );
};

export default Files;
