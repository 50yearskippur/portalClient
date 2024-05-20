import React from "react";
import "./SideBar.css";

const SideBar = ({ numItems, ItemComponent, data, style, startFrom }) => {
  return (
    <div className="image-list" style={style}>
      {data.slice(startFrom, numItems + startFrom).map((item, index) => (
        <div className="image-item" key={index}>
          <ItemComponent
            item={item}
            style={{ position: "relative", objectFit: "cover", height: "100%" }}
          />
        </div>
      ))}
    </div>
  );
};

export default SideBar;
