import "./Requests.css";
import getRequestChildren from "../../../utils/getRequestChildren";
const Requests = ({ requests, children, header }) => {
  return (
    <div className="requests-container">
      {requests.map((request, index) => (
        <div key={`request ${index}`} className="request-container">
          {getRequestChildren(request, header).map((child) => child)}
          <div className="request-buttons">
            <div className="request-btn delete">מחיקה</div>
            <div className="request-btn upload">העלאה</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Requests;
