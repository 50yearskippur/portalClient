import "./UploadEduType.css";
import {useContext} from "react";
import {PopupContext} from "../../store/popup-context";
import UploadEdu from "./UploadEdu";
import EduTypes from "../EduTypes/EduTypes";
import exitIcon from "../../assets/media/Icons/exitIcon.png";

const UploadEduType = () => {
  const {showPopup, hidePopup} = useContext(PopupContext);

  //delete in production
  const user = {
    fullName: "ג'ורג טימותי קלוני",
    email: "email@gmail.com",
    personalNumber: "123456789",
    unit: "8200",
    group: 'קורס קפ"ה',
    role: "user",
    favorites: ["1", "2", "3"],
  };

  return (
    <div className="upload-popup">
      <img
        src={exitIcon}
        className="upload-exit-button"
        alt="exit-button"
        onClick={hidePopup}
      />
      <div className="upload-popup-header">העלאת תוצר לפורטל </div>
      <div className="upload-popup-text-container" style={{marginTop: "19px"}}>
        <div
          className="upload-popup-text"
          style={{width: "109px", height: " 29px"}}
        >
          שם מעלה התוכן:
        </div>
        <div className="upload-popup-detale">{user?.fullName} (אתה)</div>
      </div>
      <div className="upload-popup-text-container" style={{marginTop: "15px"}}>
        <div
          className="upload-popup-text"
          style={{width: "109px", height: " 29px"}}
        >
          נושא:
        </div>
        <div className="upload-popup-detale">זירת סוריה</div>
      </div>
      <div className="upload-popup-text" style={{marginTop: "18px"}}>
        בחרו את סוג התוצר אותו תרצו להעלות
      </div>
      <EduTypes />
      <div
        className="upload-popup-button"
        style={{marginTop: "32px"}}
        onClick={() => showPopup(<UploadEdu />)}
      >
        המשך
      </div>
    </div>
  );
};

export default UploadEduType;
