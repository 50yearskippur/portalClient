import FileController from "../Media/FileController";
import { useContext } from "react";
import { PopupContext } from "../../store/popup-context";
import DownloadBox from "../Download/DownloadBox";

const MediaAlbumItem = ({ item }) => {
  const { showPopup } = useContext(PopupContext);

  const PopupItem = () => {
    return (
      <div style={{ display: "flex" }}>
        <FileController item={item} />
        <DownloadBox item={item} />
      </div>
    );
  };

  return (
    <div className="collage-item-container">
      <FileController item={item} onClick={() => showPopup(PopupItem)} />
    </div>
  );
};

export default MediaAlbumItem;
