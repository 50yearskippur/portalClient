import "./TopSection.css";
import backImg from "../../assets/media/Icons/backIcon.svg";
import { useNavigate } from "react-router-dom";
import React from 'react';

const TopSection = ({ title, navigateTo }) => {
  const navigate = useNavigate();
  return (
    <div className="top-section-container">
      <div
        className="top-section-back-container"
        onClick={() => navigate(navigateTo)}
      >
        <img src={backImg} alt="back icon" />
        <div className="top-section-back-text">חזרה</div>
      </div>
      <div className="top-section-header">{title}</div>
    </div>
  );
};

export default TopSection;
