import React from "react";
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
      <PageTemplate
        ItemComponent={ItemComponent}
        numberOfItemsInLine={numberOfItemsInLine}
        gapColumnSizeInPercentage={1.5}
        gapRowSizeInPx={24}
        data={subSubjects}
      />
    </div>
  );
};

export default SubSubjects;
