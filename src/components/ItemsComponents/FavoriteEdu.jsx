import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FavoriteEdu.css';
import FileController from '../Media/FileController';
import fullHeart from '../../assets/media/Icons/fullHeart.svg';
import emptyHeart from '../../assets/media/Icons/emptyHeart.svg';
import handlePropagation from '../../utils/handlePropagation';

const FavoriteEdu = ({ item, defaultHeart = true }) => {
  const [activeHeart, setActiveHeart] = useState(defaultHeart);
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
    <div className="favorite-edu-container" onClick={handleClick}>
      <FileController
        gradientStyle={{ height: '35%', top: '65%' }}
        item={item.files}
        style={{ borderRadius: '8.647px', height: '25.4vh' }}
      />
      <div className="favorite-edu-top-gradient" />
      <div className="favorite-type-container">
        <div className="favorite-type">{item.type}</div>
        <div className="favorite-type">{item.subSubject.title}</div>
      </div>
      <div className="favorite-icons-container">
        <div
          className="favorite-icon-container"
          onClick={(e) => {
            handlePropagation(e);
            setActiveHeart((prev) => !prev);
          }}
        >
          <img
            src={activeHeart ? fullHeart : emptyHeart}
            alt="heart icon"
            className="favorite-heart"
          />
        </div>
      </div>
      <div className="favorite-edu-title">{item.title}</div>
    </div>
  );
};

export default FavoriteEdu;
