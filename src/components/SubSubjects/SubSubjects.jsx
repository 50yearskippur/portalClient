import "./SubSubjects.css";

const SubSubjects = ({ subject, subSubjects, ItemComponent }) => {
  return (
    <div className="sub-subjects-wrapper">
      <div className="sub-subjects-title">{subject.title}</div>
      <div>
        {subSubjects.map((subSubject, index) => {
          return <ItemComponent subSubject={subSubject} key={`item${index}`} />;
        })}
        {/* <ForYouItem subSubject={subSubjects[0]} /> */}
      </div>
    </div>
  );
};

export default SubSubjects;
