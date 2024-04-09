import SideBar from "../components/SideBar/SideBar";
import Tabs from "../components/Tabs/Tabs";
import "./HomePage.css";
import rabit from "../assets/img/rabit.jpg";
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
    <div className="home-page-wrapper page-container">
      <p className="recommended-title">מומלצים</p>
      <div className="recommended-wrapper">
        <RecommendedItem
          item={data[0]}
          style={{height: "100%", width: "100%"}}
        />
        <SideBar
          numItems={2}
          height="100%"
          ItemComponent={RecommendedItem}
          data={data}
        />
      </div>
      <Tabs style={{marginTop: "12.7vh"}} tabsArray={tabsArray} />
    </div>
  );
};

export default HomePage;
