import React from 'react';
import './FileController.css';
import getHtml from './getHtml';
import watchIconHover from '../../assets/media/Icons/watchHoverIcon.png';
import downloadIconHover from '../../assets/media/Icons/downloadHoverIcon.png';
import { download } from '../../utils/download';

const FileController = ({
  item,
  style = {},
  onClick,
  gradientStyle = {},
  showOnHover = false,
  showCover = true,
}) => {
  const display = item?.cover && showCover ? item.cover.file : item.media.file;
  const fileType = item.cover && showCover ? 'image' : item?.media?.MimeType;

  return (
    <div
      className="file-container"
      style={style}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {getHtml(display, fileType, style)}
      <div className="gradient" style={gradientStyle} />
      {showOnHover && (
        <div className="file-overlay">
          <img
            onClick={() => download(item.media)}
            style={{ marginLeft: '1.778vw' }}
            src={downloadIconHover}
            alt="download icon"
          />
          <img src={watchIconHover} alt="eye icon" />
        </div>
      )}
    </div>
  );
};

export default FileController;
