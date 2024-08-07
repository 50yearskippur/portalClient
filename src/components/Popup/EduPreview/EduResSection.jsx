import "./EduResSection.css";

const EduResSection = ({ title, content }) => {
  return (
    <div className="edu-section-container">
      {title && <div className="edu-section-title">{title}</div>}
      {content}
    </div>
  );
};

export default EduResSection;
