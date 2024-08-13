import React from "react";
import "./SubSubjectPage.css";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import TopSection from "../components/TopSection/TopSection";
import FileController from "../components/Media/FileController";
import SideBar from "../components/SideBar/SideBar";
import Rate from "../components/Rate/Rate";
import EduResPreview from "../components/EduResPreview/EduResPreview";
import UploadEduType from "../components/Popup/UploadEdu/UploadEduType";
import { PopupContext } from "../store/popup-context";
import notebookImg from "../assets/media/Icons/notebook.svg";
import heartimg from "../assets/media/Icons/fullHeart.svg";
import point from "../assets/media/Icons/pinkPoint.svg";
import headphones from "../assets/media/Icons/headphones.svg";
import headphonesSilent from "../assets/media/Icons/headphonesSilent.svg";
import clock from "../assets/media/Icons/clock.svg";
import bluePlus from "../assets/media/Icons/bluePlus.svg";
// delete in production
import convertDateToString from "../utils/convertDateToString";
// import plusImg from "../assets/media/Icons/plus.svg";

const SubSubjectPage = () => {
  const { showPopup } = useContext(PopupContext);
  const location = useLocation();
  const subSubject = location.state?.subSubject;
  const currentEdu = location.state?.item || subSubject?.eduResourse[0];
  const uploadByAdmin = [];
  const uploadByNonAdmin = [];
  

  subSubject?.eduResourse?.forEach(eduResourse => {
    if (eduResourse.creator.isAdmin) {
      uploadByAdmin.push(eduResourse);
    } else {
      uploadByNonAdmin.push(eduResourse);
    }
  });

  const getEduCredits = (credits) => {
    return (
      <div className="edu-resourse-cradit-container">
        {credits.map((credit, index) => {
          return (
            <div className="edu-resourse-cradit" key={index}>
              <div className="edu-resourse-text" style={{ color: "#7D81B2" }}>
                {credit.role}
              </div>
              <div className="edu-resourse-text">{credit.user.fullName}</div>
            </div>
          );
        })}
      </div>
    )
  }

  return (
    <>
      <TopSection title={subSubject.title} navigateTo={"/"} />
      <div className="page-container edu-resource-page">
        <div className="edu-resource-container">
          <FileController item={currentEdu.files} style={{ height: "54.1vh" }} />
          <div className="edu-resource-title-container">
            <div className="edu-resource-info-container">
              <img
                src={notebookImg}
                className="edu-resourse-nootbook"
                alt="nootbook"
              />
              <div className="edu-resource-info">
                <div className="edu-resource-title">{currentEdu.title}</div>
                <div className="edu-resource-type">{currentEdu.type}</div>
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
              {/* <div
                className="edu-resourse-add-container"
                style={{
                  border: "1.5px solid rgba(255, 255, 255, 0.20)",
                  backgroundColor: "#3259FF",
                  color: "#fff",
                }}
              >
                <img src={plusImg} alt="plus" />
                <>הוספה לקורס שלי</>
              </div> */}
            </div>
          </div>
          <div className="edu-resource-details">
            <div className="edu-resource-statistics">
              <div className="edu-resource-details-text">{currentEdu.difficultyLevel}</div>
              <img src={point} alt="point" />
              <div className="edu-resource-details-text">
                מעודכן לתאריך {convertDateToString(currentEdu.timestamps)}
              </div>
              <img src={point} alt="point" />
              <div className="edu-resource-details-text">{currentEdu.views} משתמשים</div>
            </div>
            <div className="edu-resource-requirement">
              <div className="edu-resource-caption-icon">
                <img src={currentEdu.settings[0].isHeadphonesNeeded ? headphones : headphonesSilent} alt="headpones" />
                <div className="edu-resource-requirement">{currentEdu.settings[0].isHeadphonesNeeded ? 'צריך' : 'ללא'} אוזניות</div>
              </div>
              <div className="edu-resource-caption-icon">
                <img src={clock} alt="clock" />
                <div className="edu-resource-requirement">{currentEdu.estimatedTime} דקות</div>
              </div>
              <div className="edu-resource-caption-icon">
                <div className="edu-resource-requirement">דירוג</div>
                <Rate
                  style={{ width: "24px" }}
                  clickable={false}
                  numberOfStars={5}
                />
              </div>
            </div>
          </div>
          <div className="horizontal-line" />
          <div className="edu-resource-comments">
            <div className="edu-resource-comment-text">
              אהבתם את 
              <span style={{ fontWeight: "700" }}> {currentEdu.subSubject.title}? </span>
              יש לכם הערות? נשמח לשמוע את דעתכם ולהשתפר!
            </div>
            <Rate style={{ width: "48px" }} />
          </div>
          <div className="edu-resourse-text">
            {currentEdu.description}
          </div>
          {getEduCredits(currentEdu.credits)}
        </div>
        <div className="edu-resource-other-container">
          <div className="edu-resource-other-users">
            <div className="edu-resource-title">עוד דרכים ללמוד</div>
            <SideBar
              isWithShadow={true}
              propsToItemComponent={{ isUploadByAdmin: true }}
              numItems={3}
              startFrom={0}
              ItemComponent={EduResPreview}
              data={uploadByAdmin}
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
                <span style={{ fontWeight: "700" }}> {subSubject.title} </span>? שתפו
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
              isWithShadow={true}
              numItems={3}
              startFrom={0}
              ItemComponent={EduResPreview}
              propsToItemComponent={{ isUploadByAdmin: false }}
              data={uploadByNonAdmin}
              style={{ height: "30.4vh" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SubSubjectPage;
