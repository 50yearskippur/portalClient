import "./GalleryPage.css";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import StockPhoto from "../components/ItemsComponents/StockPhoto";
import MediaPhoto from "../components/ItemsComponents/MediaPhoto";

const GalleryPage = () => {
  return (
    <div className="gallery-page-container">
      <div className="gallery-page-header">תמונת סטוק</div>
      <PageTemplate
        ItemComponent={StockPhoto}
        gridStyle={{
          gridTemplateColumns: `repeat(auto-fill, minmax(175px, 1fr)`,
          gap: "34px",
        }}
      />

      <div className="gallery-page-header">מדיה</div>
      <PageTemplate
        ItemComponent={MediaPhoto}
        gridStyle={{
          gridTemplateColumns: `repeat(auto-fill, minmax(225px, 1fr)`,
          gap: "40px",
        }}
      />
    </div>
  );
};

export default GalleryPage;
