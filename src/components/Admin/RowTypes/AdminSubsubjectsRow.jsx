import './TemplateRow.css';
import GenericItem from '../GenericObjects/GenericItem';
import deleteIcon from '../../../assets/media/Icons/exitIcon.svg';

import PersonalAreaAvater from '../../PersonalAreaAvater/PersonalAreaAvater';
const AdminSubsubjectsRow = (item) => {
  return [
    <PersonalAreaAvater
      style={{
        width: '40px',
        height: '40px',
        fontSize: '14px',
        borderRadius: '43px',
      }}
      name={item.personalAreaName}
    />,
    <GenericItem title={item.subjectName} style={{ width: '8.3vw' }} />,
    <div className="subsubject-row-tag-container">
      {item?.subSubjectTags?.map((tag, tagIndex) => (
        <div key={`tag ${tagIndex}`} className="subsubject-row-tag">
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
