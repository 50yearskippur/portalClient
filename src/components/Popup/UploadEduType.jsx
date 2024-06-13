import "./UploadEduType.css";
import { useContext } from "react";
import { PopupContext } from "../../store/popup-context";
import UploadEdu from "./UploadEdu";
import EduTypes from "../EduTypes/EduTypes";
import UploadTop from "./UploadTop";
import PersonalAreaAvater from "../PersonalAreaAvater/PersonalAreaAvater";
import Dropdown from "../Dropdown/Dropdown";
import handlePropagation from "../../utils/handlePropagation";

const UploadEduType = () => {
  const { showPopup } = useContext(PopupContext);

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
      <div className="upload-popup-content">
        <div className="upload-popup-info">
          <div
            className="upload-popup-text-container"
            style={{ marginTop: "19px" }}
          >
            <div
              className="upload-popup-text"
              style={{ width: "109px", height: " 29px" }}
            >
              שם מעלה התוכן:
            </div>
            <PersonalAreaAvater
              name="YC"
              style={{
                width: "32px",
                height: "32px",
                fontSize: "14px",
                borderRadius: "43px",
              }}
            />
            <div className="upload-popup-detale">{user?.fullName} (אתה)</div>
          </div>
          <div className="upload-popup-text-container">
            <div
              className="upload-popup-text"
              style={{ width: "109px", height: " 29px" }}
            >
              נושא:
            </div>
            <Dropdown
              list={[
                "מבואות מודיעין",
                "טכנולוגיה וסייבר",
                "שפה",
                "המלצות",
                "תת נושא חדש",
              ]}
            />
            <Dropdown
              list={[
                "מבואות מודיעין",
                "טכנולוגיה וסייבר",
                "שפה",
                "המלצות",
                "תת נושא חדש",
              ]}
            />
          </div>
        </div>
        <div className="upload-popup-text" style={{ marginTop: "18px" }}>
          בחרו את סוג התוצר אותו תרצו להעלות
        </div>
        <EduTypes />
      </div>
      <div className="upload-popup-line" style={{ bottom: "6.67vh" }} />
      <div className="upload-button-container">
        <div
          className="upload-popup-button"
          onClick={() => showPopup(<UploadEdu />)}
        >
          המשך
        </div>
      </div>
    </div>
  );
};

export default UploadEduType;
