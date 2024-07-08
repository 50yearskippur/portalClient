import "./AddSubSubject.css";
import { useContext } from "react";
import { PopupContext } from "../../store/popup-context";
import handlePropagation from "../../utils/handlePropagation";
import exitIcon from "../../assets/media/Icons/exitIcon.svg";
import Button from "../Button/Button";

const AddSubSubject = ({ isOpen, onClose }) => {
  const { hidePopup } = useContext(PopupContext);

  if (!isOpen) return null;

  return (
    <div className="add-sub-overlay">
      <div className="add-sub-content" onClick={(e) => handlePropagation(e)}>
        <div className="upload-button-container">
          <img
            src={exitIcon}
            className="upload-exit-button"
            alt="exit-button"
            onClick={hidePopup}
          />
        </div>
        <div className="add-sub-details">
          <div className="add-sub-text">
            <div className="add-sub-header">תת נושא מותאם אישית</div>
            <div className="add-sub-title">מה שם תת הנושא שתרצה להוסיף?</div>
          </div>
          <input type="text" className="add-sub-input-field" />
        </div>
        <div
          className="upload-button-container"
          style={{ justifyContent: "center" }}
        >
          <Button
            text={"שליחת בקשה"}
            onClick={onClose}
            disabled={true}
            // style={{ height: "fit-content", padding: "4px 0" }}
          />
          {/* <div className="upload-btn clickable" onClick={onClose}>
            שליחת בקשה
          </div> */}
          <div className="upload-btn cancel" onClick={onClose}>
            ביטול
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSubSubject;
