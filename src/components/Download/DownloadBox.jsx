import "./DownloadBox.css";
import downloadPdf from "../../utils/downloadPdf ";
import downloadBox from "../../assets/media/Icons/downloadBoxIcon.svg";
import React from 'react';

const DownloadBox = ({ item, style }) => {
  return (
    <img
      onClick={() => downloadPdf(item)}
      style={style}
      className="download-icon-box"
      src={downloadBox}
      alt="download icon"
    />
  );
};

export default DownloadBox;
