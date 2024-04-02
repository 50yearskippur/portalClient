import "./GalleryPage.css";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import StockMedia from "../components/ItemsComponents/StockMedia";
import CollageMedia from "../components/ItemsComponents/CollageMedia";

const GalleryPage = () => {
  return (
    <div className="gallery-page-container">
      <div className="gallery-page-header">תמונת סטוק</div>
      <PageTemplate
        ItemComponent={StockMedia}
        gridStyle={{
          gridTemplateColumns: `repeat(auto-fill, minmax(175px, 1fr)`,
          gap: "34px",
        }}
      />

      <div className="gallery-page-header">מדיה</div>
      <PageTemplate
        ItemComponent={CollageMedia}
        gridStyle={{
          gridTemplateColumns: `repeat(auto-fill, minmax(225px, 1fr)`,
          gap: "40px",
        }}
      />
    </div>
  );
};

export default GalleryPage;
