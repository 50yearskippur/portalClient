import React from 'react';
import TemplateTable from '../GenericObjects/TemplateTable';

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
    <div className="grouped-template-table">
      {Object.keys(groupedData).map((subjectName) => (
        <div key={subjectName} className="grouped-section">
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
