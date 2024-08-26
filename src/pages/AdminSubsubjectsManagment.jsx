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
import GroupedTemplateTable from '../components/Admin/SubjectsFiltering/GroupedTemplateTable';

const AdminSubsubjectsManagment = () => {
  const [selectedOrderBy, setSelectedOrderBy] = useState('');

  const handleOrderSelect = (option) => {
    setSelectedOrderBy(option);
  };

  const [data, setData] = useState([]);

  const [tabsArray, settabsArray] = useState([`תתי נושאים`, `קורסים`]);
  const [selectedTab, setSelectedTab] = useState(tabsArray[0]);

  useMemo(() => {
    //delete in production

    const subsubjectsArray = [
      {
        subjectName: 'זירות',
        name: 'זירת סוריה',
        tags: [{ title: 'מדעי המחשב' }, { title: 'מפל' }],
      },
      {
        subjectName: 'זירות',
        name: 'זירת עזה',
        tags: [{ title: 'מדעי המחשב' }, { title: 'מפל' }, { title: 'אזרחות' }],
      },
      {
        subjectName: 'זירות',
        name: 'זירת סוריה',
        tags: [{ title: 'מדעי המחשב' }],
      },
      {
        subjectName: 'שפות',
        name: 'שפות מחשב',
        tags: [{ title: 'מדעי המחשב' }, { title: 'מפל' }],
      },
    ];

    const coursesArray = [
      {
        name: 'אתרוג',
        tags: [
          { title: 'תת נושא' },
          { title: 'תת נושא' },
          { title: 'תת נושא' },
        ],
      },
      {
        name: 'ערבית',
        tags: [{ title: 'תת נושא' }, { title: 'תת נושא' }],
      },
    ];

    settabsArray([
      `תתי נושאים (${subsubjectsArray.length})`,
      `קורסים (${coursesArray.length})`,
    ]);
    switch (true) {
      case selectedTab.includes('תתי נושאים'):
        setData(subsubjectsArray);
        break;
      case selectedTab.includes('קורסים'):
        setData(coursesArray);
        break;
      default:
        setData(subsubjectsArray);
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

  if (selectedTab.includes('תתי נושאים')) {
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
            <OrderBy options={orderByOptions} onSelect={handleOrderSelect} />
            <div className='orderBy-text'>סדר לפי</div>
            <Search
              placeholder={'חיפוש חופשי'}
              style={{ height: '42px', width: '16.7vw' }}
            />
          </div>
        </div>

        {selectedTab.includes('תתי נושאים') &&
        selectedOrderBy.label === 'נושאים' ? (
          <GroupedTemplateTable data={data} selectedTab={selectedTab} />
        ) : (
          <TemplateTable
            dataArr={data}
            selectedTab={selectedTab}
            onClick={() => {}}
          />
        )}
      </div>
    </div>
  );
};

export default AdminSubsubjectsManagment;
