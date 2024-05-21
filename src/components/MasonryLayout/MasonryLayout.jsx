import "./MasonryLayout.css";
import FileController from "../Media/FileController";

const MasonryLayout = ({ data }) => {
  return (
    <div className="masonry-container">
      {data.map((item, index) => (
        <FileController key={`masonry${index}`} item={item} style={{ marginBottom: "24px" }} />
      ))}
      .
    </div>
  );
};

export default MasonryLayout;
