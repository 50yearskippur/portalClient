import TemplateRow from "./TemplateRow";
import "./TemplateTable.css";
import getAdminChildren from "../../../utils/getAdminChildren";
import React from 'react';

const TemplateTable = ({ dataArr, selectedTab }) => {
  return (
    <div className="table-container">
      {dataArr?.map((item, index) => (
        <TemplateRow
          key={`edu admin ${index}`}
          children={getAdminChildren(item, selectedTab)}
        />
      ))}
    </div>
  );
};

export default TemplateTable;
