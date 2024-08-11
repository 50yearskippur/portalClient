import "./uploadStage.css";
import { useContext } from "react";
import { PopupContext } from "../../../store/popup-context";
import FileUploader from "../../Media/FileUploader";
import NextBtn from "./NextBtn";
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
       <NextBtn
        text={'הבא'}
        disabled={
          !itemDetails["files"]["media"]
        }
        nextStage={nextStage}
      />
    </div>
  );
};

export default Files;
