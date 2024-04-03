import "./MediaPhoto.css";
import FileController from "../media/FileController";
import rabit from "../PageTemplate/rabit.jpg";

const MediaPhoto = () => {
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
    <div className="media-photo-container">
      <FileController item={item} />
      <div className="media-photo-side-container">
        <FileController item={item} />
        <FileController item={item} />
        <FileController item={item} />
      </div>
      <div className="media-photo-title">סיום קורס</div>
    </div>
  );
};

export default MediaPhoto;
