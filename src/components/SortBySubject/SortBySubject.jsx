import React from 'react';
import ListTemplate from "../ListTemplate/ListTemplate";
import "./SortBySubject.css";
import SubSubjects from "../SubSubjects/SubSubjects";
import { useState, useEffect } from "react";
import { designTemplatesArray } from "../../store/designTemplatesArray";

const SortBySubject = ({
  subjects,
  ItemComponent = null,
  numberOfItemsInLine = 1,
  getDetailsFromJSON = false,
}) => {

  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const [subSubjects, setSubSubjects] = useState(subjects[0].subSubjects);

  const getSubSubjects = (subject) => {
  setSubSubjects(subject.subSubjects);
  };

  const getNumberOfItemsInLine = () => {
    if (getDetailsFromJSON) {
      return designTemplatesArray[selectedSubject.title].numberOfItemsInLine;
    }
    return numberOfItemsInLine;
  };

  const getItemComponent = () => {
    if (getDetailsFromJSON) {
      return designTemplatesArray[selectedSubject.title].itemComponent;
    }
    return ItemComponent;
  };

  useEffect(() => {
    getSubSubjects(selectedSubject);
  }, [selectedSubject]);

  return (
    <div className="sort-by-subject-container">
      <div className="list-container">
        <ListTemplate
          subjects={subjects}
          getSubSubjects={getSubSubjects}
          selectedSubject={selectedSubject}
          setSelectedSubject={setSelectedSubject}
        />
      </div>
      <div className="sub-subjects">
        <SubSubjects
          subject={selectedSubject}
          subSubjects={subSubjects}
          numberOfItemsInLine={getNumberOfItemsInLine()}
          ItemComponent={getItemComponent()}
        />
      </div>
    </div>
  );
};

export default SortBySubject;
