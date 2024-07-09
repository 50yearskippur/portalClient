import "./AddSubSubject.css";
import { useState, useContext } from "react";
import handlePropagation from "../../utils/handlePropagation";
import exitIcon from "../../assets/media/Icons/exitIcon.svg";
import Button from "../Button/Button";
import { PopupContext } from "../../store/popup-context";

const AddSubSubject = ({ isOpen, onClose }) => {
  const [subSubjectName, setSubSubjectName] = useState("");
  const { setItemDetails } = useContext(PopupContext);

  const handleSave = () => {
    setItemDetails((prevDetails) => ({
      ...prevDetails,
      subSubject: subSubjectName,
    }));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="add-sub-overlay">
      <div className="add-sub-content" onClick={(e) => handlePropagation(e)}>
        <div className="upload-button-container">
          <img
            src={exitIcon}
            className="upload-exit-button"
            style={{ position: "relative", right: "95%" }}
            alt="exit-button"
            onClick={onClose}
          />
        </div>
        <div className="add-sub-details">
          <div className="add-sub-text">
            <div className="add-sub-header">תת נושא מותאם אישית</div>
            <div className="add-sub-title">מה שם תת הנושא שתרצה להוסיף?</div>
          </div>
          <input
            type="text"
            className="add-sub-input-field"
            value={subSubjectName} // Bind input value to state
            onChange={(e) => setSubSubjectName(e.target.value)} // Update state on input change
          />
        </div>
        <div
          className="upload-button-container"
          style={{ justifyContent: "center" }}
        >
          <Button
            text={"שליחת בקשה"}
            onClick={handleSave} // Use handleSave to process the input value
            disabled={subSubjectName.trim() === ""} // Disable button if input is empty
          />
          <div className="upload-btn cancel" onClick={onClose}>
            ביטול
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSubSubject;
