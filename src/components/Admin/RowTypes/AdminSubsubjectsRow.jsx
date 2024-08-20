import './TemplateRow.css';
import GenericItem from '../GenericObjects/GenericItem';
import deleteIcon from '../../../assets/media/Icons/exitIcon.svg';

const AdminSubsubjectsRow = (item) => {
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
          />
        </div>
      ))}
    </div>,
  ];
};

export default AdminSubsubjectsRow;
