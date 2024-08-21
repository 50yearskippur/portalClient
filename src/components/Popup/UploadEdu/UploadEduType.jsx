import React from 'react';
import './UploadEduType.css';
import { useState, useEffect, useContext, useMemo } from 'react';
import { PopupContext } from '../../../store/popup-context';
import EduTypes from '../../EduTypes/EduTypes';
import PopupTop from '../Edges/PopupTop';
import PopupBottom from '../Edges/PopupBottom';
import ExitWarningPopup from '../General/ExitWarning';
import PersonalAreaAvater from '../../PersonalAreaAvater/PersonalAreaAvater';
import Dropdown from '../../Dropdown/Dropdown';
import handlePropagation from '../../../utils/handlePropagation';
import AddSubSubject from '../General/AddSubSubject';
import UploadEdu from './UploadEdu';
import sentIcon from '../../../assets/media/Icons/sentIcon.svg';
import eduTypesTitles from '../../../constants/eduTypes';

const UploadEduType = () => {
  const [isSubOpen, setIsSubOpen] = useState(false);
  const { showPopup, itemDetails, saveDetails } = useContext(PopupContext);

  const handleNewSubClick = () => {
    setIsSubOpen(true);
  };

  //delete in production
  const user = useMemo(
    () => ({
      fullName: 'יובל כהן',
      email: 'email@gmail.com',
      personalNumber: '123456789',
      unit: '1000',
      group: 'קורס',
      role: 'user',
      favorites: ['1', '2', '3'],
    }),
    []
  );

  useEffect(() => {
    saveDetails({ uploader: user });
  }, [user, saveDetails]);

  return (
    <div className="upload-popup" onClick={(e) => handlePropagation(e)}>
      <PopupTop
        title="העלאת תוכן לפורטל"
        onClickExit={() => showPopup(ExitWarningPopup)}
      />
      <div className="upload-popup-content" style={{ gap: '24px' }}>
        <div className="upload-popup-info">
          <div className="upload-popup-text-container">
            <div
              className="upload-popup-text"
              style={{ width: '109px', height: '29px' }}
            >
              שם מעלה התוכן:
            </div>
            <PersonalAreaAvater
              name="יכ"
              style={{
                width: '32px',
                height: '32px',
                fontSize: '14px',
                borderRadius: '43px',
              }}
            />
            <div className="upload-popup-detailes">{user?.fullName}</div>
          </div>
          <div className="upload-popup-text-container">
            <div
              className="upload-popup-text"
              style={{ width: '109px', height: ' 29px' }}
            >
              נושא:
            </div>
            <Dropdown
              defaultValue={
                itemDetails.subject?.title
                  ? itemDetails.subject.title
                  : 'נושא ראשי'
              }
              list={['מבואות מודיעין', 'טכנולוגיה וסייבר', 'שפה', 'המלצות']}
              fieldName="subject"
            />
            <Dropdown
              defaultValue={
                itemDetails.subject?.title
                  ? itemDetails.subject.title
                  : 'תת נושא'
              }
              list={['מבואות מודיעין', 'טכנולוגיה וסייבר', 'שפה', 'המלצות']}
              fieldName="subSubject"
              onNewSubClick={handleNewSubClick}
            />
          </div>
        </div>
        <div className="upload-popup-text">
          בחרו את סוג התוכן אותו תרצו להעלות
        </div>
        <EduTypes
          eduTypesTitles={eduTypesTitles}
          defaultValue={itemDetails.type}
          numberOfItemsInLine={3}
        />
      </div>
      <div
        className="button-container"
        style={{
          justifyContent: itemDetails.isNewSubSubject
            ? 'space-between'
            : 'flex-end',
        }}
      >
        {itemDetails.isNewSubSubject && (
          <div className="new-sub-subject-created-feedback">
            <img src={sentIcon} alt="send" />
            <div>בקשה לצירוף תת נושא חדש נשלחה</div>
          </div>
        )}
        <PopupBottom
          NextPopup={<UploadEdu />}
          disabled={
            !itemDetails.type ||
            !itemDetails.subSubject ||
            !itemDetails.subject ||
            !itemDetails.uploader
          }
        />
      </div>
      <AddSubSubject isOpen={isSubOpen} onClose={() => setIsSubOpen(false)} />
    </div>
  );
};

export default UploadEduType;
