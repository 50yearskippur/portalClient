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
        <FileController item={item} showGradient={false} />
        <div className="collage-media-side-container">
          <FileController
            item={item}
            showGradient={false}
            style={{ height: "18vh" }}
          />
          <div className="collage-media-overlay-container">
            <FileController
              showGradient={false}
              item={item}
              style={{ height: "18vh" }}
            />
            <div className="collage-media-overlay">3+</div>
            <div className="collage-media-overlay-gradient"></div>
          </div>
        </div>
      </div>
      <div className="collage-media-title">סיום קורס מט"ל</div>
    </div>
  );
};

export default CollageMedia;
