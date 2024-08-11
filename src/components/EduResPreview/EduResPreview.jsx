import "./EduResPreview.css";
import FileController from "../Media/FileController";
import point from "../../assets/media/Icons/blackPoint.svg";
import convertDateToString from "../../utils/convertDateToString";
import React from "react";

const EduResPreview = ({ item }) => {
  return (
    <div className="edu-prev-container">
      <FileController
        item={item.files}
        style={{ width: "8.6vw", borderRadius: "10px" }}
      />
      <div className="edu-prev-deatails-container">
        <div className="edu-prev-title">
          {item?.creator.isAdmin
            ? `${item?.subSubject?.title}, ${item.type}`
            : item?.title}
        </div>
        <div className="edu-prev-deatails">
          <div className="edu-prev-info">{convertDateToString(item.timestamps)}</div>
          <img src={point} alt="black point" />
          <div className="edu-prev-info">{item?.difficultyLevel}</div>
        </div>
        {!item?.creator.isAdmin && <div className="edu-prev-creator">{item.creator.fullName}</div>}
        {item?.creator.isAdmin ? (
          <div className="edu-prev-subSubject-tag">{item.type}</div>
        ) : (
          <div
            className="edu-prev-subSubject-tag"
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