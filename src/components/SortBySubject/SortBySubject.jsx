import ListTemplate from "../ListTemplate/ListTemplate";
import "./SortBySubject.css";
import SubSubjects from "../SubSubjects/SubSubjects";
import { useState, useEffect } from "react";

const SortBySubject = ({
  subjects,
  subSubjectsArray,
  ItemComponent,
  numberOfItemsInLine,
}) => {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const [subSubjects, setSubSubjects] = useState(subSubjectsArray);

  const getSubSubjects = (subject) => {
    setSubSubjects(subSubjectsArray);
  };

  useEffect(() => {
    getSubSubjects(subSubjectsArray[0]);
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
          numberOfItemsInLine={numberOfItemsInLine}
          getSubSubjects={getSubSubjects}
          subject={selectedSubject}
          subSubjects={subSubjects}
          ItemComponent={ItemComponent}
        />
      </div>
    </div>
  );
};

export default SortBySubject;
