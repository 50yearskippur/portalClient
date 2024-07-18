import "./Requests.css";
import arrow from "../../../assets/media/Icons/curvedArrow.svg";
import eduTypeByText from "../../../utils/eduTypeByText";
import CommentDetails from "../Requests/CommentDetails";
const RequestWaitingForApproval = (item) => {
  return [
    <CommentDetails
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "7.407vh",
        borderRadius: "0px 0px 6px 6px",
        gap: "16px",
        alignItems: "center",
        padding: "0 16px",
        background: "rgba(255, 255, 255, 0.8)",
        borderBottom: "1px solid #e0e0e0",
      }}
      item={item}
      icon={arrow}
    />,
  ];
};

export default RequestWaitingForApproval;
