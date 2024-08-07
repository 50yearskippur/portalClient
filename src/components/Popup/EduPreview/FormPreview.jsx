import DeleteEduText from "./DeleteEduText";
import handlePropagation from "../../../utils/handlePropagation";
import EduResSection from "./EduResSection";
import getEduPreviewTopChildren from "../../../utils/getEduPreviewTopChildren";
import MainEduTop from "./MainEduTop";
import getCorrectFileTemplate from "../../../utils/getCorrectFileTemplate";
import Setting from "./SettingsList";

const FormPreview = ({ edu }) => {
  const settingsArray = ["הטופס יופיע בטפסים מומלצים"];
  return (
    <div className="edu-preview-content" onClick={(e) => handlePropagation(e)}>
      <MainEduTop
        children={getEduPreviewTopChildren(edu.type, edu)}
        edu={edu}
      />{" "}
      <EduResSection
        title="קבצים"
        content={getCorrectFileTemplate(edu, edu.type)}
      />
      <EduResSection
        title="הגדרות"
        content={<Setting settingsArray={settingsArray} />}
      />
      <DeleteEduText />
    </div>
  );
};

export default FormPreview;
