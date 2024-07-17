import paperIcon from "../../assets/media/Icons/paperIcon.svg";
import exitIcon from "../../assets/media/Icons/exitIcon.svg";
import "./ExitWarning.css";
import ButtonContainer from "../../ButtonContainer/ButtonContainer";
const ExitWarning = () => {
  return (
    <div className="second-popup-overlay">
      <div className="exit-warning-container">
        <div className="exit-warning-up-details">
          <div className="exit-warning-icons-container">
            <div className="exit-warning-background-icon">
              <img
                alt="page-icon"
                src={paperIcon}
                className={"exit-warning-paper-icon"}
              />
            </div>
            <img
              src={exitIcon}
              className="exit-warning-exit-button"
              alt="exit-button"
            />
          </div>
          <div className="exit-warning-popup-header">
            נראה שאתה עומד לצאת ...{" "}
          </div>
        </div>
        <div className="exit-warning-down-details">
          <div className="exit-warning-text">
            שים לב, יציאה כעת תביא לאיבוד המידע שהזנתם.
          </div>
          <ButtonContainer
            blueButtonTitle={"חזור לטופס"}
            whiteButtonTitle={"צא בלי לשמור"}
          />
        </div>
      </div>
    </div>
  );
};
export default ExitWarning;
