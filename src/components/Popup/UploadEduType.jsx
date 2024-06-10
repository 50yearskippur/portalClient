import "./UploadEduType.css";
import { useContext } from "react";
import { PopupContext } from "../../store/popup-context";
import UploadEdu from "./UploadEdu";
import EduTypes from "../EduTypes/EduTypes";
import UploadTop from "./UploadTop";
import PersonalAreaAvater from "../PersonalAreaAvater/PersonalAreaAvater";
import Dropdown from "../Dropdown/Dropdown";

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
    <div className="upload-popup">
      <UploadTop />
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
      <div
        className="upload-popup-text-container"
        style={{ marginTop: "15px" }}
      >
        <div
          className="upload-popup-text"
          style={{ width: "109px", height: " 29px" }}
        >
          נושא:
        </div>
        <Dropdown
          list={["מבואות מודיעין", "טכנולוגיה וסייבר", "שפה", "המלצות"]}
        />
        <Dropdown
          list={["מבואות מודיעין", "טכנולוגיה וסייבר", "שפה", "המלצות"]}
        />
      </div>
      <div className="upload-popup-text" style={{ marginTop: "18px" }}>
        בחרו את סוג התוצר אותו תרצו להעלות
      </div>
      <EduTypes />
      <div
        className="upload-popup-button"
        style={{ marginTop: "32px" }}
        onClick={() => showPopup(<UploadEdu />)}
      >
        המשך
      </div>
    </div>
  );
};

export default UploadEduType;
