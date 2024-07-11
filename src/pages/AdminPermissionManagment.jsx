import "./AdminPermissionManagment.css";
import { useState, useEffect } from "react";
import Tabs from "../components/Tabs/Tabs";
import getRequestChildren from "../utils/getRequestChildren";
import Search from "../components/Search/Search";
import TemplateTable from "../components/Admin/GenericObjects/TemplateTable";
import Requests from "../components/Admin/Requests/Requests";
import trash from "../assets/media/Icons/trashIcon.svg";
import OrderBy from "../components/OrderBy/OrderBy";
const AdminPermissionManagment = () => {
  const [data, setData] = useState([]);

  let eduArr = [
    {
      fullName: "דניאל דניאלי",
      role: "רמד פיתוח",
      icon: trash,
    },
    {
      fullName: "דניאל דניאלי",
      role: "רמד פיתוח",
      icon: trash,
    },
    {
      fullName: "דניאל דניאלי",
      role: "רמד פיתוח",
      icon: trash,
    },
  ];
  const [tabsArray, settabsArray] = useState([
    `אדמינים (${eduArr.length})`,
    "תתי נושאים",
  ]);
  const [selectedTab, setSelectedTab] = useState(tabsArray[0]);
  console.log(`אדמינים (${eduArr.length})`);
  //delete in production
  const subSubjectsArr = [
    {
      title: "לורם איפסום",
      date: "28.5.2024",
      creator: "יובל כהן",
    },
    {
      title: "לורם איפסום",
      date: "28.5.2024",
      creator: "יובל כהן",
    },
  ];
  //delete in production
  const newAdminsArr = [
    {
      title: "לורם איפסום",
      date: "28.5.2024",
      fullName: "יובל כהן",
      role: "קורס אתרוג",
    },
    {
      title: "לורם איפסום",
      date: "28.5.2024",
      fullName: "יובל כהן",
      role: "קורס אתרוג",
    },
  ];

  useEffect(() => {
    //delete in production

    eduArr = [
      {
        fullName: "דניאל דניאלי",
        role: "רמד פיתוח",
        icon: trash,
      },
      {
        fullName: "דניאל דניאלי",
        role: "רמד פיתוח",
        icon: trash,
      },
      {
        fullName: "דניאל דניאלי",
        role: "רמד פיתוח",
        icon: trash,
      },
    ];

    switch (true) {
      case selectedTab === `אדמינים (${eduArr.length})`:
        settabsArray([`אדמינים (${eduArr.length})`, "תתי נושאים"]);
        setData(eduArr);
        break;
      case selectedTab === "תתי נושאים":
        setData([]);
        break;
      default:
        settabsArray([`אדמינים (${eduArr.length})`, "תתי נושאים"]);
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
            {/* <div className="admin-order-by">
            <img alt="order-by" src={sortIcon}/>
            סדר לפי
            </div> */}
            <OrderBy />

            <Search style={{ height: "42px", width: "16.7vw" }} />
          </div>
          <TemplateTable dataArr={data} selectedTab={selectedTab} />
        </div>
        <div className="admin-pending-approval-side">
          <div className="admin-pending-approval-container">
            <div className="admin-top-other">
              <div className="admin-other-header">תתי נושאים חדשים </div>
            </div>
          </div>
          <div className="admin-pending-approval-container">
            <Requests
              header={"תתי נושאים חדשים"}
              children={getRequestChildren("תתי נושאים חדשים")}
              requests={subSubjectsArr}
            />

            <div className="admin-other-header">אדמינים חדשים</div>
            <Requests
              header={"אדמינים חדשים"}
              children={getRequestChildren("אדמינים חדשים")}
              requests={newAdminsArr}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPermissionManagment;
