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
      {data.files.map((image, index) => (
        <div key={`masonry item ${index}`} style={{ marginBottom: "2.222vh" }}>
          <FileController
            showOnHover={true}
            key={`masonry${index}`}
            item={image}
            onClick={() =>
              showPopup(
                <MediaPopup
                  children={
                    <img
                      className="masonry-item-popup"
                      src={image.media.file}
                      alt="the full size image"
                    />
                  }
                  item={image}
                />
              )
            }
          />
        </div>
      ))}
    </div>
  );
};

export default MasonryLayout;
