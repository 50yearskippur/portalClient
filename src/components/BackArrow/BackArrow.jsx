import "./BackArrow.css";
import backArrowImg from "../../assets/media/icons/backArrow.png";

const BackArrow = ({onClick = () => {}}) => {
  return (
    <div className="back-arrow-container" onClick={onClick}>
      <img src={backArrowImg} className="back-arrow-img" alt="back arrow" />
    </div>
  );
};

export default BackArrow;
