import handlePropagation from "../../../utils/handlePropagation";
import DeleteEduText from "./DeleteEduText";
import EduResSection from "./EduResSection";

const CommentPreview = ({ edu }) => {
  return (
    <div className="edu-preview-content" onClick={(e) => handlePropagation(e)}>
      <EduPreviewTop edu={edu} />
      <EduResSection title="תגובות" content={<Comments edu={edu} />} />
      <DeleteEduText text="מחיקת תגובות מסומנות" />
    </div>
  );
};

export default CommentPreview;
