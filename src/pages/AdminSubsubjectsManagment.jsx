import './AdminSubsubjectsManagment.css';
import OrderBy from '../components/OrderBy/OrderBy';
import bigA from '../assets/media/Icons/bigA.svg';
import selectedbigA from '../assets/media/Icons/blueBigA.svg';
import Search from '../components/Search/Search';
import { useState, useMemo } from 'react';
import Tabs from '../components/Tabs/Tabs';
import TemplateTable from '../components/Admin/GenericObjects/TemplateTable';
import subjectIcon from '../assets/media/Icons/adminSubjectIcon.svg';
import selectedSubjectIcon from '../assets/media/Icons/adminSubjectIconSelected.svg';

const AdminSubsubjectsManagment = () => {
  const [data, setData] = useState([]);

  const [tabsArray, settabsArray] = useState([`תתי נושאים`, `קורסים`]);
  const [selectedTab, setSelectedTab] = useState(tabsArray[0]);

  useMemo(() => {
    //delete in production

    const subjectsArray = [
      {
        name: 'זירת סוריה',
        subSubjectTags: [{ title: 'מדעי המחשב' }, { title: 'מפל' }],
      },
      {
        name: 'זירת סוריה',
        subSubjectTags: [
          { title: 'מדעי המחשב' },
          { title: 'מפל' },
          { title: 'אזרחות' },
        ],
      },
      {
        name: 'זירת סוריה',
        subSubjectTags: [{ title: 'מדעי המחשב' }],
      },
      {
        name: 'זירת לבנון',
        subSubjectTags: [{ title: 'מדעי המחשב' }, { title: 'מפל' }],
      },
    ];

    const coursesArray = [
      {
        name: 'אתרוג',
        subSubjectTags: [
          { title: 'תת נושא' },
          { title: 'תת נושא' },
          { title: 'תת נושא' },
        ],
      },
      {
        name: 'ערבית',
        subSubjectTags: [{ title: 'תת נושא' }, { title: 'תת נושא' }],
      },
    ];

    settabsArray([
      `תתי נושאים (${subjectsArray.length})`,
      `קורסים (${coursesArray.length})`,
    ]);
    switch (true) {
      case selectedTab.includes('תתי נושאים'):
        setData(subjectsArray);
        break;
      case selectedTab.includes('קורסים'):
        setData(coursesArray);
        break;
      default:
        setData(subjectsArray);
    }
  }, [selectedTab]);

  const orderByOptions = [
    {
      value: 'alphabet',
      label: " 'א' - ב",
      icon: bigA,
      selectedicon: selectedbigA,
    },
  ];

  if (selectedTab.includes('קורסים')) {
    orderByOptions.push({
      value: 'upload-date',
      label: 'נושאים',
      icon: subjectIcon,
      selectedicon: selectedSubjectIcon,
    });
  }

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
            <OrderBy options={orderByOptions} />
            <Search
              placeholder={'חיפוש חופשי'}
              style={{ height: '42px', width: '16.7vw' }}
            />
          </div>
        </div>
        <TemplateTable
          dataArr={data}
          selectedTab={selectedTab}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default AdminSubsubjectsManagment;
