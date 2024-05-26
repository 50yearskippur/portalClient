import "./FileController.css";
import { useState } from "react";
import getHtml from "./getHtml";

const FileController = ({
  item,
  style = {},
  onClick = () => {},
  showGradient = true,
}) => {
  const [display, setDisplay] = useState(item.cover ? item.cover : item.media);
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
      {showGradient && <div className="gradient" />}
    </div>
  );
};

export default FileController;
