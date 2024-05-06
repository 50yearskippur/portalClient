import "./UploadEdu.css";
import { useContext, useState } from "react";
import { PopupContext } from "../../store/popup-context";
import exitIcon from "../../assets/media/Icons/exitIcon.png";
import FileUploader from "../Media/FileUploader";
import UploadEduDetails from "./UploadEduDetails";
import UploadEduType from "./UploadEduType";

const UploadEdu = () => {
  const { showPopup, hidePopup } = useContext(PopupContext);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="upload-popup">
      <img
        src={exitIcon}
        className="upload-exit-button"
        alt="exit-button"
        onClick={hidePopup}
      />
      <div className="upload-popup-header" style={{ marginBottom: "42px" }}>
        העלאת תוצר לפורטל
      </div>
      <FileUploader />
      <div className="upload-popup-text" style={{ marginTop: "22px" }}>
        שם התוצר:
      </div>
      <input className="upload-input" />
      <div className="upload-popup-text" style={{ marginTop: "22px" }}>
        רמת קושי
      </div>
      <div className="upload-difficulty-container">
        {[1, 2, 3, 4].map((difficulty, index) => (
          <div
            key={`difficulty${difficulty}`}
            className={`upload-difficulty ${
              activeIndex === index && "upload-difficulty-active"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {difficulty}
          </div>
        ))}
      </div>
      <label>
        <input
          className="upload-agreement-input"
          type="checkbox"
          name="subscribe"
          value="newsletter"
        />
        אני מאשר שהתוכן עומד
        <span style={{ fontWeight: "700" }}> בתנאי בטחון מידע </span> ומותאם
        לפרסום לכלל אמ"ן
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
