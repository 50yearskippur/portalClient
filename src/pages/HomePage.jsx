import Tabs from "../components/Tabs/Tabs";
import "./HomePage.css";
import { useContext } from "react";
import { PopupContext } from "../store/popup-context";
import rabit from "../assets/img/rabit.jpg";
import TitlesList from "../components/TitlesList/TitlesList";
import SubSubjects from "../components/SubSubjects/SubSubjects";
import Button from "../components/Button/Button";
import UploadEduType from "../components/Popup/UploadEduType";
import Search from "../components/Search/Search";
import RecommendedSection from "../components/RecommendedSection/RecommendedSection";

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
      <p className="header" style={{ marginTop: "-4vh" }}>
        מומלצים
      </p>
      <RecommendedSection style={{ marginTop: "6.48vh" }} data={data} />
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Tabs style={{ marginTop: "12.7vh" }} tabsArray={tabsArray} />
        <div style={{ display: "flex", width: "708.62px", height: "32px", gap: "24px" }}>
          <Search style={{borderRadius: "32.1px", height: "32px", width: "406.62px", padding: "10.7px, 21.4px, 10.7px, 21.4px"}}/>
          <Button
            text={"העלאת תוצר"}
            onClick={() => showPopup(<UploadEduType />)}
          />
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
