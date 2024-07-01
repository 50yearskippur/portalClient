import "./AdminPage.css";
import { useState, useEffect, useContext } from "react";
import { PopupContext } from "../store/popup-context";
import UploadEduType from "../components/Popup/UploadEduType";
import Tabs from "../components/Tabs/Tabs";
import Search from "../components/Search/Search";
import TemplateTable from "../components/Admin/TemplateTable";
import Requests from "../components/Admin/Requests";
//delete in production
import rabit from "../assets/img/rabit.jpg";

const HomePage = () => {
  const { showPopup } = useContext(PopupContext);
  const tabsArray = ["תוצרים", "עיצובים", "טפסים", "תמונות ואלבומים"];
  const [selectedTab, setSelectedTab] = useState(tabsArray[0]);
  const [data, setData] = useState([]);

  useEffect(() => {
    //delete in production
    const eduArr = [
      {
        title: "הכירו את זירת סוריה",
        type: "סרטון",
        date: "28.05.2024",
        subSubject: {
          title: "זירת סוריה",
        },
        subject: { title: "מבואות מודיעין" },
        media: rabit,
        mediaType: "image",
        level: "רמה בסיסית",
        uploadByArtech: true,
        tags: [{ title: "תג 1" }, { title: "תג 2" }],
      },
      {
        title: "הכירו את זירת סוריה",
        type: "סרטון",
        date: "28.05.2024",
        subSubject: {
          title: "זירת סוריה",
        },
        subject: { title: "מבואות מודיעין" },
        media: rabit,
        mediaType: "image",
        level: "רמה בסיסית",
        uploadByArtech: true,
        tags: [{ title: "תג 1" }, { title: "תג 2" }],
      },
    ];

    const designsArr = [
      {
        title: "תבניות עיצוב 1",
        type: "מצגת",
        date: "28.05.2024",
      },
      {
        title: "תבניות עיצוב 2",
        type: "מסמך",
        date: "28.05.2024",
      },
    ];

    const formsArr = [
      {
        title: "טפסים 1",
        type: "מצגת",
        date: "28.05.2024",
        tag: { title: "שלישות" },
      },
      {
        title: "טפסים 2",
        type: "מסמך",
        date: "28.05.2024",
        tag: { title: "נשקייה" },
      },
    ];

    const mediaArr = [
      {
        title: "הרמת כוסית לראש השנה",
        type: "מצגת",
        date: "28.05.2024",
      },
      {
        title: "פורים 2024",
        type: "מסמך",
        date: "28.05.2024",
      },
    ];

    switch (true) {
      case selectedTab === "תוצרים":
        setData(eduArr);
        break;
      case selectedTab === "עיצובים":
        setData(designsArr);
        break;
      case selectedTab === "טפסים":
        setData(formsArr);
        break;
      case selectedTab === "תמונות ואלבומים":
        setData(mediaArr);
        break;
      default:
        setData(eduArr);
    }
  }, [selectedTab]);

  return (
    <div className="page-container">
      <div className="admin-header-container">
        <div className="header">העלאות</div>
        <div
          className="admin-upload-btn"
          onClick={() => showPopup(<UploadEduType />)}
        >
          העלאה
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
            <Search style={{ height: "42px", width: "16.7vw" }} />
          </div>
          <TemplateTable dataArr={data} selectedTab={selectedTab} />;
        </div>
        <div className="admin-other-user-edu-side">
          <div className="admin-top-other">
            <div className="admin-other-header">תוצרים של משתמשים</div>
            <div className="admin-link">היסטוריית העלאות</div>
          </div>
          <Requests
            request={{
              title: "סוריה מאז ועד היום",
              date: "28.5.2024",
              level: "מותאם לכל הרמות",
              creator: "יובל כהן",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
