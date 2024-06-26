import "./RowTemplate.css";
import arrow from "../../assets/media/Icons/curvedArrow.svg";

const RowTemplate = ({ children }) => {
  return (
    <div className="generic-row-container">
      {children.map((child, index) => (
        <div key={`child ${index}`} className="generic-row-child">
          {child}
        </div>
      ))}
      <img src={arrow} alt="arrow" className="generic-row-arrow" />
    </div>
  );
};

export default RowTemplate;
