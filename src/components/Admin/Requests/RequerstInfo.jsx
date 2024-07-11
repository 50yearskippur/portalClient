import "./Requests.css";

const RequerstInfo = (item) => {
  return [
    <div className="request-title">{item?.title}</div>,
    <div className="request-details">
      <div className="request-text">{item.date}</div>
      <div className="request-text">{item.creator}</div>
      <div className="request-view-btn">צפייה בבקשה</div>
    </div>,
  ];
};

export default RequerstInfo;
