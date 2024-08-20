import editIcon from '../../../assets/media/Icons/edit.svg';

import './EduPreviewTop.css';

const GenericEduTop = ({ edu, iconSrc }) => {
  return (
    <div className="edu-preview-top">
      <div className="edu-preview-name-container">
        <img src={iconSrc} alt="icon" />
        <div className="edu-preview-title">{edu.title}</div>
      </div>
      <div className="edu-edit-container">
        <img src={editIcon} alt="edit" />
        <div className="edu-blue-text">עריכה</div>
      </div>
    </div>
  );
};
export default GenericEduTop;
