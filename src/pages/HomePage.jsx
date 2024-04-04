import Tabs from "../components/Tabs/Tabs";
import "./HomePage.css";

const tabsArray = ["במיוחד בשבילך", "כל התוצרים", "תוצרים שאהבתי"];

const HomePage = () => {
  return (
    <div className="home-page-wrapper">
      <p className="recommended-title">מומלצים</p>
      <Tabs tabsArray={tabsArray} />
    </div>
  );
};

export default HomePage;
