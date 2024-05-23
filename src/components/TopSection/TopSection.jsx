import "./TopSection.css";
import backImg from "../../assets/media/Icons/backIcon.svg";
import { useNavigate } from "react-router-dom";

const TopSection = ({ navigateTo }) => {
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
      <div className="top-section-header">פורימון בה"ד 15</div>
    </div>
  );
};

export default TopSection;
