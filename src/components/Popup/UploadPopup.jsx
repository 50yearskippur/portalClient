import "./UploadPopup.css";
import {useContext} from "react";
import {UserContext} from "../../store/user-context";
import FileUploader from "../Media/FileUploader";

const UploadPopup = () => {
  const {user} = useContext(UserContext);

  return (
    <div className="popup">
      <div className="upload-popup-header">העלאת תוצר לפורטל </div>
      <div className="upload-popup-text-container">
        <div className="upload-popup-text">שם מעלה התוכן:</div>
        <div className="upload-popup-detale">{user?.fullName} (אתה)</div>
      </div>
      <div className="upload-popup-text-container">
        <div className="upload-popup-text">נושא:</div>
        <div className="upload-popup-detale">זירת סוריה</div>
      </div>
      <div className="upload-popup-text">שם התוצר:</div>
      <input className="upload-popup-input" />
      <FileUploader />
      <label>
        <input type="checkbox" name="subscribe" value="newsletter" />
        אני מאשר שהתוכן עומד
        <span style={{fontWeight: "700"}}>בתנאי בטחון מידע </span> ומותאם לפרסום
        לכלל אמ"ן
      </label>
      <div className="upload-popup-button">המשך</div>
    </div>
  );
};

export default UploadPopup;
