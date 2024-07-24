import Dropdown from "../../Dropdown/Dropdown";
import Textarea from "../../Textarea/Textarea";
import Credit from "./Credit";

const Details = () => {
  return (
    <div className="stage-upload-container">
      <div className="stage-input-container">
        <div className="stage-text">שם המצגת</div>
        <input className="stage-input" type="text" />
      </div>
      <div className="stage-row-container">
        <div className="stage-input-container">
          <div className="stage-text">נושא</div>
          <Dropdown
            listHeight={"20vh"}
            placeholder="בחרו נושא"
            list={[
              "מבואות מודיעין",
              "טכנולוגיה וסייבר",
              "שפה",
              "המלצות",
              "תת נושא חדש",
            ]}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="stage-input-container">
          <div className="stage-text">תת נושא</div>
          <Dropdown
            listHeight={"20vh"}
            placeholder="בחרו תת נושא"
            list={[
              "מבואות מודיעין",
              "טכנולוגיה וסייבר",
              "שפה",
              "המלצות",
              "תת נושא חדש",
            ]}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <div className="stage-input-container">
        <div className="stage-text">תיאור (אופציונלי)</div>
        <Textarea
          placeholder={"כתבו כאן את תיאור התוכן שאתם מעלים..."}
          style={{ height: "16.667vh" }}
        />
      </div>
      <div className="stage-text big">קרדיטים</div>
      {["עיצוב גרפי", "מומחה תוכן"].map((creditTitle) => (
        <Credit title={creditTitle} />
      ))}
    </div>
  );
};

export default Details;
