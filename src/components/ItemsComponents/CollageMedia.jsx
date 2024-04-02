import "./CollageMedia.css";
import FileController from "../Media/FileController";
import rabit from "../PageTemplate/rabit.jpg";

const CollageMedia = () => {
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
    <div className="collage-media-container">
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
