import "./Requests.css";

import plusCircle from "../../../assets/media/Icons/plusCircle.svg";
import minusCircle from "../../../assets/media/Icons/minusCircle.svg";
import eduTypeByText from "../../../utils/eduTypeByText";
import CommentDetails from "./CommentDetails";

const RequerstInfo = (item) => {
  return [
    <div className="comment">
      <CommentDetails
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          height: "7.407vh",
          borderRadius: "0px 0px 6px 6px",
          gap: "16px",
          alignItems: "center",
          background: "rgba(255, 255, 255, 0.8)",
        }}
        item={item}
      />
      <div className="commet-text">{item?.text}</div>
      <div className="comment-button-container" style={{ display: "flex" }}>
        <div className="comment-button">
          {" "}
          ביטול
          <img src={minusCircle} />
        </div>
        <div className="comment-button">
          אישור
          <img src={plusCircle} />
        </div>
      </div>
    </div>,
  ];
};

export default RequerstInfo;
