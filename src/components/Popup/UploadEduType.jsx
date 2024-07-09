import "./UploadEduType.css";
import { useState } from "react";
import EduTypes from "../EduTypes/EduTypes";
import UploadTop from "./UploadTop";
import UploadBottom from "./UoloadBottom";
import PersonalAreaAvater from "../PersonalAreaAvater/PersonalAreaAvater";
import Dropdown from "../Dropdown/Dropdown";
import handlePropagation from "../../utils/handlePropagation";
import AddSubSubject from "./AddSubSubject";
import UploadEdu from "./UploadEdu";

const UploadEduType = () => {
  const [isSubOpen, setIsSubOpen] = useState(false);
  const [newSubSubjectValue, setNewSubSubjectValue] = useState("");

  const handleNewSubClick = () => {
    setIsSubOpen(true);
  };

  //delete in production
  const user = {
    fullName: "יובל כהן",
    email: "email@gmail.com",
    personalNumber: "123456789",
    unit: "8200",
    group: 'קורס קפ"ה',
    role: "user",
    favorites: ["1", "2", "3"],
  };

  return (
    <div className="upload-popup" onClick={(e) => handlePropagation(e)}>
      <UploadTop />
      <div className="upload-popup-content" style={{ gap: "24px" }}>
        <div className="upload-popup-info">
          <div className="upload-popup-text-container">
            <div
              className="upload-popup-text"
              style={{ width: "109px", height: "29px" }}
            >
              שם מעלה התוכן:
            </div>
            <PersonalAreaAvater
              name="יכ"
              style={{
                width: "32px",
                height: "32px",
                fontSize: "14px",
                borderRadius: "43px",
              }}
            />
            <div className="upload-popup-detailes">{user?.fullName}</div>
          </div>
          <div className="upload-popup-text-container">
            <div
              className="upload-popup-text"
              style={{ width: "109px", height: " 29px" }}
            >
              נושא:
            </div>
            <Dropdown
              newSubValue={newSubSubjectValue}
              list={[
                "מבואות מודיעין",
                "טכנולוגיה וסייבר",
                "שפה",
                "המלצות",
                "נושא חדש",
              ]}
              onNewSubClick={handleNewSubClick}
            />
            <Dropdown
              newSubValue={newSubSubjectValue}
              list={[
                "מבואות מודיעין",
                "טכנולוגיה וסייבר",
                "שפה",
                "המלצות",
                "תת נושא חדש",
              ]}
              onNewSubClick={handleNewSubClick}
            />
          </div>
        </div>
        <div className="upload-popup-text">
          בחרו את סוג התוכן אותו תרצו להעלות
        </div>
        <EduTypes />
      </div>
      <div
        className="button-container"
        style={{ justifyContent:newSubSubjectValue? "space-between":"flex-end"}}
      >
        {newSubSubjectValue&&<div className="feedback">בקשה לצירוף תת נושא חדש נשלחה</div>}
        <UploadBottom NextPopup={<UploadEdu />} />
      </div>

      <AddSubSubject
        setValueFromInput={setNewSubSubjectValue}
        isOpen={isSubOpen}
        onClose={() => setIsSubOpen(false)}
      />
    </div>
  );
};

export default UploadEduType;
