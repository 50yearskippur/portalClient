import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PopupContext } from '../../../store/popup-context';
import editIcon from '../../../assets/media/Icons/edit.svg';
import './EduPreviewTop.css';

const GenericEduTop = ({ edu, iconSrc, pageType }) => {
  const navigate = useNavigate();
  const { hidePopup, setItemDetails } = useContext(PopupContext);

  const editEdu = () => {
    navigate('/admin/upload', {
      state: { pageType },
    });
    hidePopup();
    setItemDetails(edu);
  };

  return (
    <div className="edu-preview-top">
      <div className="edu-preview-name-container">
        <img src={iconSrc} alt="icon" />
        <div className="edu-preview-title">{edu.title}</div>
      </div>
      <div className="edu-edit-container" onClick={editEdu}>
        <img src={editIcon} alt="edit" />
        <div className="edu-blue-text">עריכה</div>
      </div>
    </div>
  );
};
export default GenericEduTop;
