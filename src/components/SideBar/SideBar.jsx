import React from "react";

const SideBar = ({ data, numItems, width, height, ItemComponent }) => {
  const gapSize = Math.floor(height / numItems);

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, minmax(${Math.floor(
      width / numItems
    )}px, 1fr))`,
    gridGap: `${gapSize}px`,
    height,
    width,
  };

  return (
    <div style={containerStyle}>
      {data.slice(-numItems).map((item, index) => {
        return <ItemComponent item={item} key={`item${index}`} />;
      })}
    </div>
  );
};

export default SideBar;
