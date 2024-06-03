import "./HomePage.css";
import { useContext, useState } from "react";
import { PopupContext } from "../store/popup-context";
import Tabs from "../components/Tabs/Tabs";
import Button from "../components/Button/Button";
import UploadEduType from "../components/Popup/UploadEduType";
import Search from "../components/Search/Search";
import RecommendedSection from "../components/RecommendedSection/RecommendedSection";
import filterIcon from "../assets/media/Icons/filterIcon.png";
import openFilterIcon from "../assets/media/Icons/openFilterIcon.png";
import Favorites from "../components/Favorites/Favorites.jsx";
import ForYou from "../components/ForYou/ForYou.jsx";
//delete in production
import rabit from "../assets/img/rabit.jpg";

//delete in production
const recommendedEduResource = [
  {
    title: 'משחקי פז"מ',
    type: "משחק",
    subSubject: {
      title: "לורם אימפסום",
      description: "תיאור תיאור",
      eduResource: [],
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: 'משחקי פז"מ',
    type: "משחק",
    subSubject: {
      title: "לורם אימפסום",
      description: "תיאור תיאור",
      eduResource: [],
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: 'משחקי פז"מ',
    type: "משחק",
    subSubject: {
      title: "לורם אימפסום",
      description: "תיאור תיאור",
      eduResource: [],
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: 'משחקי פז"מ',
    type: "משחק",
    subSubject: {
      title: "לורם אימפסום",
      description: "תיאור תיאור",
      eduResource: [],
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: 'משחקי פז"מ',
    type: "משחק",
    subSubject: {
      title: "לורם אימפסום",
      description: "תיאור תיאור",
      eduResource: [],
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: 'משחקי פז"מ',
    type: "משחק",
    subSubject: {
      title: "לורם אימפסום",
      description: "תיאור תיאור",
      eduResource: [],
    },
    media: rabit,
    mediaType: "image",
  },
];

//delete in production
const subjects = [
  {
    title: "מבואות מודיעין",
    type: "אמצעי למידה",
    subSubject: [],
  },
  {
    title: "טכנולוגיה וסייבר",
    type: "אמצעי למידה",
    subSubject: [],
  },
  {
    title: "מחקר ומיצוי מידע",
    type: "אמצעי למידה",
    subSubject: [],
  },
  {
    title: "שפה",
    type: "אמצעי למידה",
    subSubject: [],
  },
  {
    title: "המלצות",
    type: "אמצעי למידה",
    subSubject: [],
  },
];
const tabsArray = ["במיוחד בשבילך", "כל התוצרים", "תוצרים שאהבתי"];

//get recommended item per unit
// const getRecommendedPerUnit = () => {
//   return data;
// };

//get recommended for all
// const getRecommendedForAll = () => {
//   return data[0];
// };

const getEduResources = (selectedTab) => {
  switch (true) {
    case selectedTab === "תוצרים שאהבתי":
      return <Favorites />;
    case selectedTab === "כל התוצרים":
      return <p>כל התוצרים</p>;
    default:
      return <ForYou subjects={subjects} />;
  }
};

const HomePage = () => {
  const { showPopup } = useContext(PopupContext);
  const [selectedTab, setSelectedTab] = useState(tabsArray[0]);

  return (
    <div className="home-page-wrapper page-container">
      <Search
        style={{
          width: "42.84%",
          height: "7.58vh",
          margin: "1% auto",
        }}
      />
      <p className="header" style={{ marginTop: "-4vh" }}>
        מומלצים
      </p>
      <RecommendedSection
        style={{ marginTop: "6.48vh" }}
        data={recommendedEduResource}
      />
      <div className="edu-resource-nav-bar">
        <Tabs
          tabsArray={tabsArray}
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
        />
        <div className="nav-bar-left-container">
          <div className="filter-container">
            <img className="filter-icon" src={filterIcon} alt="filter icon" />
            <p className="filter-text">סנן לפי</p>
            <img src={openFilterIcon} alt="open filter icon" />
          </div>
          <Search style={{ width: "21.17vw" }} />
          <Button
            text={"העלאת תוצר"}
            onClick={() => showPopup(<UploadEduType />)}
          />
        </div>
      </div>
      {getEduResources(selectedTab)}
      <div style={{ display: "flex" }}></div>
    </div>
  );
};

export default HomePage;
