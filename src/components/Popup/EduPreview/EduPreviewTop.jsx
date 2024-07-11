import "./EduPreviewTop.css";
import { useNavigate } from "react-router-dom";
import eduTypeByText from "../../../utils/eduTypeByText";
import Rate from "../../Rate/Rate";
import edit from "../../../assets/media/Icons/edit.svg";

const EduPreviewTop = ({ edu }) => {
  const navigate = useNavigate();
  return (
    <div className="edu-preview-top">
      <div className="edu-preview-top-right">
        <div className="edu-preview-name-container">
          <img src={eduTypeByText(edu?.type)} alt="edu type" />
          <div className="edu-preview-title-container">
            <div className="edu-preview-title">{edu.title}</div>
            <div className="edu-rate-container">
              <Rate clickable={false} numberOfStars={5} />
              <>(147)</>
            </div>
          </div>
        </div>
        <div className="edu-preview-type">{edu?.type}</div>
      </div>
      <div className="edu-edit-container">
        <img src={edit} alt="edit" />
        <div className="edu-blue-text" onClick={() => navigate("admin/upload")}>
          עריכה
        </div>
      </div>
    </div>
  );
};
export default EduPreviewTop;
