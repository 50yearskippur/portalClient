import "./AddSubSubject.css";
import { useContext } from "react";
import { PopupContext } from "../../store/popup-context";
import handlePropagation from "../../utils/handlePropagation";
import exitIcon from "../../assets/media/Icons/exitIcon.svg";

const AddSubSubject = ({ isOpen, onClose }) => {
  const { hidePopup } = useContext(PopupContext);

  //   const closeAddPopup = () => {
  //     hidePopup();
  //   };

  if (!isOpen) return null;

  return (
    <div className="add-sub-overlay" onClick={onClose}>
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
          <input type="text" className="input-field" />
        </div>
        <div
          className="upload-button-container"
          style={{ justifyContent: "center" }}
        >
          <div className="upload-btn clickable" onClick={onClose}>
            שליחת בקשה
          </div>
          <div className="upload-btn cancel" onClick={onClose}>
            ביטול
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSubSubject;
