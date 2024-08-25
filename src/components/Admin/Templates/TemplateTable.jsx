import TemplateRow from './TemplateRow';
import './TemplateTable.css';
import getAdminChildren from '../../../utils/getAdminChildren';
import React from 'react';

const TemplateTable = ({ dataArr }) => {
  return (
    <div className="table-container">
      {dataArr?.map((item, index) => (
        <TemplateRow
          key={`edu admin ${index}`}
          children={getAdminChildren(item)}
        />
      ))}
    </div>
  );
};

export default TemplateTable;
