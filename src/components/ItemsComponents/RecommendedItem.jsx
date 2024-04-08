import React from "react";
import "./RecommendedItem.css";

const RecommendedItem = ({ item, style }) => {
  console.log(style);
  return (
    <div className="recommended-item">
      <h1 className="recommended-item-title">{item.title}</h1>
      <img
        className="recommended-item-media"
        style={style}
        src={item.media}
        alt={item.title}
      />
    </div>
  );
};
export default RecommendedItem;
