import "./SubSubjects.css";
import PageTemplate from "../PageTemplate/PageTemplate";

const SubSubjects = ({ subject, subSubjects, ItemComponent }) => {
  return (
    <div className="sub-subjects-wrapper">
      <div className="sub-subjects-title">{subject.title}</div>
      <div>
        {/* {subSubjects.map((subSubject, index) => {
          return <ItemComponent item={subSubject} key={`item${index}`} />;
        })} */}
        <PageTemplate
          ItemComponent={ItemComponent}
          numberOfItemsInLine={3}
          gapSize={2}
          data={subSubjects}
        />
        {/* <ForYouItem subSubject={subSubjects[0]} /> */}
      </div>
    </div>
  );
};

export default SubSubjects;
