import "./DeleteEdu.css";
import handlePropagation from "../../../utils/handlePropagation";
import PopupTop from "../Edges/PopupTop";
import Textarea from "../../Textarea/Textarea";

const DeleteEdu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="second-popup-overlay" onClick={onClose}>
      <div className="delete-edu-content" onClick={(e) => handlePropagation(e)}>
        <PopupTop title="מחיקת תוצר מהפורטל" onClickExit={onClose} />
        <div className="delete-edu-text-container">
          <div className="delete-edu-text">
            על מנת למחוק את התוכן תצטרכו לשלוח הודעה למעלה התוכן
          </div>
          <Textarea
            style={{ height: "16.667vh" }}
            placeholder="כתוב כאן את תוכן ההודעה ..."
          />
        </div>
        <div className="delete-edu-buttons-conatiner">
          <div className="delete-edu-cancel" onClick={onClose}>
            ביטול
          </div>
          <div className="delete-edu-send" onClick={onClose}>
            שלח
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteEdu;
