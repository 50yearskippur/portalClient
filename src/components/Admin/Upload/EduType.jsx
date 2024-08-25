import './UploadStage.css';
import { useContext } from 'react';
import { PopupContext } from '../../../store/popup-context';
import EduTypes from '../../EduTypes/EduTypes';
import NextBtn from './NextBtn';

const EduType = ({
  nextStage,
  eduTypesTitles,
  numberOfItemsInLine,
  pageType,
}) => {
  const { itemDetails } = useContext(PopupContext);
  const isMedia = pageType === 'תמונת סטוק / אלבום';

  return (
    <div className="stage-upload-container">
      <EduTypes
        eduTypesTitles={eduTypesTitles}
        defaultValue={isMedia ? itemDetails.pageType : itemDetails.type}
        numberOfItemsInLine={numberOfItemsInLine}
      />
      <NextBtn
        disabled={isMedia ? !itemDetails.pageType : !itemDetails.type}
        nextStage={nextStage}
      />
    </div>
  );
};

export default EduType;
