import "./UploadEduType.css";
import { useState, useEffect, useContext } from "react";
import { PopupContext } from "../../store/popup-context";
import EduTypes from "../EduTypes/EduTypes";
import UploadTop from "./UploadTop";
import UploadBottom from "./UploadBottom";
import PersonalAreaAvater from "../PersonalAreaAvater/PersonalAreaAvater";
import Dropdown from "../Dropdown/Dropdown";
import handlePropagation from "../../utils/handlePropagation";
import AddSubSubject from "./AddSubSubject";
import UploadEdu from "./UploadEdu";
import sentIcon from "../../assets/media/Icons/sentIcon.svg";
import eduTypesTitles from "../../constants/eduTypes";

const UploadEduType = () => {
  const [isSubOpen, setIsSubOpen] = useState(false);
  const { hidePopup, itemDetails, setItemDetails } = useContext(PopupContext);

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

  useEffect(() => {
    setItemDetails((prevDetails) => ({
      ...prevDetails,
      uploader: user,
    }));
  }, [setItemDetails]);

  return (
    <div className="upload-popup" onClick={(e) => handlePropagation(e)}>
      <UploadTop title="העלאת תוכן לפורטל" onClickExit={hidePopup} />
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
              listHeight={"20vh"}
              value={itemDetails["subject"]}
              placeholder={"נושא ראשי"}
              list={["מבואות מודיעין", "טכנולוגיה וסייבר", "שפה", "המלצות"]}
            />
            <Dropdown
              listHeight={"20vh"}
              value={itemDetails["subSubject"]}
              placeholder={"תת נושא"}
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
        <EduTypes
          eduTypesTitles={eduTypesTitles}
          defaultValue={itemDetails["type"]}
        />
      </div>
      <div
        className="button-container"
        style={{
          justifyContent: itemDetails["isNewSubSubject"]
            ? "space-between"
            : "flex-end",
        }}
      >
        {itemDetails["isNewSubSubject"] && (
          <div className="new-sub-subject-created-feedback">
            <img src={sentIcon} alt="send" />
            <div>בקשה לצירוף תת נושא חדש נשלחה</div>
          </div>
        )}
        <UploadBottom
          NextPopup={<UploadEdu />}
          disabled={
            !itemDetails["type"] ||
            !itemDetails["subSubject"] ||
            !itemDetails["subject"] ||
            !itemDetails["uploader"]
          }
        />
      </div>
      <AddSubSubject isOpen={isSubOpen} onClose={() => setIsSubOpen(false)} />
    </div>
  );
};

export default UploadEduType;
