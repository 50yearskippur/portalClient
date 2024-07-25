import EduPreviewTop from "./EduPreviewTop";
import DeleteEduText from "./DeleteEduText";
import handlePropagation from "../../../utils/handlePropagation";
import EduResSection from "./EduResSection";
import Files from "./Files";
import getEduPreviewTopChildren from "../../../utils/getEduPreviewTopChildren";
import MainEduTop from "./MainEduTop";
const MediaPreview = ({ edu }) => {
  console.log(edu.type);
  return (
    <div className="edu-preview-content" onClick={(e) => handlePropagation(e)}>
      <MainEduTop
        children={getEduPreviewTopChildren(edu.type, edu)}
        edu={edu}
      />
      <EduResSection title="קבצים" content={<Files edu={edu} />} />
      <DeleteEduText />
    </div>
  );
};

export default MediaPreview;
