import './TemplateRow.css';
import GenericItem from '../GenericObjects/GenericItem';
import deleteIcon from '../../../assets/media/Icons/exitIcon.svg';
import plus from '../../../assets/media/Icons/plusIcon.svg';
import { PopupContext } from '../../../store/popup-context';
import { useContext } from 'react';
import AddTagPopup from '../../Popup/AddTag/AddTagPopup';

const AdminSubsubjectsRow = (item) => {
  const { showPopup } = useContext(PopupContext);

  return [
    <GenericItem title={item.name} style={{ width: '8.3vw' }} />,
    <div className="subsubject-row-tag-container">
      {item?.subSubjectTags?.map((tag, tagIndex) => (
        <div key={`tag ${tagIndex}`} className="subsubject-row-tag">
          {tag?.title}
          <img
            src={deleteIcon}
            alt="delete tag"
            className="delete-subsubject-icon"
            onClick={() => {
              console.log('delete in db');
            }}
          />
        </div>
      ))}

      <div
        className="subsubject-row-tag"
        onClick={() => showPopup(<AddTagPopup />)}
      >
        <img src={plus} alt="delete tag" className="plus-subsubject-icon" />
      </div>
    </div>,
  ];
};

export default AdminSubsubjectsRow;
