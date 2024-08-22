import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { PopupContext } from '../store/popup-context';
import { useNavigate } from 'react-router-dom';
import Tabs from '../components/Tabs/Tabs';
import uploadTypesArray from '../constants/uploadTypesArray';
import forms from '../constants/forms';
import media from '../constants/media';
import eduResources from '../constants/eduResourse';
import WaitingList from '../components/Admin/Requests/WaitingList';
import Search from '../components/Search/Search';
import TemplateTable from '../components/Admin/GenericObjects/TemplateTable';
import bigA from '../assets/media/Icons/bigA.svg';
import selectedbigA from '../assets/media/Icons/blueBigA.svg';
import reversedClock from '../assets/media/Icons/reversedClock.svg';
import selectedreversedClock from '../assets/media/Icons/blueReversedClock.svg';
import staricon from '../assets/media/Icons/starIcon.svg';
import selectedstaricon from '../assets/media/Icons/blueStarIcon.svg';
import downloadIcon from '../assets/media/Icons/squereDownload.svg';
import selecteddownloadIcon from '../assets/media/Icons/blueDownloadIcon.svg';
import OrderBy from '../components/OrderBy/OrderBy';
import arrow from '../assets/media/Icons/curvedArrow.svg';
import './AdminPage.css';

const AdminPage = () => {
  const navigate = useNavigate();
  const { setItemDetails, itemDetails } = useContext(PopupContext);
  const [tabsArray, setTabs] = useState([
    'תוצרים',
    'עיצובים',
    'טפסים',
    'תמונות סטוק ואלבומים',
  ]);
  const [selectedTab, setSelectedTab] = useState(tabsArray[0]);
  const [data, setData] = useState(eduResources);
  const [uploadTypesOpen, setUploadTypesOpen] = useState(false);
  const [selectedType, setSelectedType] = useState();

  const uploadTypes = uploadTypesArray;

  const choseUploadType = (pageType) => {
    if (itemDetails.pageType !== pageType) setItemDetails({});
    navigate('upload', {
      state: { pageType },
    });
  };

  //delete in production
  const requestsArr = [
    {
      title: 'חתול מאז ועד היום',
      date: Date('28.5.2024'),
      type: 'לומדה',
      level: 'מותאם לכל הרמות',
      creator: 'יובל כהן',
    },
    {
      title: 'חתול מאז ועד היום',
      date: Date('28.5.2024'),
      level: 'מותאם לכל הרמות',
      type: 'לומדה',
      creator: 'יובל כהן',
    },
    {
      title: 'חתול מאז ועד היום',
      date: Date('28.5.2024'),
      level: 'מותאם לכל הרמות',
      type: 'לומדה',

      creator: 'יובל כהן',
    },
  ];
  const commentsArr = [
    {
      title: 'לורם איפסום',
      date: Date('28.5.2024'),
      text: '“וואי זאת המצגת הכי טובה שראיתי בחיים שלי, איזה כיף חיים שיוואווווווו חולה עלייכם ארטק כפרה עליכם חייאתי”',
      type: 'סיכום',
      creator: 'יובל כהן',
    },
    {
      title: 'לורם איפסום',
      date: Date('28.5.2024'),
      text: '“יוואו אתם לא מפסיקים להפציץ”',
      type: 'לומדה',
      creator: 'יובל כהן',
    },
  ];

  //delete in production

  useEffect(() => {
    //delete in production

    setTabs([
      `תוצרים (${eduResources.length})`,
      `טפסים (${forms.length})`,
      `תמונות סטוק ואלבומים (${media.length})`,
    ]);
    switch (true) {
      case selectedTab.includes('תוצרים'):
        setData(eduResources);
        break;
      case selectedTab.includes('טפסים'):
        setData(forms);
        break;
      case selectedTab.includes('תמונות סטוק ואלבומים'):
        setData(media);
        break;
      default:
        setData(eduResources);
    }
  }, [selectedTab]);

  return (
    <div className="page-container">
      <div className="admin-header-container">
        <div className="header">העלאות</div>
        <div className="admin-upload-types-container">
          <div
            className="admin-upload-btn"
            onClick={() => setUploadTypesOpen((prev) => !prev)}
          >
            + העלאת תוכן
          </div>
          {uploadTypesOpen && (
            <div className="admin-upload-types-dropdown">
              {uploadTypes.map((type, index) => (
                <div
                  key={index}
                  className="admin-upload-types-item"
                  onClick={() => choseUploadType(type.text)}
                  onMouseEnter={() => setSelectedType(type.text)}
                >
                  <img
                    src={
                      selectedType === type.text
                        ? type.grayIcon
                        : type.blackIcon
                    }
                    alt="type"
                  />
                  <>{type.text} </>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="admin-container">
        <div className="admin-approved-edu-side">
          <div className="admin-top-approved">
            <Tabs
              tabsArray={tabsArray}
              setSelectedTab={setSelectedTab}
              selectedTab={selectedTab}
            />
            <OrderBy
              options={[
                {
                  value: 'upload-date',
                  label: 'תאריך העלאה',
                  icon: downloadIcon,
                  selectedicon: selecteddownloadIcon,
                },
                {
                  value: 'update-date',
                  label: 'תאריך עדכון',
                  icon: reversedClock,
                  selectedicon: selectedreversedClock,
                },
                {
                  value: 'popularity',
                  label: 'פופולריות',
                  icon: staricon,
                  selectedicon: selectedstaricon,
                },
                {
                  value: 'alphabet',
                  label: " 'א' - ב",
                  icon: bigA,
                  selectedicon: selectedbigA,
                },
              ]}
            />
            <Search
              placeholder={'חיפוש תוצר/נושא'}
              style={{ height: '42px', width: '16.7vw' }}
            />
          </div>
          <TemplateTable
            icon={arrow}
            dataArr={data}
            selectedTab={selectedTab}
          />
        </div>
        <div className="admin-pending-approval-side">
          <div className="admin-pending-approval-container">
            <div className="admin-top-other">
              <div className="admin-other-header">
                תוצרים שמחכים לאישור ({requestsArr.length})
              </div>
              <div className="admin-link">כל השאר </div>
            </div>
            <WaitingList
              header={`תוצרים שמחכים לאישור`}
              requests={requestsArr}
            />
          </div>
          <div className="admin-pending-approval-container">
            <div className="admin-top-other">
              <div className="admin-other-header">
                תגובות לאישור בקליק ({commentsArr.length})
              </div>
              <div className="admin-link">כל השאר </div>
            </div>
            <WaitingList
              header={'תגובות לאישור בקליק'}
              requests={commentsArr}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
