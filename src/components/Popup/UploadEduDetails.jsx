import React from 'react';
import "./UploadEduDetails.css";
import { useState } from "react";
import handlePropagation from "../../utils/handlePropagation";
import UploadTop from "./UploadTop";
import UploadBottom from "./UoloadBottom";
import UploadEdu from "./UploadEdu";
import Dropdown from "../Dropdown/Dropdown";
import Switch from "react-switch";
import SearchDropdown from "../Search/SearchDropdown";

const UploadEduDetails = () => {
  const [isOtherGroup, setIsOtherGroup] = useState(true);

  const handleToggle = () => {
    setIsOtherGroup((prev) => !prev);
  };

  return (
    <div className="upload-popup" onClick={(e) => handlePropagation(e)}>
      <UploadTop />
      <div className="upload-popup-content" style={{ gap: "32px" }}>
        <div className="upload-details-text-container">
          <div className="upload-details-text">לא חובה אבל יעזור לנו מאוד </div>
          <div className="upload-popup-detale">
            הפרטים האלו יעזרו לנו בהתאמת החומר לקורסים ולמשתמשי הפורטל
          </div>
        </div>
        <div className="upload-details-approval">
          <div className="upload-details-text">מפקד מאשר (אופציונלי)</div>
          <div className="upload-details-row">
            <div className="upload-details-container">
              <div className="upload-popup-text">שם התוצר:</div>
              <input type="text" className="upload-input-field" />
            </div>
            <div className="upload-details-container">
              <div className="upload-popup-text">רמת קושי:</div>
              <Dropdown
                list={["מותאם לכל הרמות", "רמה 1", "רמה 2", "רמה 3"]}
                style={{ width: "100%", height: "40px" }}
              />
            </div>
          </div>
          <div className="upload-details-row">
            <div className="upload-details-container">
              <div className="upload-popup-text">מס' טלפון:</div>
              <input type="text" className="upload-input-field" />
            </div>
            <div className="upload-details-container">
              <div className="upload-popup-text">מטרת השיעור / תוצר:</div>
              <input type="text" className="upload-input-field" />
            </div>
          </div>
        </div>
        <div className="switch-container">
          <Switch
            checked={isOtherGroup}
            onChange={handleToggle}
            onColor="#42c8a0"
            offColor="#f2f4fa"
            uncheckedIcon={false}
            checkedIcon={false}
            height={16}
            width={39}
            handleDiameter={10}
          />
          <div className="upload-popup-text">
            תוכן זה יכול לשמש לקורסים נוספים
          </div>
        </div>
        <div className="upload-popup-line" style={{ top: "44.25vh" }} />
        <div className="upload-details-text-container">
          <div className="upload-details-text">הוספת תיוגים</div>
          <SearchDropdown
            options={[
              "איפסום 1",
              "איפסום 2",
              "איפסום 3",
              "איפסום 4",
              "פורם איפסום",
            ]}
          />
        </div>
      </div>
      <UploadBottom PreviousPopup={UploadEdu} />
    </div>
  );
};

export default UploadEduDetails;
