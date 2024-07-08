import "./Settings.css";
import Switch from "../../Switch/Switch";

const Setting = ({ settingsArray }) => {
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
