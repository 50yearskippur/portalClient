import "./GenericItem.css";

const GenericItem = ({ title, subTitle }) => {
  return (
    <div className="generic-item-container">
      <div className="generic-item-title">{title}</div>
      <div className="generic-item-sub-title">{subTitle}</div>
    </div>
  );
};

export default GenericItem;
