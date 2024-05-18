import React from "react";
import "./SideBar.css";

const SideBar = ({ numItems, ItemComponent, data, style }) => {
  return (
    <div className="image-list" style={style}>
      {data.slice(0, numItems).map((item, index) => (
        <div className="image-item" key={index}>
          <img src={item.media} style={{ objectFit: "cover" }} />
          {/* <ItemComponent item={item} /> */}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
