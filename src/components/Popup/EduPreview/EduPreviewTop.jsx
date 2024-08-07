import "./EduPreviewTop.css";
import { useContext } from "react";
import { PopupContext } from "../../../store/popup-context";
import { useNavigate } from "react-router-dom";
import eduTypeByText from "../../../utils/eduTypeByText";
import Rate from "../../Rate/Rate";
import editIcon from "../../../assets/media/Icons/edit.svg";

const EduPreviewTop = ({
  edu,
  iconDetails = {
    text: "עריכה",
    icon: editIcon,
    onClick: (navigate, hidePopup) => {
      navigate("admin/upload");
      hidePopup();
    },
  },
}) => {
  const navigate = useNavigate();
  const { hidePopup } = useContext(PopupContext);

  return [
    <div className="edu-preview-top-right">
      <div className="edu-preview-name-container">
        <img src={eduTypeByText(edu?.type)} alt="edu type" />
        <div className="edu-preview-title-container">
          <div className="edu-preview-title">{edu.title}</div>
          <div className="edu-rate-container">
            <Rate
              style={{ width: "24px" }}
              clickable={false}
              numberOfStars={5}
            />
            <>(147)</>
          </div>
        </div>
        <div className="edu-preview-type">{edu?.type}</div>
      </div>
      <div
        className="edu-edit-container"
        onClick={() => iconDetails.onClick(navigate, hidePopup)}
      >
        <img src={iconDetails.icon} alt="edit" />
        <div className="edu-blue-text">{iconDetails.text}</div>
      </div>
      ,
    </div>,
  ];
};
export default EduPreviewTop;
