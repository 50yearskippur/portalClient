import React from "react";
import "./GenericItem.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

const GenericItem = ({ title, subTitle, style, icon }) => {
  const renderIcons = () => {
    if (!icon) return null;

    return (
      <div className="icons-container">
        {icon.map((specIcon, index) => (
          <img
            key={index}
            alt="icon"
            data-tooltip-id={specIcon.tooltipId}
            src={specIcon.icon}
          />
        ))}
      </div>
    );
  };

  const renderTooltips = () => {
    if (!icon) return null;

    return icon.map((specIcon, index) => (
      <ReactTooltip
        key={index}
        id={specIcon.tooltipId}
        place="bottom"
        content={specIcon.toolTipContent}
        style={{ zIndex: 100 }}
      />
    ));
  };

  return (
    <div className="generic-item-container" style={style}>
      <div className="generic-item-title">
        {title}
        {renderIcons()}
      </div>
      {renderTooltips()}
      <div className="generic-item-sub-title">{subTitle}</div>
    </div>
  );
};

export default GenericItem;
