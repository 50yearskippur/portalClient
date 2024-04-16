import SideBar from "../components/SideBar/SideBar";
import Tabs from "../components/Tabs/Tabs";
import "./HomePage.css";
import rabit from "../assets/img/rabit.jpg";
import RecommendedItem from "../components/ItemsComponents/RecommendedItem";
import TitlesList from "../components/TitlesList/TitlesList";
import SubSubjects from "../components/SubSubjects/SubSubjects";

//delete in production
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
//delete in production
const titlesArray = [
  "מבואות מודיעין",
  "טכנולוגיה וסייבר",
  "מחקר ומיצוי מידע",
  "שפה",
  "המלצות",
  "בלה בלה",
];
const titlesObjectsArray = titlesArray.map((title) => ({ text: title }));

//delete in production
const tabsArray = ["במיוחד בשבילך", "כל התוצרים", "תוצרים שאהבתי"];

const HomePage = () => {
  return (
    <div className="home-page-wrapper page-container">
      <p className="recommended-title">מומלצים</p>
      <div className="recommended-wrapper">
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
      <Tabs style={{ marginTop: "12.7vh" }} tabsArray={tabsArray} />
      <div style={{ display: "flex" }}>
        <div
          className="white-container"
          style={{ marginTop: "3.5vh", marginLeft: "2vw", marginBottom: "2vh"  }}
        >
          <TitlesList
            titlesArray={titlesObjectsArray}
            getDefaultTitle={() => titlesObjectsArray[0]}
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;
