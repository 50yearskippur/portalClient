import "./EduResPreview.css";
import { useState } from "react";
import handlePropagation from "../../../utils/handlePropagation";
import EduPreviewTop from "./EduPreviewTop";
import DeleteEduText from "./DeleteEduText";
import warning from "../../../assets/media/Icons/warningBox.svg";
import EduResSection from "./EduResSection";
import Details from "./Details";
import Comments from "./Comments";
import Credits from "./Credits";
import Files from "./Files";
import Setting from "./Settings";
import MoreDetails from "./MoreDetails";
import Groups from "./Groups";
import DeleteEduPopup from "../DeleteEdu";

const EduPreview = ({ edu }) => {
  const [isDeletePopup, setIsDeletePopup] = useState(false);

  const settingsArray = [
    "התוצר מצריך שימוש באוזניות",
    "התוצר בסיווג גבוה מסגול צמצם ומצריך סיסמא",
    "התוצר יהיה חלק ממאגר המומלצים ליחידות והקורסים הרלוונטיים",
    "התוצר יהיה התוצר הראשי תחת תת הנושא",
    "התוצר נבדק, המידע בו עדכני ומאושר ע”י גורם המקצועי",
  ];
  return (
    <div className="edu-preview-content" onClick={(e) => handlePropagation(e)}>
      <EduPreviewTop edu={edu} />
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
      <EduResSection
        title="הגדרות"
        content={<Setting settingsArray={settingsArray} />}
      />
      <EduResSection content={<MoreDetails edu={edu} />} />
      <EduResSection content={<MoreDetails edu={edu} />} />
      <EduResSection
        title="קורסים או יחידות רלוונטיים"
        content={<Groups groups={["לורם איפסום", "לורם איפסום"]} />}
      />
      <EduResSection
        title="תיוגים"
        content={
          <Groups
            groups={[
              "לורם איפסום",
              "לורם איפסום",
              "לורם איפסום",
              "לורם איפסום",
            ]}
          />
        }
      />
      <DeleteEduText onClick={() => setIsDeletePopup(true)} />
      <DeleteEduPopup
        isOpen={isDeletePopup}
        onClose={() => setIsDeletePopup(false)}
      />
    </div>
  );
};

export default EduPreview;
