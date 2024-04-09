import React from "react";
import "./RecommendedItem.css";

const RecommendedItem = ({ item, style }) => {
  return (
    <div className="recommended-item">
      <div className="recommended-item-title">{item.title}</div>
      <img src={item.media} alt={item.title} style={style} />
    </div>
  );
};
export default RecommendedItem;
