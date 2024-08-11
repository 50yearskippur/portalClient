import { useContext } from 'react';
import { PopupContext } from '../../../store/popup-context';
import Dropdown from '../../Dropdown/Dropdown';
import SettingsList from '../../Popup/EduPreview/SettingsList';
import NextBtn from './NextBtn';

const FormDetails = ({ nextStage }) => {
  const { itemDetails, setItemDetails } = useContext(PopupContext);

  const saveDetails = (detail) => {
    setItemDetails((prevDetails) => ({
      ...prevDetails,
      ...detail,
    }));
  };

  return (
    <div className="stage-upload-container">
      <div className="stage-row-container">
        <div className="stage-input-container">
          <div className="stage-text">שם</div>
          <input
            className="stage-input"
            type="text"
            defaultValue={itemDetails['title']}
            onChange={(e) => saveDetails({ title: e.target.value })}
          />
        </div>
        <div className="stage-input-container">
          <div className="stage-text">נושא</div>
          <Dropdown
            list={['מבואות מודיעין', 'טכנולוגיה וסייבר', 'שפה', 'המלצות']}
            fieldName="subject"
          />
        </div>
      </div>
      <SettingsList
        settingsArray={[
          { text: 'הטופס יופיע טפסים נפוצים', defaultValue: false },
        ]}
      />
      <NextBtn
        disabled={!itemDetails['title'] || !itemDetails['subject']}
        nextStage={nextStage}
        current="פרטים"
      />
    </div>
  );
};

export default FormDetails;
