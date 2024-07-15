import React from 'react';
import "./UploadedEdu.css";
import { useContext } from "react";
import Button from "../Button/Button";
import { PopupContext } from "../../store/popup-context";
import uploadFileIcon from "../../assets/media/Icons/uploadFile.svg";
import UploadEduType from "../Popup/UploadEduType";

const UploadedEdu = () => {
  const { showPopup } = useContext(PopupContext);

  return (
    <div className="uploaded-edu-container">
      <div className="uploaded-edu">
        <img
          src={uploadFileIcon}
          alt="upload file icon"
          className="uploaded-edu-icon"
        />
        <div className="uploaded-edu-text">
          יש לכם חומר לימודי שיכול לעזור לאחרים? שתפו אותנו ואולי תופיעו בפורטל!
        </div>
        <Button
          text={"העלאת תוכן"}
          onClick={() => showPopup(<UploadEduType />)}
          style={{ height: "fit-content", padding: "4px 0" }}
        />
      </div>
      <div className="uploaded-edu"></div>
      <div className="uploaded-edu"></div>
    </div>
  );
};

export default UploadedEdu;
