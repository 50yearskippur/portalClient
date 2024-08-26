import './AddTagPopup.css';
import Button from '../../Button/Button';
import handlePropagation from '../../../utils/handlePropagation';
import { useContext } from 'react';
import { PopupContext } from '../../../store/popup-context';
import SearchDropdown from '../../../components/Search/SearchDropdown';

//TODO: consider changing the prop name
const MediaPreview = ({ edu }) => {
  const handleAddTag = () => {
    //add to DB
  };

  const { hidePopup } = useContext(PopupContext);

  //temp dropdown options
  const dropdownOptions = [
    'מבואות מודיעין',
    'מבואות קרב',
    'טכנולוגיה וסייבר',
    'שפה',
    'מדעי המחשב',
    'קיפודים',
    'חתולים',
    'כלבלבים',
    'רעיונות לארוחות',
    'מתנות',
  ];

  return (
    <div>
      <div
        className="popup-stage-white-container"
        onClick={(e) => handlePropagation(e)}
      >
        {/* {edu.name} */}
        <div className="popup-title">קורסים או יחידות רלוונטים</div>
        <SearchDropdown
          options={dropdownOptions}
          placeholder="חיפוש קורסים"
          inputStyle={{ height: '70px' }}
        />
        <div className="popup-buttons-container">
          <Button
            text="שליחת בקשה"
            style={{ width: '150px', height: '48px' }}
            onClick={handleAddTag}
          />
          <Button
            text="ביטול"
            style={{ width: '150px', height: '48px', borderStyle: 'none' }}
            isWhiteButton={true}
            onClick={hidePopup}
          />
        </div>
      </div>
    </div>
  );
};

export default MediaPreview;
