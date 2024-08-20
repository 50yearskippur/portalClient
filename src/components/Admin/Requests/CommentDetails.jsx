import "./CommentDetails.css";
import eduTypeByText from "../../../utils/eduTypeByText";
import convertDateToString from "../../../utils/convertDateToString";

const CommentDetails = ({ item, icon, style }) => {
  return (
    <div style={style}>
      <div className="comment-side-container">
        <img
          src={eduTypeByText(item?.type)}
          alt="edu type"
          className="item-type-img"
        />
        <div className="comment-details-container">
          <div className="comment-title">{item.title}</div>
          <div className="comment-user-details">
            <div> {item.creator}</div>
            <div>{convertDateToString(item.createdAt)} </div>
          </div>
        </div>
      </div>
      {icon && <img alt={"icon"} src={icon} />}
    </div>
  );
};
export default CommentDetails;
