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
        <img
          src={rabit}
          alt="rabit"
          style={{ height: "100%", width: "100%" }}
        />
        <div className="image-list">
          {data.slice(0, 2).map((image, index) => (
            <div className="image-item" key={index}>
              <img src={image.media} alt={image.title} />
            </div>
          ))}
        </div>
      </div>
      {/* <div
        style={{
          display: "grid",
          gridTemplateColumns: "60% 39.7%",
          gap: "0.3%",
          maxHeight: "50%",
          maxWidth: "100%",
        }}
      > */}
      {/* <div> */}
      {/* <RecommendedItem item={data[0]} style={{ height: "100%" }} /> */}
      {/* </div> */}
      {/* <div> */}
      {/* <SideBar
          numItems={2}
          width="100%"
          height="100%"
          data={data}
          ItemComponent={RecommendedItem}
        /> */}
      {/* </div> */}
      {/* </div> */}
      {/* <div className="recommended-container">
        <RecommendedItem style={{ width: "60% !important" }} item={data[0]} />
        <SideBar
          numItems={2}
          width="28.7%"
          height="53.65%"
          data={data}
          ItemComponent={RecommendedItem}
        />
      </div> */}
      {/* <Tabs tabsArray={tabsArray} /> */}
    </div>
  );
};

export default HomePage;
