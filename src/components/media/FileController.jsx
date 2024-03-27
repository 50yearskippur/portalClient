import "./FileController.css";
import {useState} from "react";
import getHtml from "./getHtml";

const FileController = ({item, style = {}, onClick = () => {}}) => {
  const [display, setDisplay] = useState(item.cover ? item.cover : item.media);
  const [fileType, setFileType] = useState(
    item.cover ? "image" : item.medidaType
  );

  return (
    <div
      className="file-container"
      onClick={() => {
        onClick();
        setDisplay(item.media);
        setFileType(item.medidaType);
      }}
    >
      {getHtml(display, fileType, style)}
    </div>
  );
};

export default FileController;
