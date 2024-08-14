import './UploadStage.css';
import { useContext } from 'react';
import { PopupContext } from '../../../store/popup-context';
import FilesUploaderArray from '../../Media/FilesUploaderArray';
import NextBtn from './NextBtn';

const MediaFiles = ({ nextStage, fileTypes }) => {
  const { itemDetails } = useContext(PopupContext);

  return (
    <div className="stage-upload-container">
      <div className="stage-files-container">
        <div className="admin-upload-file">
          <div className="stage-text">קבצי תמונות</div>
          <FilesUploaderArray
            text="צרף או גרור לתיבה קובץ"
            fileTypes={fileTypes}
            defaultFile={itemDetails.files}
          />
        </div>
      </div>
      <NextBtn
        disabled={!itemDetails.files}
        nextStage={nextStage}
        current="קבצים"
      />
    </div>
  );
};

export default MediaFiles;
