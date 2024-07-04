import "./EduPreview.css";
import handlePropagation from "../../../utils/handlePropagation";
import eduTypeByText from "../../../utils/eduTypeByText";
import Rate from "../../Rate/Rate";
import edit from "../../../assets/media/Icons/edit.svg";
import warning from "../../../assets/media/Icons/warningBox.svg";
import EduResSection from "./EduResSection";
import Details from "./Details";
import Comments from "./Comments";
import Credits from "./Credits";
import Files from "./Files";

const EduPreview = ({ edu }) => {
  return (
    <div className="edu-preview-content" onClick={(e) => handlePropagation(e)}>
      <div className="edu-preview-top">
        <div className="edu-preview-top-right">
          <div className="edu-preview-name-container">
            <img src={eduTypeByText(edu?.type)} alt="edu type" />
            <div className="edu-preview-title-container">
              <div className="edu-preview-title">{edu.title}</div>
              <div className="edu-rate-container">
                <Rate clickable={false} numberOfStars={5} />
                <div>(147)</div>
              </div>
            </div>
          </div>
          <div className="edu-preview-type">{edu?.type}</div>
        </div>
        <div className="edu-edit-container">
          <img src={edit} alt="edit" />
          <div className="edu-blue-text">עריכה</div>
        </div>
      </div>
      <div className="edu-validation-container">
        <img src={warning} alt="warning" />
        <div className="edu-validation-text-container">
          <div className="edu-validation-title">דרוש תיקוף</div>
          <div className="edu-validation-text">
            תאריך התיקוף שהוגדר הוא ה28.5.24. בדקו שכל הקבצים רלוונטיים, עדכנו
            את המידע אם יש צורך ותקפו בהתאם.
          </div>
          <div className="edu-blue-text underline">לחצו לאישור תיקוף</div>
        </div>
      </div>
      <EduResSection title="פרטים" content={<Details edu={edu} />} />
      <EduResSection title="תגובות" content={<Comments edu={edu} />} />
      <EduResSection title="קרדיטים" content={<Credits edu={edu} />} />
      <EduResSection title="קבצים" content={<Files edu={edu} />} />
    </div>
  );
};

export default EduPreview;
