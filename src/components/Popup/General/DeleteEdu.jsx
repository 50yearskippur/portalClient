import { useContext } from 'react';
import { PopupContext } from '../../../store/popup-context';
import handlePropagation from '../../../utils/handlePropagation';
import PopupTop from '../Edges/PopupTop';
import Textarea from '../../Textarea/Textarea';
import Button from '../../Button/Button';
import './DeleteEdu.css';

const DeleteEdu = ({ isOpen, onClose }) => {
  const { saveDetails, hidePopup, itemDetails } = useContext(PopupContext);
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
            style={{ height: '16.667vh' }}
            placeholder="כתוב כאן את תוכן ההודעה ..."
            onChange={(e) =>
              saveDetails({ cancellationReason: e.target.value })
            }
          />
        </div>
        <div className="delete-edu-buttons-conatiner">
          <div className="delete-edu-cancel" onClick={onClose}>
            ביטול
          </div>
          <Button
            text="שלח"
            style={{
              width: '6.667vw',
              height: '4.4vh',
              margin: '0 auto',
            }}
            disabled={!itemDetails.cancellationReason}
            onClick={() => {
              onClose();
              hidePopup();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DeleteEdu;
