import './TemplateRow.css';
import GenericItem from '../GenericObjects/GenericItem';
import deleteIcon from '../../../assets/media/Icons/exitIcon.svg';
import temporaryImage from '../../../assets/img/party.png';

const AdminSubsubjectsRow = (item) => {
  return [
    <div className="generic-row-item-container">
      <img
        src={temporaryImage}
        alt="subsubject image"
        className="subsubject-img"
      />
      <GenericItem title={item.subjectName} style={{ width: '8.3vw' }} />
    </div>,
    <div className="subsubject-row-tag-container">
      {item?.subSubjectTags?.map((tag, tagIndex) => (
        <div key={`tag ${tagIndex}`} className="subsubject-row-tag">
          {tag?.title}
          <img
            src={deleteIcon}
            alt="delete tag"
            className="delete-subsubject-icon"
          />
        </div>
      ))}
    </div>,
  ];
};

export default AdminSubsubjectsRow;
