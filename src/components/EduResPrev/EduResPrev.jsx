import './EduResPrev.css';
import FileController from '../Media/FileController';
import point from '../../assets/media/Icons/blackPoint.svg';
import convertDateToString from '../../utils/convertDateToString';
import React from 'react';

const EduResPrev = ({ item }) => {
  return (
    <div className="edu-prev-container">
      <FileController
        item={item}
        style={{ width: '8.6vw', borderRadius: '10px' }}
      />
      <div className="edu-prev-deatails-container">
        <div className="edu-prev-title">
          {item?.ploadByArtech
            ? `${item?.subSubject?.title}, ${item.type}`
            : item?.title}
        </div>
        <div className="edu-prev-deatails">
          <div className="edu-prev-info">
            {convertDateToString(item.createdAt)}
          </div>
          <img src={point} alt="black point" />
          <div className="edu-prev-info">{item?.level}</div>
        </div>
        {!item?.uploadByArtech && <div className="edu-prev-creator">עמר</div>}
        {item?.ploadByArtech ? (
          <div className="edu-prev-subSubject-tag">4 סרטונים</div>
        ) : (
          <div
            className="edu-prev-subSubject-tag"
            style={{ backgroundColor: '#444a5a' }}
          >
            PDF
          </div>
        )}
      </div>
    </div>
  );
};

export default EduResPrev;
