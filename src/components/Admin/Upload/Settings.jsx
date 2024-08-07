import { useState, useEffect, useContext } from 'react';
import { PopupContext } from '../../../store/popup-context';
import { addDays, addMonths, addYears } from 'date-fns';
import SettingsList from '../../Popup/EduPreview/SettingsList';
import getSettings from '../../../utils/getSettings';
import Dropdown from '../../Dropdown/Dropdown';
import levels from '../../../store/levels';
// import SearchDropdown from "../../Search/SearchDropdown";
import NextBtn from './NextBtn';

const Setting = ({ nextStage }) => {
  const { itemDetails, setItemDetails } = useContext(PopupContext);
  console.log(itemDetails);
  const [experationDate, setExperationDate] = useState({ num: '', unit: '' });

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
    if (experationDate.num || experationDate.unit)
      setItemDetails((prevDetails) => ({
        ...prevDetails,
        experationDate: calculateFutureDate(experationDate),
        experationDateObject: experationDate,
      }));
  }, [experationDate, setItemDetails]);

  return (
    <div className="stage-upload-container">
      <SettingsList settingsArray={getSettings(itemDetails?.type)} />
      <div className="stage-row-container">
        <div className="stage-input-container">
          <div className="stage-text">רמה</div>
          <Dropdown
            defaultValue={
              itemDetails['level'] ? itemDetails['level'] : 'בחרו רמת קושי'
            }
            list={levels}
            style={{ width: '100%', height: '25px' }}
          />
        </div>
        <div className="stage-input-container">
          <div className="stage-text">זמן מוערך</div>
          <Dropdown
            defaultValue={
              itemDetails['estimatedTime']
                ? itemDetails['estimatedTime']
                : "20 דק'"
            }
            list={["20 דק'", "30 דק'", "45 דק'", "60+ דק'"]}
            style={{ width: '100%', height: '25px' }}
          />
        </div>
      </div>
      <div className="stage-input-container">
        <div className="stage-text">מועד תיקוף התוכן</div>
        <div className="content-validation">
          <input
            className="stage-input"
            type="number"
            style={{ width: '2.969vw', height: '10px' }}
            onChange={(e) =>
              setExperationDate((prevDate) => {
                return { ...prevDate, num: e.target.value };
              })
            }
            defaultValue={
              itemDetails['experationDateObject']?.num
                ? itemDetails['experationDateObject'].num
                : 12
            }
          />
          <Dropdown
            defaultValue={
              itemDetails['experationDateObject']?.unit
                ? itemDetails['experationDateObject'].unit
                : 'חודשים'
            }
            list={['ימים', 'חודשים', 'שנים']}
            style={{ width: '33.3%', height: '25px' }}
            onSelect={(item) =>
              setExperationDate((prevDate) => {
                return { ...prevDate, unit: item };
              })
            }
          />
        </div>
      </div>
      {/* <div className="stage-input-container">
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
          placeholder="חיפוש קורסים"
        />
      </div> */}
      {/* <div className="stage-input-container">
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
          placeholder="בחר תיוגים"
          fieldName="tags"
        />
      </div> */}
      <NextBtn
        text={'העלה תוצר'}
        disabled={
          !itemDetails['level'] ||
          !itemDetails['estimatedTime'] ||
          !itemDetails['experationDate']
        }
        nextStage={nextStage}
      />
    </div>
  );
};

export default Setting;
