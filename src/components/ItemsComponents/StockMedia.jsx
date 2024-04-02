import "./StockMedia.css";
import FileController from "../Media/FileController";

const StockMedia = ({item}) => {
  return (
    <div className="stock-media-container">
      <FileController item={item} />
      <div className="stock-media-overlay">{item.title}</div>
    </div>
  );
};

export default StockMedia;
