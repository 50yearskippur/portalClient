import trashIcon from '../../../assets/media/Icons/grayTrash.svg';

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
        style={{ alignSelf: 'center', width: '6.146vw' }}
      >
        {role}
      </div>
      <input
        className="stage-input"
        type="text"
        defaultValue={defaultValue}
        style={{ width: '15.5vw' }}
        onChange={(e) => addUserToCredit(e.target.value)}
      />
      <div className='trash-icon-container'>
        <img alt="trash" src={trashIcon} onClick={() => deleteCredit(role)} />
      </div>
    </div>
  );
};

export default Credit;
