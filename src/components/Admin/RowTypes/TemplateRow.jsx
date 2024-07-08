import { useContext } from "react";
import { PopupContext } from "../../../store/popup-context";
import EduResPreview from "../../Popup/EduPreview/EduResPreview";
import arrow from "../../../assets/media/Icons/curvedArrow.svg";

const TemplateRow = ({ children, item }) => {
  const { showPopup } = useContext(PopupContext);
  return (
    <div
      className="generic-row-container"
      onClick={() => showPopup(<EduResPreview edu={item} />)}
    >
      {children.map((child, index) => (
        <div key={`child ${index}`} className="generic-row-child">
          {child}
        </div>
      ))}
      <img src={arrow} alt="arrow" className="generic-row-arrow" />
    </div>
  );
};

export default TemplateRow;
