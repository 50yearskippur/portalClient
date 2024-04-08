import React from "react";

const SideBar = ({ numItems, height, ItemComponent, data }) => {
  const itemHeight = `${height / numItems}vh`;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${numItems}, 1fr)`,
      }}
    >
      {data.slice(0, numItems).map((item, index) => (
        <ItemComponent key={index} item={item} />
      ))}
    </div>
  );
};

export default SideBar;
