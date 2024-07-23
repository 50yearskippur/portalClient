import React from "react";
import "./MasonryLayout.css";
import FileController from "../Media/FileController";
import { useContext } from "react";
import { PopupContext } from "../../store/popup-context";
import MediaPopup from "../Popup/General/MediaPopup";

const MasonryLayout = ({ data }) => {
  const { showPopup } = useContext(PopupContext);
  return (
    <div className="masonry-container">
      {data.map((item, index) => (
        <FileController
          key={`masonry${index}`}
          item={item}
          style={{ marginBottom: "12px" }}
          onClick={() => showPopup(<MediaPopup item={item} />)}
        />
      ))}
      .
    </div>
  );
};

export default MasonryLayout;
