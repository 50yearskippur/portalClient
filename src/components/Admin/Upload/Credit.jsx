import trashIcon from "../../../assets/media/Icons/grayTrash.svg";

const Credit = ({ title, deleteCredit }) => {
  return (
    <div className="stage-credit-container">
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
      <img alt="trash" src={trashIcon} onClick={() => deleteCredit(title)} />
    </div>
  );
};

export default Credit;
