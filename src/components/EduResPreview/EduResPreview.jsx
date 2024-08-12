import "./EduResPreview.css";
import FileController from "../Media/FileController";
import point from "../../assets/media/Icons/blackPoint.svg";
import convertDateToString from "../../utils/convertDateToString";
import React from "react";

const EduResPreview = ({ item }) => {
  return (
    <div className="edu-preview-container">
      <FileController
        item={item.files}
        style={{ width: "8.6vw", borderRadius: "10px", position: "relative" , height: "100%"}}
      />
      <div className="edu-preview-deatails-container">
        <div className="edu-preview-title">
          {item?.creator.isAdmin
            ? `${item?.subSubject?.title}, ${item.type}`
            : item?.title}
        </div>
        <div className="edu-preview-deatails">
          <div className="edu-preview-info">{convertDateToString(item.timestamps)}</div>
          <img src={point} alt="black point" />
          <div className="edu-preview-info">{item?.difficultyLevel}</div>
        </div>
        {!item?.creator.isAdmin && <div className="edu-preview-creator">{item.creator.fullName}</div>}
        {item?.creator.isAdmin ? (
          <div className="edu-preview-subSubject-tag">{item.type}</div>
        ) : (
          <div
            className="edu-preview-subSubject-tag"
            style={{ backgroundColor: "#444a5a" }}
          >
            {item.type}
          </div>
        )}
      </div>
    </div>
  );
};

export default EduResPreview;