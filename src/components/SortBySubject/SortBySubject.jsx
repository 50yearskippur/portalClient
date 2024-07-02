import ListTemplate from "../ListTemplate/ListTemplate";
import "./SortBySubject.css";
import SubSubjects from "../SubSubjects/SubSubjects";
import { useState, useEffect } from "react";

const SortBySubject = ({ subjects, ItemComponent, numberOfItemsInLine }) => {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const [subSubjects, setSubSubjects] = useState(subjects[0].subSubjects);

  const getSubSubjects = (subject) => {
    setSubSubjects(subject.subSubjects);
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
        />
      </div>
    </div>
  );
};

export default SortBySubject;
