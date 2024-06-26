import "./AdminPage.css";
import { useState } from "react";
import Tabs from "../components/Tabs/Tabs";
import blueStar from "../assets/media/Icons/blueStar.svg";
import Search from "../components/Search/Search";
import EduResourse from "../components/Admin/EduResourse";
import DesignTemplates from "../components/Admin/DesignTemplates";
import Forms from "../components/Admin/Forms";
import rabit from "../assets/img/rabit.jpg";

const getEduResources = (selectedTab) => {
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
  //delete in production
  const designsArr = [
    {
      title: "הכירו את זירת סוריה",
      type: "מצגת",
      date: "28.05.2024",
    },
    {
      title: "הכירו את זירת סוריה",
      type: "מסמך",
      date: "28.05.2024",
    },
  ];

  const formsArr = [
    {
      title: "הכירו את זירת סוריה",
      type: "מצגת",
      date: "28.05.2024",
    },
    {
      title: "הכירו את זירת סוריה",
      type: "מסמך",
      date: "28.05.2024",
    },
  ];

  switch (true) {
    case selectedTab === "תוצרים":
      return <EduResourse eduArr={eduArr} />;
    case selectedTab === "עיצובים":
      return <DesignTemplates designsArr={designsArr} />;
    case selectedTab === "טפסים":
      return <Forms formsArr={formsArr} />;
    case selectedTab === "תמונות ואלבומים":
      return;
    default:
      return <EduResourse eudArr={eduArr} />;
  }
};

const HomePage = () => {
  const tabsArray = ["תוצרים", "עיצובים", "טפסים", "תמונות ואלבומים"];
  const [selectedTab, setSelectedTab] = useState(tabsArray[0]);

  return (
    <div className="page-container">
      <div className="header">העלאות</div>
      <div className="admin-top-container">
        <Tabs
          tabsArray={tabsArray}
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
        />
        <div className="admin-top-left">
          <div className="admin-top-recommended">
            <img src={blueStar} alt="blue star" />
            <div>סימון הכל כמומלץ</div>
          </div>
          <Search style={{ height: "42px", width: "16.7vw" }} />
        </div>
      </div>
      {getEduResources(selectedTab)}
    </div>
  );
};

export default HomePage;
