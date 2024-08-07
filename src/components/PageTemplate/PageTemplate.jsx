import React from "react";
import "./PageTemplate.css";

const PageTemplate = ({
  style = {},
  gapRowSizeInPx,
  gapColumnSizeInPercentage,
  ItemComponent,
  data,
  numberOfItemsInLine,
}) => {
  const gridStyle = {
    gridTemplateColumns: `repeat(auto-fill, minmax(${
      (100 - (numberOfItemsInLine - 1) * gapColumnSizeInPercentage) /
      numberOfItemsInLine
    }%, 1fr))`,
    rowGap: `${gapRowSizeInPx}px`,
    columnGap: `${gapColumnSizeInPercentage}%`,
    ...style,
  };

  return (
    <div className="page-template" style={gridStyle}>
      {data?.map((item, index) => {
        return <ItemComponent item={item} key={`item${index}`} />;
      })}
    </div>
  );
};

export default PageTemplate;
