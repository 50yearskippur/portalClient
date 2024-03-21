import "./FileController.css";
import {useState} from "react";

// import useBuffer from "../../store/useBuffer";

const FileController = ({item, style, onClick = () => {}}) => {
  // const [fileId, setFileId] = useState(item.cover ? item.cover : item.media);
  const [display, setDisplay] = useState(item.cover);
  // const {media} = useBuffer({fileId});

  // useEffect(() => {
  //   setDisplay(getHtmlFile(media.signedUrl, media.mimeType));
  // }, [media]);

  return (
    <div
      className="file-container"
      onClick={() => {
        onClick();
        // setFileId(item.media);
        setDisplay(item.media);
      }}
    >
      <img className="file" src={display} style={style} alt="example" />
      {/* {display} */}
    </div>
  );
};

export default FileController;
