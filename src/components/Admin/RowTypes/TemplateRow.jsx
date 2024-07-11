import { useContext } from "react";
import { PopupContext } from "../../../store/popup-context";

const TemplateRow = ({ children, item, PopUp, onClick }) => {
  const { showPopup } = useContext(PopupContext);
  return (
    <div
      className="generic-row-container"
      onClick={onClick ? onClick : () => showPopup(<PopUp edu={item} />)}
    >
      {children.map((child, index) => (
        <div key={`child ${index}`} className="generic-row-child">
          {child}
        </div>
      ))}
      <img src={item.icon} alt="arrow" className="generic-row-arrow" />
    </div>
  );
};

export default TemplateRow;
