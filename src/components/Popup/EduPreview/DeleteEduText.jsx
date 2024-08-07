import "./DeleteEduText.css";
import trashIcon from "../../../assets/media/Icons/trash.svg";

const DeleteEduText = ({ onClick, text = "מחיקה מהפורטל " }) => {
  return (
    <div className="edu-delete-container">
      <img src={trashIcon} alt="trash" />
      <div className="edu-delete-text" onClick={onClick}>
        {text}
      </div>
    </div>
  );
};

export default DeleteEduText;
