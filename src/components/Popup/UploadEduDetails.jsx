import "./UploadEduDetails.css";
import { useContext } from "react";
import { PopupContext } from "../../store/popup-context";
import handlePropagation from "../../utils/handlePropagation";
import UploadTop from "./UploadTop";
import UploadBottom from "./UploadBottom";
import UploadEdu from "./UploadEdu";
import Dropdown from "../Dropdown/Dropdown";
import Switch from "../Switch/Switch";
import SearchDropdown from "../Search/SearchDropdown";

const UploadEduDetails = () => {
  const { hidePopup } = useContext(PopupContext);
  return (
    <div className="upload-popup" onClick={(e) => handlePropagation(e)}>
      <UploadTop title="העלאת תוכן לפורטל" onClickExit={hidePopup} />
      <div className="upload-popup-content">
        <div className="upload-details-text-container">
          <div className="upload-details-text">לא חובה אבל יעזור לנו מאוד </div>
          <div
            className="upload-popup-detailes"
            style={{ marginBottom: "1.8vh" }}
          >
            הפרטים האלו יעזרו לנו בהתאמת החומר לקורסים ולמשתמשי הפורטל
          </div>
        </div>
        <div className="upload-details-approval">
          <div className="upload-details-text">מפקד מאשר (אופציונלי)</div>
          <div className="upload-details-row">
            <div className="upload-details-container">
              <div className="upload-popup-text">שם מלא:</div>
              <input type="text" className="upload-input-field" />
            </div>
            <div className="upload-details-container">
              <div className="upload-popup-text">דרגה:</div>
              <Dropdown
                defaultValue="בחרו דרגה"
                list={[
                  'סמ"ר',
                  'רס"ל',
                  'רס"ר',
                  'רס"ם',
                  'רס"ב',
                  'רנ"ם',
                  'רנ"ג',
                  'סג"ם',
                  "סגן",
                  "סרן",
                  'רס"ן',
                  'סא"ל',
                  'אל"ם',
                  'תא"ל',
                  "אלוף",
                ]}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="upload-details-row" style={{ marginBottom: "2.5vh" }}>
            <div className="upload-details-container">
              <div className="upload-popup-text">מס' טלפון:</div>
              <input type="text" className="upload-input-field" />
            </div>
            <div className="upload-details-container">
              <div className="upload-popup-text">מטרת השיעור / תוכן:</div>
              <input type="text" className="upload-input-field" />
            </div>
          </div>
        </div>
        <div className="switch-container" style={{ marginBottom: "1.2vh" }}>
          <Switch defaultChecked={true} />
          <div className="upload-popup-text">
            תוכן זה יכול לשמש לקורסים נוספים
          </div>
        </div>
        <div className="switch-container">
          <Switch defaultChecked={false} />
          <div className="upload-popup-text">התוכן מצריך שימוש באוזניות</div>
        </div>
        <div
          className="upload-popup-line"
          style={{
            position: "relative",
            marginTop: "1.667vh",
            marginBottom: "1.1vh",
          }}
        />
        <div className="upload-details-text-container">
          <div className="upload-details-text">הוספת תיוגים</div>
          <SearchDropdown
            options={[
              "מבואות מודיעין",
              "מבואות קרב",
              "טכנולוגיה וסייבר",
              "שפה",
              "מדעי המחשב",
            ]}
          />
        </div>
      </div>
      <div style={{ marginTop: "1.8vh" }}>
        <UploadBottom PreviousPopup={UploadEdu} />
      </div>
    </div>
  );
};

export default UploadEduDetails;
