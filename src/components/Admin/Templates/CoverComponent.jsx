import React from 'react';
import './CoverComponent.css';
import leftImage from '../../../assets/dummyMedia/party.png'; // update with the correct path
import rightImage from '../../../assets/dummyMedia/rabit.jpg'; // update with the correct path

const CoverComponent = () => {
  return (
    <div className="custom-component">
      <div className="right-section">
        <img src={rightImage} alt="Right" className="right-image" />
      </div>
      <div className="left-section">
        <img src={leftImage} alt="Left" className="left-image" />
        <div className="number-overlay">45</div>
      </div>
    </div>
  );
};

export default CoverComponent;
