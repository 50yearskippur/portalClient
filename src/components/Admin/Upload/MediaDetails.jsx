import { useContext } from 'react';
import { PopupContext } from '../../../store/popup-context';
import NextBtn from './NextBtn';

const MediaDetails = ({ nextStage }) => {
  const { itemDetails, saveDetails } = useContext(PopupContext);

  return (
    <div className="stage-upload-container">
      <div className="stage-row-container">
        <div className="stage-input-container">
          <div className="stage-text">שם</div>
          <input
            className="stage-input"
            type="text"
            defaultValue={itemDetails.title}
            onChange={(e) => saveDetails({ title: e.target.value })}
          />
        </div>
      </div>
      <NextBtn
        disabled={!itemDetails.title}
        nextStage={nextStage}
        current="פרטים"
      />
    </div>
  );
};

export default MediaDetails;
