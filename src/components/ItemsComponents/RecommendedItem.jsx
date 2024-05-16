import React from "react";
import "./RecommendedItem.css";
import FileController from "../Media/FileController";
import { useNavigate } from "react-router-dom";

const RecommendedItem = ({ item, style }) => {
  console.log(style);
  const navigate = useNavigate();
  return (
    // <div className="recommended-item" style={style}>
      /* <div className="recommended-item-title">{item.title}</div> */
      <FileController
        item={item}
        style={style}
        onClick={() => navigate("/subSubject")}
      />
    // </div>
  );
};
export default RecommendedItem;
