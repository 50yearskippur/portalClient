import FileController from "../Media/FileController";

const CollageItem = ({item}) => {
  return (
    <div className="collage-item-container">
      <FileController item={item} />
    </div>
  );
};

export default CollageItem;
