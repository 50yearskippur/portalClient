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
        <div style={{ marginBottom: "2.222vh" }}>
          <FileController
            showOnHover={true}
            key={`masonry${index}`}
            item={item}
            onClick={() =>
              showPopup(
                <MediaPopup
                  children={
                    <img
                      className="masonry-item-popup"
                      src={item.media}
                      alt="the full size item"
                    />
                  }
                  item={item}
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
