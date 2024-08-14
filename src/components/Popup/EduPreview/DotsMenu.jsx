import './DotsMenu.css';
import { useState } from 'react';
import redTrash from '../../../assets/media/Icons/redTrash.svg';
import back from '../../../assets/media/Icons/back.svg';

const DotsMenu = ({ handleDeleteImage, handleRotateImage, image }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuHover = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className="dots-container"
        onMouseEnter={() => handleMenuHover(image)}
      >
        {Array.from({ length: 3 }).map(() => (
          <div className="dot" />
        ))}
      </div>
      {isMenuOpen && (
        <div className="media-setting-popup" onMouseLeave={handleMenuHover}>
          <div
            className="media-setting-row"
            onClick={() => handleRotateImage(image)}
          >
            <img src={back} alt="back" />
            <div className="media-setting-rotation">סיבוב תמונה</div>
          </div>
          <div
            className="media-setting-row"
            onClick={() => handleDeleteImage(image)}
          >
            <img src={redTrash} alt="trash" />
            <div className="media-setting-delete">מחיקה</div>
          </div>
        </div>
      )}
    </>
  );
};

export default DotsMenu;
