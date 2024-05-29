import "./SubSubjectPage.css";
import TopSection from "../components/TopSection/TopSection";
import FileController from "../components/Media/FileController";
import Rate from "../components/Rate/Rate";
import notebookImg from "../assets/media/Icons/notebook.svg";
import heartimg from "../assets/media/Icons/heart.svg";
import plusImg from "../assets/media/Icons/plus.svg";
import point from "../assets/media/Icons/pinkPoint.svg";
import headpones from "../assets/media/Icons/headphones.svg";
import clock from "../assets/media/Icons/clock.svg";
import fullStar from "../assets/media/Icons/fullStar.svg";
import emptyStart from "../assets/media/Icons/emptyStar.svg";
// delete in production
import rabit from "../assets/img/rabit.jpg";

const SubSubjectPage = () => {
  // delete in production
  const subSubject = {
    title: "יונקים",
    description: "פרטים על יונקים",
    eduResourse: [
      {
        title: "ארנב",
        type: "חיה",
        subSubject: {
          title: "כותרת",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "ארנב",
        type: "חיה",
        subSubject: {
          title: "כותרת",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "ארנב",
        type: "חיה",
        subSubject: {
          title: "כותרת",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "ארנב",
        type: "חיה",
        subSubject: {
          title: "כותרת",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "ארנב",
        type: "חיה",
        subSubject: {
          title: "כותרת",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "ארנב",
        type: "חיה",
        subSubject: {
          title: "כותרת",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "ארנב",
        type: "חיה",
        subSubject: {
          title: "כותרת",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "ארנב",
        type: "חיה",
        subSubject: {
          title: "כותרת",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "ארנב",
        type: "חיה",
        subSubject: {
          title: "כותרת",
        },
        media: rabit,
        mediaType: "image",
      },
    ],
  };
  const currentEdu = subSubject.eduResourse[0];
  return (
    <>
      <TopSection title={subSubject.title} navigateTo={"/"} />
      <div className="page-container">
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
                <div>הוספה למועדפים</div>
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
                <div>הוספה לקורס שלי</div>
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
                <Rate imageSrc={fullStar} style={{ width: "24px" }} />
              </div>
            </div>
          </div>
          <div className="edu-resource-comments">
            <div className="edu-resource-comment-text">
              אהבתם את הכרת
              <span style={{ fontWeight: "700" }}> זירת סוריה </span>
              יש לכם הערות? נשמח לשמוע את דעתכם ולהשתפר!
            </div>
            <Rate imageSrc={emptyStart} style={{ width: "48px" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SubSubjectPage;
