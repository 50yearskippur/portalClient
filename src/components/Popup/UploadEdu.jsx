import "./UploadEdu.css";
import {useContext} from "react";
import {PopupContext} from "../../store/popup-context";
import exitIcon from "../../assets/media/icons/exitIcon.png";
import FileUploader from "../Media/FileUploader";
import UploadEduDetails from "./UploadEduDetails";
import UploadEduType from "./UploadEduType";

const UploadEdu = () => {
  const {showPopup, hidePopup} = useContext(PopupContext);

  return (
    <div className="upload-popup">
      <img
        src={exitIcon}
        className="upload-exit-button"
        alt="exit-button"
        onClick={hidePopup}
      />
      <div className="upload-popup-header">העלאת תוצר לפורטל </div>
      <FileUploader />
      <label>
        <input type="checkbox" name="subscribe" value="newsletter" />
        אני מאשר שהתוכן עומד
        <span style={{fontWeight: "700"}}>בתנאי בטחון מידע </span> ומותאם לפרסום
        לכלל אמ"ן
      </label>
      <div className="upload-button-container">
        <div
          className="upload-back-button"
          onClick={() => showPopup(<UploadEduType />)}
        >
          חזור
        </div>
        <div
          className="upload-popup-button"
          onClick={() => showPopup(<UploadEduDetails />)}
        >
          המשך
        </div>
      </div>
    </div>
  );
};

export default UploadEdu;
