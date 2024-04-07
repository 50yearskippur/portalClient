import FileController from "../Media/FileController";

const MediaAlbumItem = ({item}) => {
  return (
    <div className="collage-item-container">
      <FileController item={item} />
    </div>
  );
};

export default MediaAlbumItem;
