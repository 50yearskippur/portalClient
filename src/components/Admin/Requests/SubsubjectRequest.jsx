import "./Requests.css";
import convertDateToString from "../../../utils/convertDateToString";

const SubsubjectRequest = (item) => {
  return [
    <div className="request-title">{item?.title}</div>,
    <div className="request-details">
      <div className="request-text">{convertDateToString(item.date)}</div>
      <div className="request-text">{item.creator}</div>
      <div className="request-view-btn">צפייה בבקשה</div>
    </div>,
    <div className="request-buttons">
      <div className="request-btn delete">מחיקה</div>
      <div className="request-btn upload">העלאה</div>
    </div>,
  ];
};

export default SubsubjectRequest;
