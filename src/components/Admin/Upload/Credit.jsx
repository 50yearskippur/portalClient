import trashIcon from "../../../assets/media/Icons/grayTrash.svg";

const Credit = ({ role, defaultValue, deleteCredit, setCreditsList }) => {
  const addUserToCredit = (user) => {
    setCreditsList((prevCredits) =>
      prevCredits.map((credit) =>
        credit.role === role ? { ...credit, user } : credit
      )
    );
  };

  return (
    <div className="stage-credit-container">
      <div
        className="stage-text"
        style={{ alignSelf: "center", width: "6.146vw" }}
      >
        {role}
      </div>
      <input
        className="stage-input"
        type="text"
        defaultValue={defaultValue}
        style={{ height: "19px", width: "17.5vw" }}
        onChange={(e) => addUserToCredit(e.target.value)}
      />
      <img alt="trash" src={trashIcon} onClick={() => deleteCredit(role)} />
    </div>
  );
};

export default Credit;
