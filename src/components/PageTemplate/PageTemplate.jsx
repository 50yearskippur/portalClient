import "./PageTemplate.css";

const PageTemplate = ({
  gapSize,
  ItemComponent,
  data,
  numberOfItemsInLine,
}) => {
  console.log(gapSize);

  const gridStyle = {
    gridTemplateColumns: `repeat(auto-fill, minmax(${
      (100 - (numberOfItemsInLine - 1) * gapSize) / numberOfItemsInLine
    }%, 1fr))`,
    gap: `${gapSize}%`,
  };

  console.log((numberOfItemsInLine - 1) * gapSize);
  return (
    <div className="page-template" style={gridStyle}>
      {data.map((item, index) => {
        return <ItemComponent item={item} key={`item${index}`} />;
      })}
    </div>
  );
};

export default PageTemplate;
