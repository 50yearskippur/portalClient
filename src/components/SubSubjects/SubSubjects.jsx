import React from 'react';
import "./SubSubjects.css";
import PageTemplate from "../PageTemplate/PageTemplate";

const SubSubjects = ({
  subject,
  subSubjects,
  ItemComponent,
  numberOfItemsInLine,
}) => {
  return (
    <div className="sub-subjects-wrapper">
      <div className="sub-subjects-title">{subject.title}</div>
      <div>
        <PageTemplate
          ItemComponent={ItemComponent}
          numberOfItemsInLine={numberOfItemsInLine}
          gapSize={2}
          data={subSubjects}
        />
      </div>
    </div>
  );
};

export default SubSubjects;
