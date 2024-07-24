import "./GenericItem.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
const GenericItem = ({ title, subTitle, style, icon }) => {
  return (
    <div className="generic-item-container" style={style}>
      <div className="generic-item-title">
        {title}
        {icon && (
          <div className="icons-container">
            {icon?.map((specIcon, index) => {
              return (
                <img
                  alt="icon"
                  key={index}
                  data-tooltip-id={specIcon?.tooltipId}
                  src={specIcon?.icon}
                />
              );
            })}
          </div>
        )}
      </div>
      {icon?.map((specIcon, index) => {
        return (
          <ReactTooltip
            key={index}
            id={specIcon?.tooltipId}
            place="bottom"
            content={specIcon?.toolTipContent}
            style={{ zIndex: 100 }}
          />
        );
      })}

      <div className="generic-item-sub-title">{subTitle}</div>
    </div>
  );
};

export default GenericItem;
