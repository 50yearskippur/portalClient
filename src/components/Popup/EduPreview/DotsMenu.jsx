import './DotsMenu.css';
import { useState } from 'react';
import whiteDot from '../../../assets/media/Icons/whiteDot.svg';
import redTrash from '../../../assets/media/Icons/redTrash.svg';
import back from '../../../assets/media/Icons/back.svg';

const DotsMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        className="dots-container"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {Array.from({ length: 3 }).map(() => (
          <div className="dot" />
        ))}
      </div>
      {isMenuOpen && (
        <div className="media-setting-popup">
          <div className="media-setting-row">
            <img src={back} alt="back" />
            <div className="media-setting-rotation">סיבוב תמונה</div>
          </div>
          <div className="media-setting-row">
            <img src={redTrash} alt="trash" />
            <div className="media-setting-delete">מחיקה</div>
          </div>
        </div>
      )}
    </>
  );
};

export default DotsMenu;
