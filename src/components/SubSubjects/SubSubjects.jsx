import "./SubSubjects.css";

const SubSubjects = ({subject}) => {
  return (
    <div className="subject-container">
      <div className="subject-title">{subject.title}</div>
      {subject.subSubject.map((subSubject, index) => {
        return (
          <div key={`subSubject${index}`} className="sub-subject-container">
            <div className="sub-subject-content">
              <div className="sub-subject-title">{subSubject.title}</div>
              <div className="sub-subject-description">
                {subSubject.description}
              </div>
              <div className="sub-subject-edu-container">
                {subSubject.eduResourse.map((eduResource, index) => (
                  <div className="sub-subject-edu" key={`edu${index}`} />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubSubjects;
