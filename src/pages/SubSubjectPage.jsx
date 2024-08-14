import React, { useContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import TopSection from '../components/TopSection/TopSection';
import FileController from '../components/Media/FileController';
import SideBar from '../components/SideBar/SideBar';
import Rate from '../components/Rate/Rate';
import EduResPreview from '../components/EduResPreview/EduResPreview';
import UploadEduType from '../components/Popup/UploadEdu/UploadEduType';
import { PopupContext } from '../store/popup-context';
import notebookImg from '../assets/media/Icons/notebook.svg';
import heartimg from '../assets/media/Icons/fullHeart.svg';
import point from '../assets/media/Icons/pinkPoint.svg';
import headphones from '../assets/media/Icons/headphones.svg';
import headphonesSilent from '../assets/media/Icons/headphonesSilent.svg';
import clock from '../assets/media/Icons/clock.svg';
import bluePlus from '../assets/media/Icons/bluePlus.svg';
import convertDateToString from '../utils/convertDateToString';
import './SubSubjectPage.css';

const SubSubjectPage = () => {
  const { showPopup } = useContext(PopupContext);
  const location = useLocation();
  const subSubject = location.state?.subSubject;
  const currentEdu = location.state?.item || subSubject?.eduResourse[0];

  const { uploadByAdmin, uploadByNonAdmin } = useMemo(() => {
    const admin = [];
    const nonAdmin = [];
    subSubject?.eduResourse?.forEach((eduResourse) => {
      if (eduResourse.creator.isAdmin) {
        admin.push(eduResourse);
      } else {
        nonAdmin.push(eduResourse);
      }
    });
    return { uploadByAdmin: admin, uploadByNonAdmin: nonAdmin };
  }, [subSubject]);

  const getEduCredits = (credits) => (
    <div className="edu-resourse-cradit-container">
      {credits.map((credit, index) => (
        <div className="edu-resourse-cradit" key={index}>
          <div className="edu-resourse-text" style={{ color: '#7D81B2' }}>
            {credit.role}
          </div>
          <div className="edu-resourse-text">{credit.user.fullName}</div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <TopSection title={subSubject.title} navigateTo="/" />
      <div className="page-container edu-resource-page">
        <div className="edu-resource-container">
          <FileController
            item={currentEdu.files}
            style={{ height: '54.1vh' }}
          />
          <div className="edu-resource-title-container">
            <div className="edu-resource-info-container">
              <img
                src={notebookImg}
                className="edu-resourse-nootbook"
                alt="notebook"
              />
              <div className="edu-resource-info">
                <div className="edu-resource-title">{currentEdu.title}</div>
                <div className="edu-resource-type">{currentEdu.type}</div>
              </div>
            </div>
            <div className="edu-resourse-btn-container">
              <div className="edu-resourse-add-container favorite-btn">
                <img src={heartimg} alt="heart" />
                <>הוספה למועדפים</>
              </div>
            </div>
          </div>
          <div className="edu-resource-details">
            <div className="edu-resource-statistics">
              <div className="edu-resource-details-text">
                {currentEdu.difficultyLevel}
              </div>
              <img src={point} alt="point" />
              <div className="edu-resource-details-text">
                מעודכן לתאריך {convertDateToString(currentEdu.timestamps)}
              </div>
              <img src={point} alt="point" />
              <div className="edu-resource-details-text">
                {currentEdu.views} משתמשים
              </div>
            </div>
            <div className="edu-resource-requirement">
              <div className="edu-resource-caption-icon">
                <img
                  src={
                    currentEdu.settings[0].isHeadphonesNeeded
                      ? headphones
                      : headphonesSilent
                  }
                  alt="headphones"
                />
                <div className="edu-resource-requirement">
                  {currentEdu.settings[0].isHeadphonesNeeded ? 'צריך' : 'ללא'}{' '}
                  אוזניות
                </div>
              </div>
              <div className="edu-resource-caption-icon">
                <img src={clock} alt="clock" />
                <div className="edu-resource-requirement">
                  {currentEdu.estimatedTime} דקות
                </div>
              </div>
              <div className="edu-resource-caption-icon">
                <div className="edu-resource-requirement">דירוג</div>
                <Rate
                  style={{ width: '24px' }}
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
              <span style={{ fontWeight: '700' }}>
                {' '}
                {currentEdu.subSubject.title}?{' '}
              </span>
              יש לכם הערות? נשמח לשמוע את דעתכם ולהשתפר!
            </div>
            <Rate style={{ width: '48px' }} />
          </div>
          <div className="edu-resourse-text">{currentEdu.description}</div>
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
              className="sidebar"
            />
          </div>
          <div
            className="edu-resource-other-users"
            style={{ height: '44.1vh' }}
          >
            <div className="edu-resource-title">תוצרים של משתמשים</div>
            <div className="edu-resource-add-edu">
              <div className="edu-resource-add-text">
                יש לכם חומר על
                <span style={{ fontWeight: '700' }}> {subSubject.title} </span>?
                שתפו אותנו ואולי תופיעו בפורטל
              </div>
              <div
                className="edu-resourse-add-container add-content-btn"
                onClick={() => showPopup(<UploadEduType />)}
              >
                <img src={bluePlus} alt="plus" />
                <div className="edu-resource-add-text-btn">העלה תוכן</div>
              </div>
            </div>
            <SideBar
              isWithShadow={true}
              numItems={3}
              startFrom={0}
              ItemComponent={EduResPreview}
              propsToItemComponent={{ isUploadByAdmin: false }}
              data={uploadByNonAdmin}
              className="sidebar"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SubSubjectPage;
