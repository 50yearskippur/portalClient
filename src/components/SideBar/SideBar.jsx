import React from "react";
import "./SideBar.css";

const SideBar = ({ numItems, ItemComponent, data, style }) => {
  return (
    <div className="image-list">
      {data.slice(0, numItems).map((image, index) => (
        <div className="image-item" key={index}>
          <ItemComponent item={image} style={style} />
        </div>
      ))}
    </div>
  );
};

export default SideBar;
