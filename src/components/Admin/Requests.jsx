import "./Requests.css";

const Requests = ({ request }) => {
  return (
    <div className="request-container">
      <div className="request-title">{request?.title}</div>
      <div className="request-details">
        <div className="request-text">{request.date}</div>
        <div className="request-name">{request.level}</div>
        <div className="request-text">{request.creator}</div>
      </div>
      <div className="request-buttons">
        <div className="request-btn delete">מחיקה</div>
        <div className="request-btn upload">העלאה</div>
      </div>
    </div>
  );
};

export default Requests;
