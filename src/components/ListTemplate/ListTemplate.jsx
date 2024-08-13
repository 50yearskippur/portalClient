import "./ListTemplate.css";
import React from 'react';
const ListTemplate = ({
  subjects,
  getSubSubjects,
  selectedSubject,
  setSelectedSubject,
}) => {

  const handleItemClick = (subject) => {
    setSelectedSubject(subject);
    getSubSubjects(subject);
  };

  return (
    <div className="list-template-container">
      {subjects?.map((subject, index) => {
        return (
          <div
            className="list-item"
            key={`listItem${index}`}
            style={{
              backgroundColor:
                subject.title === selectedSubject.title && "#f2f4fa",
            }}
            onClick={() => handleItemClick(subject)}
          >
            <div className="list-item-text">{subject.title}</div>
            <div
              className="rectangle"
              style={{
                backgroundColor:
                  subject.title === selectedSubject.title && "#7d81b2",
                color: subject.title === selectedSubject.title && "#f1f3fb",
              }}
            >
              {subject.subSubjects.length}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListTemplate;
