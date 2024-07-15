import UploadTop from "./UploadTop";
import exitIcon from "../../assets/media/Icons/exitIcon.svg";

import "./CreditsPopUp.css";
const CreditsPopUp = () => {
  return (
    <div className="second-popup-overlay">
      <div className="credit-popup-container">
        <div className="credit-top-title">
          <div className="credit-upload-popup-header">שינויים בקרדיטים</div>
          <img
            src={exitIcon}
            className="credit-upload-exit-button"
            alt="exit-button"
          />
          <div className="upload-popup-line" style={{ top: "72px" }} />
        </div>
        <div className="credits-details">
          <div className="credit-popup-text">
            האם תרצה לשמור שינויים אלה לשאר התכנים
          </div>
          <div className="credit-buttons-conatiner">
            <div className="credit-unique-button">רק לתוצר הזה</div>
            <div className="credit-save-button">שמור לכלל התכנים</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreditsPopUp;
