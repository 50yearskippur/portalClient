import "./GenericItem.css";
import bluev from "../../../assets/media/Icons/blueV.svg";
const GenericItem = ({ title, subTitle, style, icon }) => {
  return (
    <div className="generic-item-container" style={style}>
      <div
        style={{ gap: "4px", display: "flex", alignItems: "center" }}
        className="generic-item-title"
      >
        {title}
        <img src={icon} />
      </div>
      <div className="generic-item-sub-title">{subTitle}</div>
    </div>
  );
};

export default GenericItem;
