import React from "react";

const SideBar = ({ numItems, height, ItemComponent, data }) => {
  const itemHeight = `${height / numItems}vh`;
  console.log(itemHeight);
  console.log(height);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${numItems}, 1fr)`,
        // gridGap: "5px", // Adjust this value to change the space between the items
        // height: `${height}vh`,
      }}
    >
      {data.slice(0, numItems).map((item, index) => (
        <ItemComponent key={index} item={item} />
      ))}
    </div>
  );
};

export default SideBar;
