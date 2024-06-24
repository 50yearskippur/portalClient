import "./PageTemplate.css";

const PageTemplate = ({
  gapSize,
  ItemComponent,
  data,
  numberOfItemsInLine,
}) => {
  const gridStyle = {
    gridTemplateColumns: `repeat(auto-fill, minmax(${
      (100 - (numberOfItemsInLine - 1) * gapSize) / numberOfItemsInLine
    }%, 1fr))`,
    columnGap: `${gapSize}%`,
  };

  return (
    <div className="page-template" style={gridStyle}>
      {data.map((item, index) => {
        return <ItemComponent item={item} key={`item${index}`} />;
      })}
    </div>
  );
};

export default PageTemplate;
