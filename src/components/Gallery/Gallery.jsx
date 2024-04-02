import PageTemplate from "../PageTemplate/PageTemplate";

const Gallery = () => {
  return (
    <PageTemplate
      ItemComponent={ItemComponent}
      gridStyle={{
        gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr)`,
        gap: "48px",
      }}
    />
  );
};

export default Gallery;
