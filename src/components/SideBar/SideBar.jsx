import React from "react";
import { useNavigate } from "react-router-dom";
import "./SideBar.css";

const SideBar = ({ numItems, ItemComponent, data, style, startFrom }) => {
  const navigate = useNavigate();

  return (
    <div className="image-list" style={style}>
      {data.slice(startFrom, numItems + startFrom).map((item, index) => (
        <div className="image-item" key={index} onClick={() => navigate("/subSubject", { state: { item } })}>
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
