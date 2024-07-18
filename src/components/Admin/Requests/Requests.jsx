import "./Requests.css";
import getRequestChildren from "../../../utils/getRequestChildren";
const Requests = ({ requests, children, header }) => {
  return (
    <div className="waitingLists-container">
      {requests.map((request, index) => (
        <div key={`request ${index}`} className="request-container">
          {getRequestChildren(request, header).map((child) => child)}
        </div>
      ))}
    </div>
  );
};

export default Requests;
