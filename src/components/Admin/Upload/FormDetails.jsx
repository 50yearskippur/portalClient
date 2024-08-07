import { useContext } from 'react';
import { PopupContext } from '../../../store/popup-context';
import Dropdown from '../../Dropdown/Dropdown';
import SettingsList from '../../Popup/EduPreview/SettingsList';
import Button from '../../Button/Button';

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
            listHeight={'25vh'}
            defaultValue={itemDetails['subject']}
            list={['מבואות מודיעין', 'טכנולוגיה וסייבר', 'שפה', 'המלצות']}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
      <SettingsList
        settingsArray={[
          { text: 'הטופס יופיע טפסים נפוצים', defaultValue: false },
        ]}
      />
      <Button
        text={'הבא'}
        style={{
          width: '6.667vw',
          height: '4.4vh',
          margin: '0 auto',
        }}
        disabled={!itemDetails['files']['media']}
        onClick={nextStage}
      />
    </div>
  );
};

export default FormDetails;
