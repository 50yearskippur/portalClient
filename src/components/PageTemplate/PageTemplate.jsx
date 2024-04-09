import "./PageTemplate.css";

const PageTemplate = ({gridStyle, ItemComponent, data}) => {
  return (
    <div className="page-template" style={gridStyle}>
      {data.map((item, index) => {
        return <ItemComponent item={item} key={`item${index}`} />;
      })}
    </div>
  );
};

export default PageTemplate;
