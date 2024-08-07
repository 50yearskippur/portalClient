import React from "react";
import "./UploadEdu.css";
import PopupTop from "../Edges/PopupTop";
import FileUploader from "../../Media/FileUploader";
import UploadEduDetails from "./UploadEduDetails";
import UploadEduType from "./UploadEduType";
import handlePropagation from "../../../utils/handlePropagation";
import PopupBottom from "../Edges/PopupBottom";
import Dropdown from "../../Dropdown/Dropdown";
import Textarea from "../../Textarea/Textarea";
import levels from "../../../store/levels";

const UploadEdu = () => {
  return (
    <div className="upload-popup" onClick={(e) => handlePropagation(e)}>
      <PopupTop title={"העלאת תוכן לפורטל"} />
      <div className="upload-popup-content">
        <div className="upload-input-continer">
          <div
            className="upload-details-container"
            style={{ padding: "14px 32px !important" }}
          >
            <div className="upload-popup-text">שם:</div>
            <input type="text" className="upload-input-field" />
          </div>
          <div className="upload-details-container">
            <div className="upload-popup-text">רמת קושי:</div>
            <Dropdown
              defaultValue={"בחרו רמת קושי"}
              list={levels}
              style={{ width: "100%", height: "40px" }}
            />
          </div>
        </div>
        <div
          className="upload-popup-line"
          style={{
            position: "relative",
            marginTop: "1.3vh",
            marginBottom: "0.75vh",
          }}
        />
        <div
          className="upload-popup-text"
          style={{
            fontWeight: "600",
            lineHeight: "24px",
            letterSpacing: "0.1px",
            marginBottom: "0.75vh",
          }}
        >
          תיאור (אופציונלי)
        </div>
        <Textarea
          style={{ marginBottom: "2vh", height: "100%" }}
          placeholder={"כתבו כאן את תיאור התוכן שאתם מעלים..."}
        />
        <FileUploader
          text="לחץ להעלות קבצים או גררו לתיבה"
          fileTypes={["JPG", "PNG"]}
        />
        <div className="upload-agreement-container">
          <input
            className="upload-agreement-input"
            type="checkbox"
            name="subscribe"
            value="newsletter"
          />
          אני מאשר שהתוכן עומד בתנאי בטחון מידע ומותאם לפרסום לכלל אמ"ן
        </div>
      </div>
      <PopupBottom
        NextPopup={<UploadEduDetails />}
        PreviousPopup={<UploadEduType />}
      />
    </div>
  );
};

export default UploadEdu;
