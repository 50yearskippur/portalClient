import './SettingsList.css';
import { useState, useEffect, useContext } from 'react';
import { PopupContext } from '../../../store/popup-context';
import Switch from '../../Switch/Switch';

const Setting = ({ settingsArray }) => {
  const { itemDetails, saveDetails } = useContext(PopupContext);
  const [settings, setSettings] = useState(
    itemDetails.settings ? itemDetails.settings : settingsArray
  );

  useEffect(() => {
    saveDetails({ settings });
  }, [settings, saveDetails]);

  const changeSetting = (settingText) => {
    setSettings((prevSettingAray) =>
      prevSettingAray.map((setting) =>
        setting.text === settingText
          ? { ...setting, defaultValue: !setting.defaultValue }
          : setting
      )
    );
  };

  return (
    <div className="settings-container">
      {settings.map((setting, index) => (
        <div key={index} className="setting-container">
          <Switch
            defaultChecked={setting.defaultValue}
            changeSetting={() => changeSetting(setting.text)}
          />
          <div className="edu-dark-text">{setting.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Setting;
