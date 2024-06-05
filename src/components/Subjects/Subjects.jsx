import "./Subjects.css";

const Subjects = ({
  subjects,
  getSubSubjects,
  selectedSubject,
  setSelectedSubject,
}) => {
  return (
    <div className="subjects-container">
      {subjects?.map((subject, index) => {
        return (
          <div
            className="subject-row"
            key={`subject${index}`}
            style={{
              backgroundColor:
                subject.title === selectedSubject.title && "#f2f4fa",
            }}
            onClick={() => {
              setSelectedSubject(subject);
              getSubSubjects(subject);
            }}
          >
            <div className="subject">{subject.title}</div>
            <div
              className="rectangle"
              style={{
                backgroundColor:
                  subject.title === selectedSubject.title && "#7d81b2",
                color: subject.title === selectedSubject.title && "#f1f3fb",
              }}
            >
              2
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Subjects;
