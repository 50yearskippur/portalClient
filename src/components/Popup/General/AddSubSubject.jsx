import './AddSubSubject.css';
import React from 'react';
import { useState, useContext } from 'react';
import handlePropagation from '../../../utils/handlePropagation';
import exitIcon from '../../../assets/media/Icons/exitIcon.svg';
import Button from '../../Button/Button';
import { PopupContext } from '../../../store/popup-context';

const AddSubSubject = ({ isOpen, onClose }) => {
  const [subSubjectName, setSubSubjectName] = useState('');
  const { saveDetails } = useContext(PopupContext);

  const handleSave = () => {
    saveDetails({ subSubject: subSubjectName });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="second-popup-overlay">
      <div className="add-sub-content" onClick={(e) => handlePropagation(e)}>
        <div className="upload-button-container">
          <img
            src={exitIcon}
            className="upload-exit-button"
            style={{ position: 'relative', right: '95%' }}
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
            value={subSubjectName}
            onChange={(e) => setSubSubjectName(e.target.value)}
          />
        </div>
        <div
          className="upload-button-container"
          style={{ justifyContent: 'center' }}
        >
          <Button
            text={'שליחת בקשה'}
            onClick={handleSave}
            disabled={subSubjectName.trim() === ''}
            style={{ background: '#3259FF' }}
          />
          <div className="cancel-btn" onClick={onClose}>
            ביטול
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSubSubject;
