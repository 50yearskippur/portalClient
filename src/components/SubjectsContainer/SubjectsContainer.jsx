import "./SubjectsContainer.css";
import ListTemplate from "../ListTemplate/ListTemplate";
import SubSubjects from "../SubSubjects/SubSubjects";
import { useState, useEffect } from "react";

const SubjectsContainer = ({ subjects }) => {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const [subSubjects, setSubSubjects] = useState([]);

  const getSubSubjects = (subject) => {
    // After connect to the api, change to get subSubject by the given subject
    console.log("getSubSubjects", subject);
    setSubSubjects([
      {
        title: "זירת סוריה",
        description: "בואו ללמוד איתנו על זירת סוריה!",
        eduResourse: [{}, {}, {}, {}, {}],
      },
      {
        title: "זירת סוריה",
        description: "בואו ללמוד איתנו על זירת סוריה!",
        eduResourse: [{}, {}, {}, {}, {}],
      },
      {
        title: "זירת סוריה",
        description: "בואו ללמוד איתנו על זירת סוריה!",
        eduResourse: [{}],
      },
      {
        title: "זירת סוריה",
        description: "בואו ללמוד איתנו על זירת סוריה!",
        eduResourse: [{}, {}, {}, {}, {}, {}, {}],
      },
      {
        title: "זירת סוריה",
        description: "בואו ללמוד איתנו על זירת סוריה!",
        eduResourse: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
      },
      {
        title: "זירת סוריה",
        description: "בואו ללמוד איתנו על זירת סוריה!",
        eduResourse: [{}, {}],
      },
    ]);
  };

  useEffect(() => {
    getSubSubjects(subjects[0]);
  }, [subjects]);

  return (
    <div className="subjects-container-wrapper">
      
      <SubSubjects subject={selectedSubject} subSubjects={subSubjects} />
    </div>
  );
};

export default SubjectsContainer;
