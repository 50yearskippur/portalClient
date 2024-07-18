import "./Requests.css";

const RequestNewAdminInfo = (item) => {
  return [
    <div className="request-title">{item?.fullName}</div>,
    <div className="request-details">
      <div className="request-text">{item.date}</div>
      <div className="request-text">{item.creator}</div>
      <div className="request-text">{item.role}</div>
    </div>,
    <div className="request-buttons">
      <div className="request-btn delete">מחיקה</div>
      <div className="request-btn upload">העלאה</div>
    </div>,
  ];
};

export default RequestNewAdminInfo;
