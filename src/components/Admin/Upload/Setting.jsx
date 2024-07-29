import { useContext } from "react";
import { PopupContext } from "../../../store/popup-context";
import SettingsArray from "../../Popup/EduPreview/Settings";
import Dropdown from "../../Dropdown/Dropdown";
import levels from "../../../store/levels";
import SearchDropdown from "../../Search/SearchDropdown";
import Button from "../../Button/Button";

const Setting = ({ nextStage }) => {
  const { itemDetails } = useContext(PopupContext);
  const settingsArray = [
    { text: "התוצר מצריך שימוש באמצעי שמע", defaultValue: true },
    {
      text: "התוצר יהיה חלק ממאגר המומלצים ליחידות והקורסים הרלוונטיים",
      defaultValue: false,
    },
    { text: "התוצר יהיה התוכן הראשי תחת תת הנושא", defaultValue: false },
    {
      text: "התוצר נבדק, המידע בו עדכני ומאושר ע”י גורם המקצועי",
      defaultValue: true,
    },
  ];

  return (
    <div className="stage-upload-container">
      <SettingsArray settingsArray={settingsArray} />
      <div className="stage-row-container">
        <div className="stage-input-container">
          <div className="stage-text">רמה</div>
          <Dropdown
            defaultValue={"בחרו רמת קושי"}
            list={levels}
            style={{ width: "100%", height: "40px" }}
          />
        </div>
        <div className="stage-input-container">
          <div className="stage-text">זמן מוערך</div>
          <Dropdown
            defaultValue={"20 דק'"}
            list={["20 דק'", "30 דק'", "45 דק'", "60+ דק'"]}
            style={{ width: "100%", height: "40px" }}
          />
        </div>
      </div>
      <div className="stage-input-container">
        <div className="stage-text">מועד תיקוף התוכן</div>
        <div className="content-validation">
          <input
            className="stage-input"
            type="text"
            style={{ height: "19px", width: "2.969vw" }}
          />
          <Dropdown
            defaultValue={"חודשים"}
            list={["ימים", "חודשים", "שנים"]}
            style={{ width: "33.3%", height: "40px" }}
          />
        </div>
      </div>
      <div className="stage-input-container">
        <div className="stage-text">קורסים או יחידות רלוונטיות</div>
        <SearchDropdown
          options={[
            "מבואות מודיעין",
            "מבואות קרב",
            "טכנולוגיה וסייבר",
            "שפה",
            "מדעי המחשב",
            "קיפודים",
            "חתולים",
            "כלבלבים",
            "רעיונות לארוחות",
            "מתנות",
          ]}
        />
      </div>
      <div className="stage-input-container">
        <div className="stage-text">תיוגים</div>
        <SearchDropdown
          options={[
            "מבואות מודיעין",
            "מבואות קרב",
            "טכנולוגיה וסייבר",
            "שפה",
            "מדעי המחשב",
            "קיפודים",
            "חתולים",
            "כלבלבים",
            "רעיונות לארוחות",
            "מתנות",
          ]}
        />
      </div>
      <Button
        text={"המשך"}
        style={{
          width: "8.3vw",
          height: "4.4vh",
        }}
        disabled={
          !itemDetails["title"] ||
          !itemDetails["subject"] ||
          !itemDetails["subSubject"]
        }
        onClick={nextStage}
      />
    </div>
  );
};

export default Setting;
