import "./EduPreviewTop.css";
import { useNavigate } from "react-router-dom";
import eduTypeByText from "../../../utils/eduTypeByText";
import Rate from "../../Rate/Rate";
import editIcon from "../../../assets/media/Icons/edit.svg";

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
