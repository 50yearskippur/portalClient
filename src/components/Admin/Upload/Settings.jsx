import { useState, useEffect, useContext } from 'react';
import { PopupContext } from '../../../store/popup-context';
import { addDays, addMonths, addYears } from 'date-fns';
import SettingsList from '../../Popup/EduPreview/SettingsList';
import getDefaultSettings from '../../../utils/getDefaultSettings';
import Dropdown from '../../Dropdown/Dropdown';
import levels from '../../../store/levels';
import NextBtn from './NextBtn';
import yellowWarning from '../../../assets/media/Icons/yellowWarning.svg';

const Setting = ({ nextStage }) => {
  const { itemDetails, saveDetails } = useContext(PopupContext);
  const [experationDate, setExperationDate] = useState({
    num: 12,
    unit: 'חודשים',
  });
  const isPrimaryEduResourse = 'התוצר יהיה ראשי תחת תת הנושא';

  const calculateFutureDate = (experationDate) => {
    const { unit, num } = experationDate;
    const currentDate = new Date();

    switch (unit) {
      case 'ימים':
        return addDays(currentDate, num);
      case 'חודשים':
        return addMonths(currentDate, num);
      case 'שנים':
        return addYears(currentDate, num);
      default:
        return addMonths(currentDate, num);
    }
  };

  useEffect(() => {
    if (experationDate.num || experationDate.unit) {
      saveDetails({ experationDate: calculateFutureDate(experationDate) });
      saveDetails({ experationDateObject: experationDate });
    }
  }, [experationDate, saveDetails]);

  return (
    <div className="stage-upload-container">
      <SettingsList
        settingsArray={getDefaultSettings(itemDetails?.type)}
        pageType="תוצרים"
      />
      {itemDetails?.settings?.some(
        (setting) =>
          setting.text === isPrimaryEduResourse && setting.defaultValue
      ) && (
        <div className="setting-notification-container">
          <img src={yellowWarning} alt="yellow warning" />
          <div className="setting-notification-content">
            <div className="setting-notification-header">
              רק תוצר אחד יכול להיות ראשי בתת נושא
            </div>
            <div className="setting-notification-sub-header">
              כרגע זה התוצר “סרטון פתיחה מבואות”. לחץ שוב על המתג, כדי להחליף
              אותו.
            </div>
          </div>
        </div>
      )}
      <div className="stage-row-container">
        <div className="stage-input-container">
          <div className="stage-text">רמה</div>
          <Dropdown
            defaultValue="בחרו רמת קושי"
            list={levels}
            fieldName="difficultyLevel"
          />
        </div>
        <div className="stage-input-container">
          <div className="stage-text">זמן מוערך</div>
          <Dropdown
            defaultValue="20 דק'"
            list={["20 דק'", "30 דק'", "45 דק'", "60+ דק'"]}
            fieldName="estimatedTime"
          />
        </div>
      </div>
      <div className="stage-input-container">
        <div className="stage-text">מועד תיקוף התוכן</div>
        <div className="content-validation">
          <input
            className="stage-input"
            type="number"
            style={{ width: '2.969vw', height: '100%', textAlign: 'center' }}
            onChange={(e) =>
              setExperationDate((prevDate) => {
                return { ...prevDate, num: e.target.value };
              })
            }
            defaultValue={
              itemDetails.experationDateObject?.num
                ? itemDetails.experationDateObject.num
                : experationDate.num
            }
          />
          <Dropdown
            style={{ width: '33.3%' }}
            defaultValue={
              itemDetails.experationDateObject?.unit
                ? itemDetails.experationDateObject.unit
                : experationDate.unit
            }
            list={['ימים', 'חודשים', 'שנים']}
            onSelect={(item) =>
              setExperationDate((prevDate) => {
                return { ...prevDate, unit: item };
              })
            }
            fieldName="experationDate"
          />
        </div>
      </div>
      <NextBtn
        text={'העלה תוצר'}
        disabled={
          !itemDetails.difficultyLevel ||
          !itemDetails.estimatedTime ||
          !itemDetails.experationDate
        }
        nextStage={nextStage}
      />
    </div>
  );
};

export default Setting;
