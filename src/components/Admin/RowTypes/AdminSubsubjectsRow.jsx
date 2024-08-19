import './TemplateRow.css';
import GenericItem from '../GenericObjects/GenericItem';

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
  ];
};

export default AdminSubsubjectsRow;
