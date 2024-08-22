import React from 'react';
import getRequestChildren from '../../../utils/getRequestChildren';
import './WaitingList.css';

const WaitingList = ({ requests, header }) => {
  return (
    <div className="requests-container">
      {requests.map((request, index) => (
        <div key={`request-${index}`}>
          {getRequestChildren(request, header).map((child, childIndex) => (
            <React.Fragment key={`child-${index}-${childIndex}`}>
              {child}
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WaitingList;
