import './MoreDetails.css';

const MoreDetails = ({ edu, uploadByUser }) => {
  return (
    <div className="more-details-container">
      <div className="edu-text-container">
        <div className="edu-bright-text">רמה</div>
        <div className="edu-dark-text">{edu.level}</div>
      </div>
      {!uploadByUser && (
        <div className="edu-text-container">
          <div className="edu-bright-text">זמן מןערך</div>
          <div className="edu-dark-text">20-30 דקות</div>
        </div>
      )}
      {!uploadByUser && (
        <div className="edu-text-container">
          <div className="edu-bright-text">מועד תיקוף התוכן</div>
          <div className="edu-dark-text">כל 30 יום (המועד הבא 28.05.2024)</div>
        </div>
      )}
    </div>
  );
};

export default MoreDetails;
