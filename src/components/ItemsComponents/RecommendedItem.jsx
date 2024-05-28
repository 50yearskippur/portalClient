import React from "react";
import "./RecommendedItem.css";
import FileController from "../Media/FileController";
import { useNavigate } from "react-router-dom";

const RecommendedItem = ({
  item,
  style = { width: "100%", height: "100%" },
}) => {
  const navigate = useNavigate();

  return (
    <div className="recommended-item" style={style}>
      <FileController
        item={item}
        style={{ ...style, borderRadius: "10px" }}
        onClick={() => navigate("/subSubject")}
        gradientStyle={{ height: "65%", top: "35%" }}
      />
      <p className="recommended-item-title">{item.title}</p>
      <p className="recommended-item-subsubject">{item.subSubject.title}</p>
    </div>
  );
};
export default RecommendedItem;
