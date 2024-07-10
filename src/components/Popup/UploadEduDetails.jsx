import "./UploadEduDetails.css";
import { useContext } from "react";
import { PopupContext } from "../../store/popup-context";
import handlePropagation from "../../utils/handlePropagation";
import UploadTop from "./UploadTop";
import UploadBottom from "./UoloadBottom";
import UploadEdu from "./UploadEdu";
import Dropdown from "../Dropdown/Dropdown";
import Switch from "../Switch/Switch";
import SearchDropdown from "../Search/SearchDropdown";

const UploadEduDetails = () => {
  const { hidePopup } = useContext(PopupContext);
  return (
    <div className="upload-popup" onClick={(e) => handlePropagation(e)}>
      <UploadTop title="העלאת תוצר לפורטל" onClickExit={hidePopup} />
      <div className="upload-popup-content" style={{ gap: "32px" }}>
        <div className="upload-details-text-container">
          <div className="upload-details-text">לא חובה אבל יעזור לנו מאוד </div>
          <div className="upload-popup-detale">
            הפרטים האלו יעזרו לנו בהתאמת החומר לקורסים ולמשתמשי הפורטל
          </div>
        </div>
        <div className="upload-details-approval">
          <div className="upload-details-text">מפקד מאשר (אופציונלי)</div>
          <div className="upload-details-row">
            <div className="upload-details-container">
              <div className="upload-popup-text">שם התוצר:</div>
              <input type="text" className="upload-input-field" />
            </div>
            <div className="upload-details-container">
              <div className="upload-popup-text">רמת קושי:</div>
              <Dropdown
                list={["מותאם לכל הרמות", "רמה 1", "רמה 2", "רמה 3"]}
                style={{ width: "100%", height: "40px" }}
              />
            </div>
          </div>
          <div className="upload-details-row">
            <div className="upload-details-container">
              <div className="upload-popup-text">מס' טלפון:</div>
              <input type="text" className="upload-input-field" />
            </div>
            <div className="upload-details-container">
              <div className="upload-popup-text">מטרת השיעור / תוצר:</div>
              <input type="text" className="upload-input-field" />
            </div>
          </div>
        </div>
        <div className="switch-container">
          <Switch defaultChecked={true} />
          <div className="upload-popup-text">
            תוכן זה יכול לשמש לקורסים נוספים
          </div>
        </div>
        <div className="upload-popup-line" style={{ top: "44.25vh" }} />
        <div className="upload-details-text-container">
          <div className="upload-details-text">הוספת תיוגים</div>
          <SearchDropdown
            options={[
              "איפסום 1",
              "איפסום 2",
              "איפסום 3",
              "איפסום 4",
              "פורם איפסום",
            ]}
          />
        </div>
      </div>
      <UploadBottom PreviousPopup={UploadEdu} />
    </div>
  );
};

export default UploadEduDetails;
