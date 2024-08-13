import "./AdminPermissionManagment.css";
import { useState, useMemo } from "react";
import Tabs from "../components/Tabs/Tabs";
import Search from "../components/Search/Search";
import WaitingList from "../components/Admin/Requests/WaitingList";
import TemplateTable from "../components/Admin/GenericObjects/TemplateTable";
import trash from "../assets/media/Icons/trashIcon.svg";
import bigA from "../assets/media/Icons/bigA.svg";
import selectedbigA from "../assets/media/Icons/blueBigA.svg";
import downloadIcon from "../assets/media/Icons/squereDownload.svg";
import selecteddownloadIcon from "../assets/media/Icons/blueDownloadIcon.svg";

import OrderBy from "../components/OrderBy/OrderBy";
const AdminPermissionManagment = () => {
  const [data, setData] = useState([]);

  let eduArr = [
    {
      fullName: "דניאל דניאלי",
      role: "רמד פיתוח",
    },
    {
      fullName: "דניאל דניאלי",
      role: "רמד פיתוח",
    },
    {
      fullName: "דניאל דניאלי",
      role: "רמד פיתוח",
    },
  ];
  const [tabsArray, settabsArray] = useState([`אדמינים (${eduArr.length})`]);
  const [selectedTab, setSelectedTab] = useState(tabsArray[0]);
  //delete in production
  const requestsArr = [
    {
      title: "במבה מאז ועד היום",
      date: Date("28.5.2024"),
      type: "לומדה",
      level: "מותאם לכל הרמות",
      creator: "יובל כהן",
    },
    {
      title: "במבה מאז ועד היום",
      date: Date("28.5.2024"),
      level: "מותאם לכל הרמות",
      type: "לומדה",
      creator: "יובל כהן",
    },
    {
      title: "במבה מאז ועד היום",
      date: Date("28.5.2024"),
      level: "מותאם לכל הרמות",
      type: "לומדה",

      creator: "יובל כהן",
    },
  ];
  const commentsArr = [
    {
      title: "לורם איפסום",
      date: Date("28.5.2024"),
      text: "“וואי זאת המצגת הכי טובה שראיתי בחיים שלי, איזה כיף חיים שיוואווווווו חולה עלייכם ארטק כפרה עליכם חייאתי”",
      type: "סיכום",
      creator: "יובל כהן",
    },
    {
      title: "לורם איפסום",
      date: Date("28.5.2024"),
      text: "“יוואו אתם לא מפסיקים להפציץ”",
      type: "לומדה",
      creator: "יובל כהן",
    },
  ];

  useMemo(() => {
    //delete in production

    eduArr = [
      {
        fullName: "דניאל דניאלי",
        role: "רמד פיתוח",
        personalAreaName: "DD",
      },
      {
        fullName: "דניאל דניאלי",
        role: "רמד פיתוח",
        personalAreaName: "DS",
      },
      {
        fullName: "דניאל דניאלי",
        role: "רמד פיתוח",
        personalAreaName: "DD",
      },
    ];

    switch (true) {
      case selectedTab === `אדמינים (${eduArr.length})`:
        settabsArray([`אדמינים (${eduArr.length})`]);
        setData(eduArr);
        break;
      default:
        settabsArray([`אדמינים (${eduArr.length})`]);
        setData(eduArr);
    }
  }, [selectedTab]);

  return (
    <div className="page-container">
      <div className="admin-header-container">
        <div className="header">ניהול הרשאות ורשימות</div>
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
                  value: "upload-date",
                  label: "תאריך העלאה",
                  icon: downloadIcon,
                  selectedicon: selecteddownloadIcon,
                },
                {
                  value: "alphabet",
                  label: " 'א' - ב",
                  icon: bigA,
                  selectedicon: selectedbigA,
                },
                ,
              ]}
            />
            <Search
              placeholder={"חיפוש חופשי"}
              style={{ height: "42px", width: "16.7vw" }}
            />
          </div>
          <TemplateTable
            icon={trash}
            onClick={() => console.log("no design yet")}
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
              header={"תגובות לאישור בקליק"}
              requests={commentsArr}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPermissionManagment;
