import './TemplateTable.css';
import React from 'react';
import TemplateRow from '../RowTypes/TemplateRow';
import getAdminChildren from '../../../utils/getAdminChildren';
import getAdminPopUp from '../../../utils/getAdminPopup';

const TemplateTable = ({ dataArr, selectedTab, onClick, icon }) => {
  return (
    <div className="table-container">
      {dataArr?.map((item, index) => (
        <TemplateRow
          icon={icon}
          key={index} // Assign a unique key using the index
          children={getAdminChildren(item, selectedTab)}
          item={item}
          onClick={onClick}
          PopUp={getAdminPopUp(selectedTab)}
        />
      ))}
    </div>
  );
};

export default TemplateTable;
