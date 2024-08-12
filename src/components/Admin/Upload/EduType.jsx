import './UploadStage.css';
import { useContext } from 'react';
import { PopupContext } from '../../../store/popup-context';
import EduTypes from '../../EduTypes/EduTypes';
import NextBtn from './NextBtn';

const EduType = ({ nextStage, eduTypesTitles, numberOfItemsInLine }) => {
  const { itemDetails } = useContext(PopupContext);
  return (
    <div className="stage-upload-container">
      <EduTypes
        eduTypesTitles={eduTypesTitles}
        defaultValue={itemDetails.type}
        numberOfItemsInLine={numberOfItemsInLine}
      />
      <NextBtn disabled={!itemDetails.type} nextStage={nextStage} />
    </div>
  );
};

export default EduType;
