import ListTemplate from "../ListTemplate/ListTemplate";
import "./SortBySubject.css";
import { useState, useEffect } from "react";

const SortBySubject = ({ subjects, subSubjectsArray }) => {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const [subSubjects, setSubSubjects] = useState([]);

  const getSubSubjects = (subject) => {
    setSubSubjects(subSubjectsArray);
  };

  useEffect(() => {
    getSubSubjects(subjects[0]);
  }, [subjects]);

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
      <div className="sub-subjects">hello</div>
    </div>
  );
};

export default SortBySubject;
