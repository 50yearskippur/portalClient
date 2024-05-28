import "./Subjects.css";
import { useState } from "react";

const Subjects = ({ subjects }) => {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);

  return (
    <div className="subjects-container">
      {subjects.map((subject, index) => (
        <div
          className="subject-row"
          key={`subject${index}`}
          style={{ backgroundColor: subject === selectedSubject && "#f2f4fa" }}
          onClick={() => {
            setSelectedSubject(subject);
          }}
        >
          <div className="subject">{subject}</div>
          <div
            className="rectangle"
            style={{
              backgroundColor: subject === selectedSubject && "#7d81b2",
              color: subject === selectedSubject && "#f1f3fb",
            }}
          >
            2
          </div>
        </div>
      ))}
    </div>
  );
};

export default Subjects;
