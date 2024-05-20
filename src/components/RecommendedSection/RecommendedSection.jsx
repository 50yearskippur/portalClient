import SideBar from "../SideBar/SideBar";
import RecommendedItem from "../ItemsComponents/RecommendedItem";
import "./RecommendedSection.css";

const RecommendedSection = ({ data }) => {
  return (
    <div className="recommended-section-wrapper">
      <div className="recommendations-per-unit">
        <SideBar
          numItems={2}
          startFrom={1}
          ItemComponent={RecommendedItem}
          data={data}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <SideBar
          numItems={2}
          startFrom={3}
          ItemComponent={RecommendedItem}
          data={data}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="main-recommendation">
        <RecommendedItem item={data[0]} />
      </div>
    </div>
  );
};

export default RecommendedSection;
