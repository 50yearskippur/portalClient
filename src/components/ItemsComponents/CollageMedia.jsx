import React from "react";
import "./CollageMedia.css";
import FileController from "../Media/FileController.jsx";
import rabit from "../../assets/img/rabit.jpg";
import usa from "../../assets/img/usa.png";
import robot from "../../assets/img/robot.jpg";
import { useNavigate } from "react-router-dom";

const CollageMedia = () => {
  const navigate = useNavigate();
  const items = [
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: rabit,
      mediaType: "image",
    },
    {
      title: "קיפוד",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: usa,
      mediaType: "image",
    },
    {
      title: "קיפוד",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: robot,
      mediaType: "image",
    },
  ];
  return (
    <div
      className="collage-media-container"
      onClick={() => navigate("/mediaAlbum")}
    >
      <div className="collage-media-image-container">
        <FileController
          item={items[0]}
          style={{ borderRadius: "0 10px 10px 0", height: "36vh" }}
        />
        <div className="collage-media-side-container">
          <FileController
            item={items[1]}
            style={{ height: "17.95vh", borderRadius: "10px 0 0 0" }}
          />
          <div className="collage-media-overlay-container">
            <FileController
              item={items[2]}
              style={{ height: "17.95vh", borderRadius: "0 0 0 10px" }}
              gradientStyle={{ background: "#18132B99", height: "100%" }}
            />
            <div className="collage-media-overlay">{items.length - 2}+</div>
          </div>
        </div>
      </div>
      <div className="collage-media-title">סיום קורס לדוגמה</div>
    </div>
  );
};

export default CollageMedia;
