import "./WaitingList.css";
import eduTypeByText from "../../../utils/eduTypeByText";
import convertDateToString from "../../../utils/convertDateToString";

const CommentDetails = ({ item, icon, style }) => {
  return (
    <div style={style}>
      <div style={{ gap: "16px", display: "flex", alignItems: "center" }}>
        <img
          src={eduTypeByText(item?.type)}
          alt="edu type"
          className="item-type-img"
        />
        <div className="waitinglist-details-container">
          <div className="waitinglist-title">{item.title}</div>
          <div className="waitinglist-user-details">
            <div> {item.creator}</div>
            <div>{convertDateToString(item.date)} </div>
          </div>
        </div>
      </div>
      {icon && <img alt={"icon"} src={icon} />}
    </div>
  );
};
export default CommentDetails;
