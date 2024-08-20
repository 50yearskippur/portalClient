import './AddTagPopup.css';
import Search from '../../Search/Search';

//TODO: consider changing the prop name
const MediaPreview = ({ edu }) => {
  return (
    <div>
      <div className="popup-stage-white-container">
        {/* {edu.name} */}
        <div className="popup-title">תתי נושא רלוונטים</div>
        <Search
          placeholder={'חיפוש תתי נושא'}
          style={{
            height: '42px',
            width: '16.7vw',
            borderRadius: '4px',
            width: '460px',
            height: '40px',
          }}
        />
      </div>
    </div>
  );
};

export default MediaPreview;
