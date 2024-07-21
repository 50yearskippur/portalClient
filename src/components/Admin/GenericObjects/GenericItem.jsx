import "./GenericItem.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
const GenericItem = ({ title, subTitle, style, icon }) => {
  return (
    <div className="generic-item-container" style={style}>
      <div
        style={{ gap: "4px", display: "flex", alignItems: "center" }}
        className="generic-item-title"
      >
        {title}
        <img src={icon?.icon} />
      </div>
      <ReactTooltip
        id={icon?.tooltipId}
        place="bottom"
        content={icon?.toolTipContent}
      />
      <div className="generic-item-sub-title">{subTitle}</div>
    </div>
  );
};

export default GenericItem;
