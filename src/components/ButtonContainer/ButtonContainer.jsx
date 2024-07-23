import "./ButtonContainer.css";
const ButtonContainer = ({ blueButtonTitle, whiteButtonTitle }) => {
  return (
    <div className="credit-buttons-conatiner">
      <div className="credit-unique-button">{blueButtonTitle}</div>
      <div className="credit-save-button"> {whiteButtonTitle} </div>
    </div>
  );
};
export default ButtonContainer;
