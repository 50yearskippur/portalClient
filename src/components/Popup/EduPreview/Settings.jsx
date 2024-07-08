import "./Settings.css";
import Switch from "../../Switch/Switch";

const Setting = () => {
  const settingsArray = [
    "התוצר מצריך שימוש באוזניות",
    "התוצר בסיווג גבוה מסגול צמצם ומצריך סיסמא",
    "התוצר יהיה חלק ממאגר המומלצים ליחידות והקורסים הרלוונטיים",
    "התוצר יהיה התוצר הראשי תחת תת הנושא",
    "התוצר נבדק, המידע בו עדכני ומאושר ע”י גורם המקצועי",
  ];
  return (
    <div className="settings-container">
      {settingsArray.map((setting, index) => (
        <div key={`setting ${index}`} className="setting-container">
          <Switch checked={false} />
          <div className="edu-dark-text">{setting}</div>
        </div>
      ))}
    </div>
  );
};

export default Setting;
