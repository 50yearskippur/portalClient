import SideBar from "../components/SideBar/SideBar";
import Tabs from "../components/Tabs/Tabs";
import "./HomePage.css";
import rabit from "../components/PageTemplate/rabit.jpg";
import RecommendedItem from "../components/ItemsComponents/RecommendedItem";

const data = [
  {
    title: "ארנב",
    type: "חיה",
    subSubject: {
      title: "יונקים",
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: "ארנב",
    type: "חיה",
    subSubject: {
      title: "יונקים",
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: "ארנב",
    type: "חיה",
    subSubject: {
      title: "יונקים",
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: "ארנב",
    type: "חיה",
    subSubject: {
      title: "יונקים",
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: "ארנב",
    type: "חיה",
    subSubject: {
      title: "יונקים",
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: "ארנב",
    type: "חיה",
    subSubject: {
      title: "יונקים",
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: "ארנב",
    type: "חיה",
    subSubject: {
      title: "יונקים",
    },
    media: rabit,
    mediaType: "image",
  },
];

const tabsArray = ["במיוחד בשבילך", "כל התוצרים", "תוצרים שאהבתי"];

const HomePage = () => {
  return (
    <div className="home-page-wrapper">
      <p className="recommended-title">מומלצים</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "58% 40%",
          width: "59.5vw",
          gridGap: "2%",
          height: " 300px",
        }}
      >
        <RecommendedItem
          item={data[0]}
          style={{ height: "100%", width: "100%" }}
        />
        <SideBar
          numItems={2}
          height="100%"
          ItemComponent={RecommendedItem}
          data={data}
        />
      </div>
      {/* <Tabs tabsArray={tabsArray} /> */}
    </div>
  );
};

export default HomePage;
