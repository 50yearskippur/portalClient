import './Requests.css';
import getRequestChildren from '../../../utils/getRequestChildren';
import React from 'react';

const Requests = ({ requests, header }) => {
  return (
    <div className="waitingLists-container">
      {requests.map((request, index) => (
        <div key={index} className="request-container">
          {getRequestChildren(request, header).map((child) => child)}
        </div>
      ))}
    </div>
  );
};

export default Requests;
