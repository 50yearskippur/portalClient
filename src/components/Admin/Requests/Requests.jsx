import "./Requests.css";
import React from 'react';

const Requests = ({ requests }) => {
  return (
    <div className="requests-container">
      {requests.map((request, index) => (
        <div key={`request ${index}`} className="request-container">
          <div className="request-title">{request?.title}</div>
          <div className="request-details">
            <div className="request-text">{request.date}</div>
            {request.level && (
              <div className="request-name">{request.level}</div>
            )}
            <div className="request-text">{request.creator}</div>
            {!request.level && (
              <div className="request-view-btn">צפייה בבקשה</div>
            )}
          </div>
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
