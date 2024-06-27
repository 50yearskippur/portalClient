import ListTemplate from "../ListTemplate/ListTemplate";
import "./SortBySubject.css";
import SubSubjects from "../SubSubjects/SubSubjects";
import { useState, useEffect } from "react";

const SortBySubject = ({ subjects, ItemComponent, numberOfItemsInLine }) => {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const [subSubjects, setSubSubjects] = useState(subjects[0].subSubjects);

  const getSubSubjects = (subject) => {
    console.log(subject);
    setSubSubjects(subject.subSubjects);
    console.log(subject.subSubjects);
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
          numberOfItemsInLine={numberOfItemsInLine}
          subject={selectedSubject}
          subSubjects={subSubjects}
          ItemComponent={ItemComponent}
        />
      </div>
    </div>
  );
};

export default SortBySubject;
