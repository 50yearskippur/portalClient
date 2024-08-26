import React from 'react';
import TemplateTable from '../GenericObjects/TemplateTable';
import './GroupedTemplateTable.css';

const GroupedTemplateTable = ({ data, selectedTab }) => {
  const groupedData = data.reduce((acc, item) => {
    const { subjectName } = item;
    if (!acc[subjectName]) {
      acc[subjectName] = [];
    }
    acc[subjectName].push(item);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(groupedData).map((subjectName) => (
        <div key={subjectName}>
          <div className="grouped-section-title">{subjectName}</div>
          <TemplateTable
            dataArr={groupedData[subjectName]}
            selectedTab={selectedTab}
            onClick={() => {}}
          />
        </div>
      ))}
    </div>
  );
};

export default GroupedTemplateTable;
