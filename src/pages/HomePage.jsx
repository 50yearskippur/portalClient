import SideBar from "../components/SideBar/SideBar";
import Tabs from "../components/Tabs/Tabs";
import "./HomePage.css";
import { useContext } from "react";
import { PopupContext } from "../store/popup-context";
import rabit from "../assets/img/rabit.jpg";
import RecommendedItem from "../components/ItemsComponents/RecommendedItem";
import TitlesList from "../components/TitlesList/TitlesList";
import SubSubjects from "../components/SubSubjects/SubSubjects";
import Button from "../components/Button/Button";
import UploadEduType from "../components/Popup/UploadEduType";
import Search from "../components/Search/Search";
import RecommendedSection from "../components/ItemsComponents/RecommendedSection/RecommendedSection";

//delete in production
const data = [
  {
    title: 'משחקי פז"מ',
    type: "חיה",
    subSubject: {
      title: "יונקים",
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: "סודות חיל המודיעין",
    type: "חיה",
    subSubject: {
      title: "יונקים",
    },
    media: rabit,
    mediaType: "image",
  },
  {
    title: "מצטייני הנשיא",
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

//get recommended item per unit
const getRecommendedPerUnit = () => {
  return data;
};

//get recommended for all
const getRecommendedForAll = () => {
  return data[0];
};

const HomePage = () => {
  const { showPopup } = useContext(PopupContext);

  return (
    <div className="home-page-wrapper page-container">
      <Search
        style={{
          width: "42.84%",
          height: "7.58vh",
          margin: "1% auto",
        }}
      />
      <p className="recommended-title">מומלצים</p>
      <RecommendedSection />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "65% 35%",
          columnGap: "2.5%",
          width: "100%",
          alignItems: "flex-end",
        }}
      >
        <Tabs style={{ marginTop: "12.7vh" }} tabsArray={tabsArray} />
        <div className="homepage-buttons-container">
          <Button
            text={"העלאת תוצר"}
            onClick={() => showPopup(<UploadEduType />)}
          />
          <Button text={"הזמנת תוצר"} isDarkMode={true} />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          className="white-container"
          style={{ marginTop: "3.5vh", marginLeft: "2vw", marginBottom: "2vh" }}
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;
