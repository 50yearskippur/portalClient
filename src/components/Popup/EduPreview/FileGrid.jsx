import React from "react";
import "./FileGrid.css"; // Import the CSS file
import FileController from "../../Media/FileController";

const ImageGrid = ({ edu }) => {
  const images = edu.files;
  return (
    <>
      <div className="fileGrid-container">
        <div className="cover-container">
          <div className="cover-title">תמונת קאבר</div>
          <FileController
            item={{ media: edu.cover, mediaType: "image" }}
            style={{ width: "100%", height: "100%", borderRadius: "8px" }}
          />
        </div>
        <div className="image-grid">
          {images.map((src, index) => (
            <div className="grid-item" key={index}>
              <FileController
                item={{ media: src, mediaType: "image" }}
                style={{ height: "100%" }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
