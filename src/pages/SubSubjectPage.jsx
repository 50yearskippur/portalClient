import React, { useContext, useState } from 'react';
import './SubSubjectPage.css';
import { useLocation, useNavigate } from 'react-router-dom';
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
import addedToFavoritesIcon from '../assets/media/Icons/addedToFavoritesIcon.svg';
// delete in production
import bluePlus from '../assets/media/Icons/bluePlus.svg';
import convertDateToString from '../utils/convertDateToString';
// import plusImg from "../assets/media/Icons/plus.svg";

const SubSubjectPage = () => {
  const { showPopup } = useContext(PopupContext);
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const subSubject = location.state?.subSubject;
  const currentEdu = location.state?.item || subSubject?.eduResource[0];
  const uploadByAdmin = [];
  const uploadByNonAdmin = [];

  subSubject?.eduResource?.forEach((eduResource) => {
    if (eduResource.creator.isAdmin) {
      uploadByAdmin.push(eduResource);
    } else {
      uploadByNonAdmin.push(eduResource);
    }
  });

  const handleItemClick = (item) => {
    navigate(location.pathname, { state: { subSubject, item } });
  };

  const onAddToFavoritesHandler = () => {
    setIsAddedToFavorites((prev) => !prev);
  };

  const getEduCredits = (credits) => {
    return (
      <div className="edu-resource-cradit-container">
        {credits.map((credit, index) => {
          return (
            <div className="edu-resource-cradit" key={index}>
              <div className="edu-resource-text" style={{ color: '#7D81B2' }}>
                {credit.role}
              </div>
              <div className="edu-resource-text">{credit.user.fullName}</div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <TopSection title={subSubject.title} navigateTo={'/'} />
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
                className="edu-resource-nootbook"
                alt="nootbook"
              />
              <div className="edu-resource-info">
                <div className="edu-resource-title">{currentEdu.title}</div>
                <div className="edu-resource-type">{currentEdu.type}</div>
              </div>
            </div>
            <div className="edu-resource-btn-container">
              <div
                className="edu-resource-add-container"
                onClick={onAddToFavoritesHandler}
                style={{
                  border: '1.5px solid #FC4E84',
                  color: isAddedToFavorites ? 'white' : '#FC4E84',
                  backgroundColor: isAddedToFavorites ? '#FC4E84' : 'white',
                }}
              >
                <img
                  src={isAddedToFavorites ? addedToFavoritesIcon : heartimg}
                  alt="heart"
                />
                <span>
                  {isAddedToFavorites ? 'נוסף למועדפים' : 'הוספה למועדפים'}
                </span>
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
                  alt="headpones"
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
              <span style={{ fontWeight: '700' }}> {currentEdu.title}? </span>
              יש לכם הערות? נשמח לשמוע את דעתכם ולהשתפר!
            </div>
            <Rate style={{ width: '48px' }} />
          </div>
          <div className="edu-resource-text">{currentEdu.description}</div>
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
              style={{ height: '30.4vh' }}
              onItemClick={handleItemClick}
            />
          </div>
          <div
            className="edu-resource-other-users"
            style={{ height: '44.1vh' }}
          >
            <div className="edu-resource-title">תוצרים של משתמשים</div>
            <div className="edu-resource-add-edu">
              <div className="edu-resource-add-text" style={{ width: '13vw' }}>
                יש לכם חומר על
                <span style={{ fontWeight: '700' }}> {subSubject.title}</span>?
                שתפו אותנו ואולי תופיעו בפורטל
              </div>
              <div
                className="edu-resource-add-container"
                style={{
                  border: '1.5px solid rgba(255, 255, 255, 0.20)',
                  backgroundColor: '#fff',
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
              style={{ height: '30.4vh' }}
              onItemClick={handleItemClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SubSubjectPage;
