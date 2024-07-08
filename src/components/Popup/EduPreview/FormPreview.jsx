import EduPreviewTop from "./EduPreviewTop";
import DeleteEdu from "./DeleteEdu";
import handlePropagation from "../../../utils/handlePropagation";
import EduResSection from "./EduResSection";
import Files from "./Files";
const FormPreview = ({ edu }) => {
  return (
    <div className="edu-preview-content" onClick={(e) => handlePropagation(e)}>
      <EduPreviewTop edu={edu} />
      <EduResSection title="קבצים" content={<Files edu={edu} />} />
      <DeleteEdu />
    </div>
  );
};

export default FormPreview;
