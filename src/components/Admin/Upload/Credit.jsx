import trashIcon from "../../../assets/media/Icons/grayTrash.svg";

const Credit = ({ title }) => {
  return (
    <div className="stage-cradit-container">
      <div
        className="stage-text"
        style={{ alignSelf: "center", width: "6.146vw" }}
      >
        {title}
      </div>
      <input
        className="stage-input"
        type="text"
        style={{ height: "19px", width: "17.5vw" }}
      />
      <img alt="trash" src={trashIcon} />
    </div>
  );
};

export default Credit;
