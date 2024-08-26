import React from 'react';
import './RecommendedItem.css';
import FileController from '../Media/FileController';
import { useNavigate } from 'react-router-dom';

const RecommendedItem = ({
  item,
  style = { width: '100%', height: '100%' },
}) => {
  const navigate = useNavigate();

  const getSubSubject = (subSubjectId) => {
    //return subSubject by id from server
    //delete in production

    return subSubjectId;
  };

  const handleClick = () => {
    const subSubject = getSubSubject(item.subSubject);
    navigate('/subSubject', {
      state: { item, subSubject },
    });
  };

  return (
    <div className="recommended-item" style={style} onClick={handleClick}>
      <FileController
        item={item.files}
        style={{ ...style, borderRadius: '10px' }}
        gradientStyle={{ height: '65%', top: '35%' }}
      />
      <p className="recommended-item-title">{item.title}</p>
      <p className="recommended-item-subsubject">{item.subSubject.title}</p>
    </div>
  );
};
export default RecommendedItem;
