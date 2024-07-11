
import "./Requests.css";

const RequestWaitingForApproval = (item) => {
  return  [  <div className="request-title">{item?.title}</div>,
          <div className="request-details">
            <div className="request-text">{item.date}</div>
            
            <div className="request-name">{item.level}</div>
            <div className="request-text">{item.creator}</div>

          </div>]
   
          
  ;
};

export default RequestWaitingForApproval;
