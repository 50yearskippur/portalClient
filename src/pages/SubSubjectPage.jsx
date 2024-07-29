import React from "react";
import "./SubSubjectPage.css";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import TopSection from "../components/TopSection/TopSection";
import FileController from "../components/Media/FileController";
import SideBar from "../components/SideBar/SideBar";
import Rate from "../components/Rate/Rate";
import EduResPrev from "../components/EduResPrev/EduResPrev";
import UploadEduType from "../components/Popup/UploadEdu/UploadEduType";
import { PopupContext } from "../store/popup-context";
import notebookImg from "../assets/media/Icons/notebook.svg";
import heartimg from "../assets/media/Icons/fullHeart.svg";
import plusImg from "../assets/media/Icons/plus.svg";
import point from "../assets/media/Icons/pinkPoint.svg";
import headpones from "../assets/media/Icons/headphones.svg";
import clock from "../assets/media/Icons/clock.svg";
import bluePlus from "../assets/media/Icons/bluePlus.svg";
// delete in production
import rabit from "../assets/img/rabit.jpg";

const SubSubjectPage = () => {
  const { showPopup } = useContext(PopupContext);
  const location = useLocation();
  const currentEdu = location.state?.item;
  // const currentEdu = {
  //   title: 'משחקי פז"מ',
  //   type: "משחק",
  //   subSubject: {
  //     title: "לורם אימפסום",
  //     description: "תיאור תיאור",
  //     eduResource: [],
  //   },
  //   media: video,
  //   mediaType: "video",
  // }
  const eduResources = {
    uploadByArtch: [
      {
        title: "אמצעי למידה",
        type: "סרטון",
        date: Date("28.8.2024"),
        subSubject: {
          title: "זירת סוריה",
        },
        subject: { title: "מבואות מודיעין" },
        media: rabit,
        mediaType: "image",
        level: "רמה בסיסית",
        uploadByArtech: true,
      },
      {
        title: "אמצעי למידה",
        type: "סרטון",
        date: Date("28.05.2024"),
        subSubject: {
          title: "זירת סוריה",
        },
        subject: { title: "מבואות מודיעין" },
        media: rabit,
        mediaType: "image",
        level: "רמה בסיסית",
        uploadByArtech: true,
      },
      {
        title: "אמצעי למידה",
        type: "סרטון",
        date: Date("28.8.2024"),
        subSubject: {
          title: "זירת סוריה",
        },
        subject: { title: "מבואות מודיעין" },
        media: rabit,
        mediaType: "image",
        level: "רמה בסיסית",
        uploadByArtech: true,
      },
    ],
    uploadByOther: [
      {
        title: "סוריה מאז ועד היום",
        type: "סרטון",
        date: Date("28.8.2024"),
        subSubject: {
          title: "זירת סוריה",
        },
        subject: { title: "מבואות מודיעין" },
        media: rabit,
        mediaType: "image",
        level: "מותאם לכל הרמות",
        uploadByArtech: false,
      },
      {
        title: "סוריה מאז ועד היום",
        type: "סרטון",
        date: Date("28.8.2024"),
        subSubject: {
          title: "זירת סוריה",
        },
        subject: { title: "מבואות מודיעין" },
        media: rabit,
        mediaType: "image",
        level: "מותאם לכל הרמות",
        uploadByArtech: false,
      },
      {
        title: "סוריה מאז ועד היום",
        type: "סרטון",
        date: Date("28.8.2024"),
        subSubject: {
          title: "זירת סוריה",
        },
        subject: { title: "מבואות מודיעין" },
        media: rabit,
        mediaType: "image",
        level: "מותאם לכל הרמות",
        uploadByArtech: false,
      },
    ],
  };

  return (
    <>
      <TopSection title={currentEdu?.subSubject?.title} navigateTo={"/"} />
      <div className="page-container edu-resource-page">
        <div className="edu-resource-container">
          <FileController item={currentEdu} style={{ height: "54.1vh" }} />
          <div className="edu-resource-title-container">
            <div className="edu-resource-info-container">
              <img
                src={notebookImg}
                className="edu-resourse-nootbook"
                alt="nootbook"
              />
              <div className="edu-resource-info">
                <div className="edu-resource-title">{currentEdu.title}</div>
                <div className="edu-resource-type">לומדה</div>
              </div>
            </div>
            <div className="edu-resourse-btn-container">
              <div
                className="edu-resourse-add-container"
                style={{
                  border: "1.5px solid #FC4E84",
                  color: "#FC4E84",
                }}
              >
                <img src={heartimg} alt="heart" />
                <>הוספה למועדפים</>
              </div>
              <div
                className="edu-resourse-add-container"
                style={{
                  border: "1.5px solid rgba(255, 255, 255, 0.20)",
                  backgroundColor: "#3259FF",
                  color: "#fff",
                }}
              >
                <img src={plusImg} alt="plus" />
                <>הוספה לקורס שלי</>
              </div>
            </div>
          </div>
          <div className="edu-resource-details">
            <div className="edu-resource-statistics">
              <div className="edu-resource-details-text">מותאם לכל הרמות</div>
              <img src={point} alt="point" />
              <div className="edu-resource-details-text">
                מעודכן לתאריך 28.05.2024
              </div>
              <img src={point} alt="point" />
              <div className="edu-resource-details-text">2691 משתמשים</div>
            </div>
            <div className="edu-resource-requirement">
              <div className="edu-resource-caption-icon">
                <img src={headpones} alt="headpones" />
                <div className="edu-resource-requirement">ללא אוזניות</div>
              </div>
              <div className="edu-resource-caption-icon">
                <img src={clock} alt="clock" />
                <div className="edu-resource-requirement">20-30 דקות</div>
              </div>
              <div className="edu-resource-caption-icon">
                <div className="edu-resource-requirement">דירוג</div>
                <Rate
                  style={{ width: "24px" }}
                  clickable={false}
                  numberOfStars={3}
                />
              </div>
            </div>
          </div>
          <div className="horizontal-line" />
          <div className="edu-resource-comments">
            <div className="edu-resource-comment-text">
              אהבתם את הכרת
              <span style={{ fontWeight: "700" }}> זירת סוריה </span>
              יש לכם הערות? נשמח לשמוע את דעתכם ולהשתפר!
            </div>
            <Rate style={{ width: "48px" }} />
          </div>
          <div className="edu-resourse-text">
            משחק שנועד ללמד את צבעי הכומתות בחיילות השונים משחק שנועד ללמד את
            צבעי הכומתות בחיילות השונים משחק שנועד ללמד את צבעי הכומתות בחיילות
            השונים
          </div>
          <div className="edu-resourse-cradit-container">
            <div className="edu-resourse-cradit">
              <div className="edu-resourse-text" style={{ color: "#7D81B2" }}>
                פרויקטור
              </div>
              <div className="edu-resourse-text">שם פרויקטור</div>
            </div>
            <div className="edu-resourse-cradit">
              <div className="edu-resourse-text" style={{ color: "#7D81B2" }}>
                מומחה תוכן
              </div>
              <div className="edu-resourse-text">שם מומחה תוכן</div>
            </div>
            <div className="edu-resourse-cradit">
              <div className="edu-resourse-text" style={{ color: "#7D81B2" }}>
                עיצוב גרפי
              </div>
              <div className="edu-resourse-text">שם עיצוב גרפי</div>
            </div>
            <div className="edu-resourse-cradit">
              <div className="edu-resourse-text" style={{ color: "#7D81B2" }}>
                פרויקטור
              </div>
              <div className="edu-resourse-text">שם פיתוח</div>
            </div>
            <div className="edu-resourse-cradit">
              <div className="edu-resourse-text" style={{ color: "#7D81B2" }}>
                פרויקטור
              </div>
              <div className="edu-resourse-text">שם פיצוח תוכן</div>
            </div>
          </div>
        </div>
        <div className="edu-resource-other-container">
          <div className="edu-resource-other-users">
            <div className="edu-resource-title">עוד דרכים ללמוד</div>
            <SideBar
              numItems={3}
              startFrom={0}
              ItemComponent={EduResPrev}
              data={eduResources?.uploadByArtch}
              style={{ height: "30.4vh" }}
            />
          </div>
          <div
            className="edu-resource-other-users"
            style={{ height: "44.1vh" }}
          >
            <div className="edu-resource-title">תוצרים של משתמשים</div>
            <div className="edu-resource-add-edu">
              <div className="edu-resource-add-text">
                יש לכם חומר על
                <span style={{ fontWeight: "700" }}> זירת סוריה </span>? שתפו
                אותנו ואולי תופיעו בפורטל
              </div>
              <div
                className="edu-resourse-add-container"
                style={{
                  border: "1.5px solid rgba(255, 255, 255, 0.20)",
                  backgroundColor: "#fff",
                }}
              >
                <img src={bluePlus} alt="plus" />
                <div
                  className="edu-resource-add-text-btn"
                  onClick={() => showPopup(<UploadEduType />)}
                >
                  העלה תוכן
                </div>
              </div>
            </div>
            <SideBar
              numItems={3}
              startFrom={0}
              ItemComponent={EduResPrev}
              data={eduResources?.uploadByOther}
              style={{ height: "30.4vh" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SubSubjectPage;
