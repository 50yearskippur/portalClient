import "./EduResPreview.css";
import handlePropagation from "../../../utils/handlePropagation";
import EduPreviewTop from "./EduPreviewTop";
import DeleteEdu from "./DeleteEdu";
import warning from "../../../assets/media/Icons/warningBox.svg";
import EduResSection from "./EduResSection";
import Details from "./Details";
import Comments from "./Comments";
import Credits from "./Credits";
import Files from "./Files";
import Setting from "./Settings";
import MoreDetails from "./MoreDetails";
import Groups from "./Groups";

const EduPreview = ({ edu }) => {
  return (
    <div className="edu-preview-content" onClick={(e) => handlePropagation(e)}>
      <EduPreviewTop edu={edu} />
      
      <DeleteEdu />
    </div>
  );
};

export default EduPreview;
