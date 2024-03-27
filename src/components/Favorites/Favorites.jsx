import PageTemplate from "../PageTemplate/PageTemplate";
import FavotireEdu from "../ItemsComponents/FavoriteEdu";

const Favorits = () => {
  return (
    <PageTemplate
      ItemComponent={FavotireEdu}
      gridStyle={{
        gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr)`,
        gap: "48px",
      }}
    />
  );
};

export default Favorits;
