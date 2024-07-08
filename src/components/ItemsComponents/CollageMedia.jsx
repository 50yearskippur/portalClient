import React from 'react';
import "./CollageMedia.css";
import FileController from "../Media/FileController.jsx";
import rabit from "../../assets/img/rabit.jpg";
import { useNavigate } from "react-router-dom";

const CollageMedia = () => {
  const navigate = useNavigate();
  const item = {
    title: "ארנב",
    type: "חיה",
    subSubject: {
      title: "יונקים",
    },
    media: rabit,
    mediaType: "image",
  };
  return (
    <div
      className="collage-media-container"
      onClick={() => navigate("/mediaAlbum")}
    >
      <div className="collage-media-image-container">
        <FileController
          item={item}
          style={{ borderRadius: "0 10px 10px 0", height: "36vh" }}
        />
        <div className="collage-media-side-container">
          <FileController
            item={item}
            style={{ height: "18vh", borderRadius: "10px 0 0 0" }}
          />
          <div className="collage-media-overlay-container">
            <FileController
              item={item}
              style={{ height: "18vh", borderRadius: "0 0 0 10px" }}
              gradientStyle={{ background: "#18132B99", height: "100%" }}
            />
            <div className="collage-media-overlay">3+</div>
          </div>
        </div>
      </div>
      <div className="collage-media-title">סיום קורס מט"ל</div>
    </div>
  );
};

export default CollageMedia;
