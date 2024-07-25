"./EduPreviewTop.css";
import { useNavigate } from "react-router-dom";
import eduTypeByText from "../../../utils/eduTypeByText";
import Rate from "../../Rate/Rate";
import editIcon from "../../../assets/media/Icons/edit.svg";
import picture from "../../../assets/media/Upload/picture.svg";

const PhotoPreviewTop = (edu) => {
  console.log(edu);
  let iconDetails = {
    text: "עריכה",
    icon: editIcon,
    onClick: (navigate) => {
      navigate("admin/upload");
    },
  };
  const navigate = useNavigate();
  return [
    <div className="edu-preview-top-right">
      <div className="edu-preview-name-container">
        <img src={picture} alt="edu type" />
        <div className="edu-preview-title-container">
          <div className="edu-preview-title">{edu.title}</div>
        </div>
      </div>
    </div>,
    <div
      className="edu-edit-container"
      onClick={() => iconDetails.onClick(navigate)}
    >
      <img src={iconDetails.icon} alt="edit" />
      <div className="edu-blue-text">{iconDetails.text}</div>
    </div>,
  ];
};

export default PhotoPreviewTop;
