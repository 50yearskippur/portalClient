import DeleteEduText from "./DeleteEduText";
import handlePropagation from "../../../utils/handlePropagation";
import EduResSection from "./EduResSection";
import getCorrectFileTemplate from "../../../utils/getCorrectFileTemplate";
import getEduPreviewTopChildren from "../../../utils/getEduPreviewTopChildren";
import MainEduTop from "./MainEduTop";
import getAlbumChildren from "../../../utils/getAlbumChildren";
const MediaPreview = ({ edu }) => {
  return (
    <div className="edu-preview-content" onClick={(e) => handlePropagation(e)}>
      <MainEduTop
        children={getEduPreviewTopChildren(edu.type, edu)}
        edu={edu}
      />
      <EduResSection
        title="קבצים"
        content={getCorrectFileTemplate(edu, edu.type)}
      />
      {getAlbumChildren(edu).map((child) => child)}
      <DeleteEduText />
    </div>
  );
};

export default MediaPreview;
