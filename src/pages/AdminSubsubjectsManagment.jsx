import './AdminSubsubjectsManagment.css';
import OrderBy from '../components/OrderBy/OrderBy';
import downloadIcon from '../assets/media/Icons/squereDownload.svg';
import selecteddownloadIcon from '../assets/media/Icons/blueDownloadIcon.svg';
import bigA from '../assets/media/Icons/bigA.svg';
import selectedbigA from '../assets/media/Icons/blueBigA.svg';
import Search from '../components/Search/Search';
import { useState, useMemo } from 'react';
import Tabs from '../components/Tabs/Tabs';
import plus from '../assets/media/Icons/plusIcon.svg';
import TemplateTable from '../components/Admin/GenericObjects/TemplateTable';

const AdminSubsubjectsManagment = () => {
  const [data, setData] = useState([]);

  let subjectsArray = [
    {
      subjectName: 'זירת סוריה',
      personalAreaName: 'DD',
    },
    {
      subjectName: 'זירת סוריה',
      personalAreaName: 'DD',
    },
    {
      subjectName: 'זירת סוריה',
      personalAreaName: 'DD',
    },
    {
      subjectName: 'זירת סוריה',
      personalAreaName: 'DD',
      subSubjectTags: [{ title: 'מדעי המחשב' }, { title: 'מפל' }],
    },
  ];
  const [tabsArray, settabsArray] = useState([
    `תתי נושאים (${subjectsArray.length})`,
  ]);
  const [selectedTab, setSelectedTab] = useState(tabsArray[0]);

  useMemo(() => {
    //delete in production

    const subjectsArray = [
      {
        subjectName: 'זירת סוריה',
        personalAreaName: 'DD',
      },
      {
        subjectName: 'זירת סוריה',
        personalAreaName: 'DD',
      },
      {
        subjectName: 'זירת סוריה',
        personalAreaName: 'DD',
      },
      {
        subjectName: 'זירת סוריה',
        personalAreaName: 'DD',
        subSubjectTags: [{ title: 'מדעי המחשב' }, { title: 'מפל' }],
      },
    ];

    switch (true) {
      case selectedTab === `תתי נושאים (${subjectsArray.length})`:
        settabsArray([`תתי נושאים (${subjectsArray.length})`]);
        setData(subjectsArray);
        break;
      default:
        settabsArray([`תתי נושאים (${subjectsArray.length})`]);
        setData(subjectsArray);
    }
  }, [selectedTab]);

  return (
    <div className="page-container">
      <div className="admin-subsubject-header-container">
        <div className="header">ניהול תתי נושאים</div>
      </div>
      <div className="admin-subsubject-container">
        <div className="admin-subsubject-top-approved">
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
        <TemplateTable
          icon={plus}
          onClick={() => console.log('no design yet')}
          dataArr={data}
          selectedTab={selectedTab}
        />
      </div>
    </div>
  );
};

export default AdminSubsubjectsManagment;
