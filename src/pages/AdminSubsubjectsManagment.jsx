import './AdminSubsubjectsManagment.css';
import OrderBy from '../components/OrderBy/OrderBy';
import downloadIcon from '../assets/media/Icons/squereDownload.svg';
import selecteddownloadIcon from '../assets/media/Icons/blueDownloadIcon.svg';
import bigA from '../assets/media/Icons/bigA.svg';
import selectedbigA from '../assets/media/Icons/blueBigA.svg';
import Search from '../components/Search/Search';
import { useState } from 'react';
import Tabs from '../components/Tabs/Tabs';

const AdminSubsubjectsManagment = () => {
  let subjectsArr = [
    {
      subjectName: 'זירת סוריה',
    },
    {
      subjectName: 'זירת סוריה',
    },
    {
      subjectName: 'זירת סוריה',
    },
    {
      subjectName: 'זירת סוריה',
    },
  ];

  const [tabsArray, settabsArray] = useState([
    `תתי נושאים (${subjectsArr.length})`,
  ]);
  const [selectedTab, setSelectedTab] = useState(tabsArray[0]);

  return (
    <div className="page-container">
      <div className="admin-header-container">
        <div className="header">ניהול תתי נושאים</div>
      </div>
      <div className="admin-container">
        <div className="admin-top-approved">
          <div className="right-content">
            <Tabs
              tabsArray={tabsArray}
              setSelectedTab={setSelectedTab}
              selectedTab={selectedTab}
            />
          </div>
          <div className="left-content">
            <OrderBy
              options={[
                {
                  value: 'upload-date',
                  label: 'תאריך העלאה',
                  icon: downloadIcon,
                  selectedicon: selecteddownloadIcon,
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
              placeholder={'חיפוש חופשי'}
              style={{ height: '42px', width: '16.7vw' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSubsubjectsManagment;
