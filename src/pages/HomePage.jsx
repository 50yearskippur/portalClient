import "./HomePage.css";
import { useState } from "react";
import Search from "../components/Search/Search";
import RecommendedSection from "../components/RecommendedSection/RecommendedSection";
import Favorites from "../components/Favorites/Favorites.jsx";
import TopNav from "../components/TopNav/TopNav.jsx";
//delete in production
import rabit from "../assets/img/rabit.jpg";
import SortBySubject from "../components/SortBySubject/SortBySubject.jsx";
import ForYouItem from "../components/ItemsComponents/ForYouItem/ForYouItem.jsx";

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

const subSubjects = [
  {
    title: "זירת סוריה",
    description: "בואו ללמוד איתנו על זירת סוריה!",
    eduResourse: [{}, {}, {}, {}, {}],
  },
  {
    title: "זירת סוריה",
    description: "בואו ללמוד איתנו על זירת סוריה!",
    eduResourse: [{}, {}, {}, {}, {}],
  },
  {
    title: "זירת סוריה",
    description: "בואו ללמוד איתנו על זירת סוריה!",
    eduResourse: [{}],
  },
  {
    title: "זירת סוריה",
    description: "בואו ללמוד איתנו על זירת סוריה!",
    eduResourse: [{}, {}, {}, {}, {}, {}, {}],
  },
  {
    title: "זירת סוריה",
    description: "בואו ללמוד איתנו על זירת סוריה!",
    eduResourse: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
  },
  {
    title: "זירת סוריה",
    description: "בואו ללמוד איתנו על זירת סוריה!",
    eduResourse: [{}, {}],
  },
];

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
      return (
        <SortBySubject
          subjects={subjects}
          subSubjectsArray={subSubjects}
          ItemComponent={ForYouItem}
        />
      );
  }
};

const HomePage = () => {
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
      <p className="header" style={{ marginTop: "-3vh" }}>
        מומלצים
      </p>
      <RecommendedSection data={recommendedEduResource} />
      <TopNav
        tabsArray={tabsArray}
        setSelectedTab={setSelectedTab}
        selectedTab={selectedTab}
        tabsStyle={{ marginRight: "0.5vw" }}
        topNavStyle={{ marginBottom: "4vh", marginTop: "5vh" }}
      />
      {getEduResources(selectedTab)}
    </div>
  );
};

export default HomePage;
