import React from "react";
import "./SideBar.css";

const SideBar = ({ numItems, ItemComponent, data, style, startFrom }) => {
  return (
    <div className="image-list" style={style}>
      {data.slice(startFrom, numItems + startFrom).map((item, index) => (
        <div className="image-item" key={index}>
          {/* <img src={item.media} style={{ objectFit: "cover" }} /> */}
          <div>{item.title}</div>
          {/* <ItemComponent
            item={item}
            style={{ position: "relative", objectFit: "cover" }}
          /> */}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
