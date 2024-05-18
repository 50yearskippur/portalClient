import SideBar from "../../SideBar/SideBar";
import RecommendedItem from "../RecommendedItem";
import "./RecommendedSection.css";

const RecommendedSection = ({ data }) => {
  return (
    <div className="recommended-section-wrapper">
      <div className="main-recommendation">
        <RecommendedItem item={data[0]} />
      </div>
      <div className="recommendations-per-unit">
        <SideBar
          numItems={2}
          ItemComponent={RecommendedItem}
          data={data}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default RecommendedSection;
