import React from "react";
import "./SideBar.css";

const SideBar = ({ numItems, height, ItemComponent, data }) => {
  return (
    <div className="image-list">
      {data.slice(0, numItems).map((image, index) => (
        <div className="image-item" key={index}>
          <ItemComponent item={image} style={{ height: height }} />
        </div>
      ))}
    </div>
  );
};

export default SideBar;
