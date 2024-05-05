import "./UploadEduDetails.css";
import UploadEdu from "./UploadEdu";
import {useContext} from "react";
import {PopupContext} from "../../store/popup-context";
import exitIcon from "../../assets/media/Icons/exitIcon.png";

const UploadEduDetails = () => {
  const {hidePopup, showPopup} = useContext(PopupContext);
  const tags = [
    "אוכל",
    "מים",
    'חו"ל',
    "שופינג",
    "מוצרי חלב",
    "שקדים",
    "פיצוחים",
    "פירות",
    "ירקות",
    "סקי",
    "טיפוס הרים",
    "טניס",
    "חנוכה",
    "ראש השנה",
    "יום כיפור",
    "שבועות",
  ];
  return (
    <div className="upload-popup">
      <img
        src={exitIcon}
        className="upload-exit-button"
        alt="exit-button"
        onClick={hidePopup}
      />
      <div className="upload-popup-header" style={{marginBottom: "1px"}}>
        לא חובה אבל יעזור לנו מאוד
      </div>
      <div className="upload-popup-text" style={{marginBottom: "38px"}}>
        הפרטים האלו יעזרו לנו בהתאמת החומר לקורסים ולמשתמשי הפורטל
      </div>
      <div className="upload-details-approval">
        <div
          className="upload-popup-text"
          style={{marginBottom: "16px", width: "fit-content"}}
        >
          מפקדים מאשרים אם יש
        </div>
        <div className="upload-details-approve-icon" />
      </div>
      <div className="upload-details-personal-info">
        <div className="upload-details-cell">
          <div className="upload-popup-text">שם מלא</div>
          <input className="upload-details-input" />
        </div>
        <div className="upload-details-cell">
          <div className="upload-popup-text">דרגה</div>
          <input className="upload-details-input" />
        </div>
        <div className="upload-details-cell">
          <div className="upload-popup-text">מספר טלפון</div>
          <input className="upload-details-input" />
        </div>
      </div>
      <div className="upload-popup-text" style={{marginBottom: "9px"}}>
        תיוגים
      </div>
      <div className="upload-details-tags-container">
        {tags.map((tag) => (
          <div className="upload-details-tag">{tag}</div>
        ))}
      </div>
      <div className="upload-button-container">
        <div
          className="upload-back-button"
          onClick={() => showPopup(<UploadEdu />)}
        >
          חזור
        </div>
        <div className="upload-popup-button" onClick={hidePopup}>
          העלאה
        </div>
      </div>
    </div>
  );
};

export default UploadEduDetails;
