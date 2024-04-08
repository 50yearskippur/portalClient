import React from "react";
import "./RecommendedItem.css";

const RecommendedItem = ({ item, style }) => {
  return (
    <div>
      <img src={item.media} alt={item.title} style={style} />
    </div>
  );
};
export default RecommendedItem;
