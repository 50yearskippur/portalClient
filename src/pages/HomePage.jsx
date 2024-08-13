import React from "react";
import "./HomePage.css";
import { useState } from "react";
import Search from "../components/Search/Search";
import RecommendedSection from "../components/RecommendedSection/RecommendedSection";
import Favorites from "../components/Favorites/Favorites.jsx";
import TopNav from "../components/TopNav/TopNav.jsx";
import SortBySubject from "../components/SortBySubject/SortBySubject.jsx";
import ForYouItem from "../components/ItemsComponents/ForYouItem/ForYouItem.jsx";
//delete in production
import recommendedEduResource from "../constants/recommended";
import subjects from "../constants/subjects.js";

const tabsArray = ["במיוחד בשבילך", "כל התוצרים", "תוצרים שאהבתי"];

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
