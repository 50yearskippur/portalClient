import { useState, useEffect, useContext } from 'react';
import { PopupContext } from '../../../store/popup-context';
import Switch from '../../Switch/Switch';
import settingDic from '../../../store/settingDic';
import './SettingsList.css';

const Setting = ({ settingsArray, disabled }) => {
  const { itemDetails, saveDetails } = useContext(PopupContext);
  const [settings, setSettings] = useState(
    itemDetails.settings ? itemDetails.settings : settingsArray
  );

  useEffect(() => {
    saveDetails({ settings });
  }, [settings, saveDetails]);

  function changeSetting(key) {
    const updatedState = settings.map((item) => {
      if (key in item) {
        return { ...item, [key]: !item[key] };
      }
      return item;
    });

    setSettings(updatedState);
  }

  return (
    <div className="settings-container">
      {settings.map((setting, index) => {
        const settingBooleanValue = Object.keys(setting)[0];
        return (
          <div key={index} className="setting-container">
            <Switch
              defaultChecked={Object.values(setting)[0]}
              disabled={disabled}
              changeSetting={() => changeSetting(settingBooleanValue)}
            />
            <div className="edu-dark-text">
              {settingDic[settingBooleanValue]}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Setting;
