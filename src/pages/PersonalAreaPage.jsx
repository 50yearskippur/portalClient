import React from 'react';
import './PersonalAreaPage.css';
import { useState } from 'react';
import TopNav from '../components/TopNav/TopNav';
import Favorites from '../components/Favorites/Favorites';
import Dropdown from '../components/Dropdown/Dropdown';
import PersonalAreaAvater from '../components/PersonalAreaAvater/PersonalAreaAvater';
import UploadedEdu from '../components/PersonalArea/UploadedEdu';
import ProfileBar from '../assets/media/Profile/profileBar.svg';

const PersonalAreaPage = () => {
  const tabsArray = ['תוצרים שאהבתי', 'תוצרים שהעלתי'];
  const [selectedTab, setSelectedTab] = useState(tabsArray[0]);

  const getEduResources = () => {
    switch (true) {
      case selectedTab === 'תוצרים שאהבתי':
        return <Favorites />;
      case selectedTab === 'תוצרים שהעלתי':
        return <UploadedEdu />;
      default:
        return <Favorites />;
    }
  };

  return (
    <>
      <img src={ProfileBar} className="profile-bar" alt="profile bar" />
      <div className="page-container">
        <div className="personal-area-user">
          <PersonalAreaAvater
            name="YC"
            style={{
              width: '10.3vw',
              height: '15.8vh',
              fontSize: '70px',
              borderRadius: '10px',
            }}
          />
          <div className="personal-area-details">
            <div className="personal-area-username">יובל כהן</div>
            <Dropdown list={['כלב', 'חתול', 'קיפוד', 'כלבלב']} />
          </div>
        </div>
        <TopNav
          tabsArray={tabsArray}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          tabsStyle={{ gap: '24px' }}
          topNavStyle={{ marginBottom: '4vh' }}
        />
        {getEduResources()}
      </div>
    </>
  );
};

export default PersonalAreaPage;
