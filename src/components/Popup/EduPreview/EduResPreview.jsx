import { useState, useEffect } from 'react';
import handlePropagation from '../../../utils/handlePropagation';
import EduPreviewTop from './EduPreviewTop';
import DeleteEduText from './DeleteEduText';
import warning from '../../../assets/media/Icons/warningBox.svg';
import EduResSection from './EduResSection';
import Details from './Details';
import Comments from './Comments';
import Credits from './Credits';
import Setting from './SettingsList';
import MoreDetails from './MoreDetails';
import DeleteEduPopup from '../General/DeleteEdu';
import GenericFilePreview from './GenericFilePreview';
import UserDetails from './UserDetails';
import './EduResPreview.css';

const EduPreview = ({ edu }) => {
  const [isDeletePopup, setIsDeletePopup] = useState(false);
  const [settingsArray, setSettingsArray] = useState(edu.settings);
  const uploadByUser = edu.creator?.role === 'user';

  useEffect(() => {
    setSettingsArray(edu.settings);
  }, [edu]);

  return (
    <div className="edu-preview-content" onClick={(e) => handlePropagation(e)}>
      <EduPreviewTop edu={edu} />
      <div className="edu-validation-container">
        <img src={warning} alt="warning" />
        <div className="edu-validation-text-container">
          <div className="edu-validation-title">דרוש תיקוף</div>
          <div className="edu-validation-text">
            תאריך התיקוף שהוגדר הוא ה28.5.24. בדקו שכל הקבצים רלוונטיים, עדכנו
            את המידע אם יש צורך ותקפו בהתאם.
          </div>
          <div className="edu-blue-text underline">לחצו לאישור תיקוף</div>
        </div>
      </div>
      <EduResSection
        title="פרטים"
        content={<Details edu={edu} uploadByUser={uploadByUser} />}
      />
      <EduResSection title="תגובות" content={<Comments edu={edu} />} />
      {!uploadByUser && (
        <EduResSection title="קרדיטים" content={<Credits edu={edu} />} />
      )}
      <EduResSection
        title="קבצים"
        content={<GenericFilePreview fileTitle={edu.title} edu={edu} />}
      />
      <EduResSection
        title="הגדרות"
        content={<Setting settingsArray={settingsArray} disabled={true} />}
      />
      <EduResSection
        content={<MoreDetails edu={edu} uploadByUser={uploadByUser} />}
      />
      {uploadByUser && <EduResSection content={<UserDetails edu={edu} />} />}
      <DeleteEduText onClick={() => setIsDeletePopup(true)} />
      <DeleteEduPopup
        isOpen={isDeletePopup}
        onClose={() => setIsDeletePopup(false)}
      />
    </div>
  );
};

export default EduPreview;
