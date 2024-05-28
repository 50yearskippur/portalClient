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
const data = [
  {
    title: 'משחקי פז"מ',
    type: "חיה",
    subSubject: {
      title: "משחקים",
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: "סודות חיל המודיעין",
    type: "חיה",
    subSubject: {
      title: "מודיעין",
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: "מצטייני הנשיא",
    type: "חיה",
    subSubject: {
      title: "צבא ההגנה לישראל",
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: "ריאיון עם רב סרן",
    type: "חיה",
    subSubject: {
      title: "מודיעין",
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: "מידע פיקטיבי",
    type: "חיה",
    subSubject: {
      title: "רכילות",
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: "קיפוד",
    type: "חיה",
    subSubject: {
      title: "חיות",
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: "ארנב",
    type: "חיה",
    subSubject: {
      title: "חיות",
    },
    media: rabit,
    mediaType: "image",
  },
];

//delete in production
const subjects = [
  "מבואות מודיעין",
  "טכנולוגיה וסייבר",
  "מחקר ומיצוי מידע",
  "שפה",
  "המלצות",
  "בלה בלה",
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
      return <Favorites subjects={subjects} />;
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
      <RecommendedSection style={{ marginTop: "6.48vh" }} data={data} />
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
      {/* {selectedTab === "במיוחד בשבילך" && <p>במיוחד בשבילי</p>} */}
      <div style={{ display: "flex" }}>
        {/* <div
          className="white-container"
          style={{
            marginTop: "3.5vh",
            marginLeft: "2vw",
            marginBottom: "2vh",
            height: "42vh",
          }}
        >
          <TitlesList
            titlesArray={titlesObjectsArray}
            getDefaultTitle={() => titlesObjectsArray[0].text}
            style={{
              containerStyle: { marginTop: "5vh", marginRight: "2vw" },
              color: "#5D5D5D",
            }}
          />
        </div>
        <div
          className="white-container"
          style={{ marginTop: "3.5vh", marginBottom: "2vh" }}
        >
          <SubSubjects
            subject={{
              title: "ארנב",
              subSubject: [
                {
                  title: "יונקים",
                  description: "כלבים קטנים",
                  eduResourse: [{}, {}, {}],
                },
                {
                  title: "יונקים",
                  description: "כלבים קטנים",
                  eduResourse: [{}, {}],
                },
              ],
            }}
          />
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;
