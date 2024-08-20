import './AddTagPopup.css';
import Search from '../../Search/Search';
import Button from '../../Button/Button';
import handlePropagation from '../../../utils/handlePropagation';
import { useContext } from 'react';
import { PopupContext } from '../../../store/popup-context';

//TODO: consider changing the prop name
const MediaPreview = ({ edu }) => {
  const handleAddTag = () => {
    //add to DB
  };

  const { hidePopup } = useContext(PopupContext);

  return (
    <div>
      <div
        className="popup-stage-white-container"
        onClick={(e) => handlePropagation(e)}
      >
        {/* {edu.name} */}
        <div className="popup-title">תתי נושא רלוונטים</div>
        <Search
          placeholder={'חיפוש תתי נושא'}
          style={{
            height: '42px',
            width: '16.7vw',
            borderRadius: '4px',
            width: '460px',
            height: '50px',
          }}
        />
        <div className="popup-buttons-container">
          <Button
            text="שליחת בקשה"
            style={{ width: '150px', height: '48px' }}
            onClick={handleAddTag}
          />
          <Button
            text="ביטול"
            style={{ width: '150px', height: '48px' }}
            isWhiteButton={true}
            onClick={hidePopup}
          />
        </div>
      </div>
    </div>
  );
};

export default MediaPreview;
