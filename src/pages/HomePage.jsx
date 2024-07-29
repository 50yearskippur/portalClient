import React from "react";
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
    title: "רעיון מטורף",
    type: "משחק",
    subSubject: {
      title: "קיפוד",
      description: "תיאור תיאור",
      eduResource: [],
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: "מומלץ ממש",
    type: "משחק",
    subSubject: {
      title: "מחברות",
      description: "תיאור תיאור",
      eduResource: [],
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: "הכי מומלץ",
    type: "משחק",
    subSubject: {
      title: "מבצע כיף",
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
      title: "קיץ",
      description: "תיאור תיאור",
      eduResource: [],
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: "מבצעים שווים",
    type: "משחק",
    subSubject: {
      title: "צוות סימבה",
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
    subSubjects: [
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
    ],
  },
  {
    title: "טכנולוגיה וסייבר",
    type: "אמצעי למידה",
    subSubjects: [
      {
        title: "זירת סוריה",
        description: "בואו ללמוד איתנו על זירת סוריה!",
        eduResourse: [{}, {}],
      },
    ],
  },
  {
    title: "מחקר ומיצוי מידע",
    type: "אמצעי למידה",
    subSubjects: [],
  },
  {
    title: "שפה",
    type: "אמצעי למידה",
    subSubjects: [
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
    ],
  },
  {
    title: "המלצות",
    type: "אמצעי למידה",
    subSubjects: [],
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
      return (
        <SortBySubject
          numberOfItemsInLine={1}
          subjects={subjects}
          ItemComponent={ForYouItem}
        />
      );
    default:
      return (
        <SortBySubject
          numberOfItemsInLine={1}
          subjects={subjects}
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
        placeholder={"חיפוש חופשי"}
        style={{
          width: "42.84%",
          height: "3.33vh",
          margin: "2.96vh auto",
          padding: "10px",
        }}
      />
      <p
        className="header"
        style={{ marginTop: "-3.4vh", marginBottom: "4.432vh" }}
      >
        מומלצים
      </p>
      <RecommendedSection data={recommendedEduResource} />
      <TopNav
        tabsArray={tabsArray}
        setSelectedTab={setSelectedTab}
        selectedTab={selectedTab}
        tabsStyle={{ marginRight: "0.5vw" }}
        topNavStyle={{ marginBottom: "4vh", marginTop: "5.96vh" }}
      />
      {getEduResources(selectedTab)}
    </div>
  );
};

export default HomePage;
