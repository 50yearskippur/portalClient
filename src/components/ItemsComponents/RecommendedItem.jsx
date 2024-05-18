import React from "react";
import "./RecommendedItem.css";
import FileController from "../Media/FileController";
import { useNavigate } from "react-router-dom";

const RecommendedItem = ({
  item,
  style = { width: "100%", height: "100%" },
}) => {
  const navigate = useNavigate();
  console.log(style);

  return (
    <div className="recommended-item" style={style}>
      <FileController
        item={item}
        style={{ ...style, borderRadius: "10px" }}
        onClick={() => navigate("/subSubject")}
      />
    </div>
  );
};
export default RecommendedItem;
