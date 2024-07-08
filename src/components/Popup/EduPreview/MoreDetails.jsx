import "./MoreDetails.css";

const MoreDetails = ({ edu }) => {
  return (
    <div className="more-details-container">
      <div className="edu-text-container">
        <div className="edu-bright-text">רמה</div>
        <div className="edu-dark-text">{edu.level}</div>
      </div>
      <div className="edu-text-container">
        <div className="edu-bright-text">זמן</div>
        <div className="edu-dark-text">20-30 דקות</div>
      </div>
      <div className="edu-text-container">
        <div className="edu-bright-text">מועד תיקוף</div>
        <div className="edu-dark-text">כל 30 יום (המועד הבא 28.05.2024)</div>
      </div>
    </div>
  );
};

export default MoreDetails;
