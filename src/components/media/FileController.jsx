import "./FileController.css";
import React, { useState } from "react";
import getHtml from "./getHtml";

const FileController = ({
  item,
  style = {},
  onClick = () => {},
  gradientStyle = {},
}) => {
  const [display, setDisplay] = useState(item?.cover ? item.cover : item.media);
  const [fileType, setFileType] = useState(
    item.cover ? "image" : item.mediaType
  );
  return (
    <div
      className="file-container"
      style={style}
      onClick={() => {
        onClick();
        setDisplay(item.media);
        setFileType(item.mediaType);
      }}
    >
      {getHtml(display, fileType, style)}
      <div className="gradient" style={gradientStyle} />
    </div>
  );
};

export default FileController;
