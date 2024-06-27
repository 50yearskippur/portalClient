import "./AdminPage.css";
import { useState, useEffect } from "react";
import Tabs from "../components/Tabs/Tabs";
import Search from "../components/Search/Search";
import TemplateTable from "../components/Admin/TemplateTable";
import rabit from "../assets/img/rabit.jpg";

const HomePage = () => {
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
      <div className="header">העלאות</div>
      <div className="admin-top-container">
        <Tabs
          tabsArray={tabsArray}
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
        />
        <Search style={{ height: "42px", width: "16.7vw" }} />
      </div>
      <TemplateTable dataArr={data} selectedTab={selectedTab} />;
    </div>
  );
};

export default HomePage;
