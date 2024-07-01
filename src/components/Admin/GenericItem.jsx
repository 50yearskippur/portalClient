import "./GenericItem.css";

const GenericItem = ({ title, subTitle, style }) => {
  return (
    <div className="generic-item-container" style={style}>
      <div className="generic-item-title">{title}</div>
      <div className="generic-item-sub-title">{subTitle}</div>
    </div>
  );
};

export default GenericItem;
