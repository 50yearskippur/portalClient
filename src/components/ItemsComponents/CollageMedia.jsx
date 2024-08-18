import React from "react";
import "./CollageMedia.css";
import FileController from "../Media/FileController.jsx";
import { useNavigate } from "react-router-dom";

const CollageMedia = ({item}) => {
  const navigate = useNavigate();
  const images = item.files;

  return (
    <div
      className="collage-media-container"
      onClick={() => navigate("/mediaAlbum", { state: { album: item } })}
    >
      <div className="collage-media-image-container">
        <FileController
          item={images[0]}
          style={{ borderRadius: "0 10px 10px 0", height: "36vh" }}
        />
        <div className="collage-media-side-container">
          <FileController
            item={images[1]}
            style={{ height: "17.95vh", borderRadius: "10px 0 0 0" }}
          />
          <div className="collage-media-overlay-container">
            <FileController
              item={images[2]}
              style={{ height: "17.95vh", borderRadius: "0 0 0 10px" }}
              gradientStyle={{ background: "#18132B99", height: "100%" }}
            />
            <div className="collage-media-overlay">{images.length - 2}+</div>
          </div>
        </div>
      </div>
      <div className="collage-media-title">{item.title}</div>
    </div>
  );
};

export default CollageMedia;
