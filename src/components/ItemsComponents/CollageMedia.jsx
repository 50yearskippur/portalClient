import "./CollageMedia.css";
import FileController from "../media/FileController.jsx";
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
      <FileController item={item} />
      <div className="collage-media-side-container">
        <FileController item={item} />
        <FileController item={item} />
        <FileController item={item} />
      </div>
      <div className="collage-media-title">סיום קורס</div>
    </div>
  );
};

export default CollageMedia;
