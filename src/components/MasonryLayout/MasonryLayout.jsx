import "./MasonryLayout.css";
import FileController from "../Media/FileController";
import { useContext } from "react";
import { PopupContext } from "../../store/popup-context";
import MediaPopup from "../Popup/MediaPopup";

const MasonryLayout = ({ data }) => {
  const { showPopup } = useContext(PopupContext);
  return (
    <div className="masonry-container">
      {data.map((item, index) => (
        // <div className="masonry-item">
        <FileController
          key={`masonry${index}`}
          item={item}
          style={{ marginBottom: "10px" }}
          onClick={() => showPopup(<MediaPopup item={item} />)}
        />
        /* </div> */
      ))}
      .
    </div>
  );
};

export default MasonryLayout;
