import './uploadStage.css';
import { useContext } from 'react';
import { PopupContext } from '../../../store/popup-context';
import FileUploader from '../../Media/FileUploader';
import NextBtn from './NextBtn';
const Files = ({ nextStage, fileTypes }) => {
  const { itemDetails } = useContext(PopupContext);

  return (
    <div className="stage-upload-container">
      <div className="stage-files-container">
        <div className="admin-upload-file">
          <div className="stage-text">קובץ תוכן</div>
          <FileUploader
            text="צרף או גרור לתיבה קובץ"
            fileTypes={fileTypes}
            defaultFile={itemDetails.files}
          />
        </div>
      </div>
      <NextBtn
        disabled={!itemDetails.files.media}
        nextStage={nextStage}
        current="קבצים"
      />
    </div>
  );
};

export default Files;
