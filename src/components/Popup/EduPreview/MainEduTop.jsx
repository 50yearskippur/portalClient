import "./EduPreviewTop.css";

const MainEduTop = ({ children }) => {
  return (
    <div className="edu-preview-top">
      {children.map((child, index) => (
        <div key={`child ${index}`} className="generic-row-child">
          {child}
        </div>
      ))}
    </div>
  );
};
export default MainEduTop;
