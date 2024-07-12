import { useContext } from "react";
import { PopupContext } from "../../store/popup-context";
import Button from "../Button/Button";

const UploadBottom = ({ NextPopup, PreviousPopup, disabled }) => {
  const { showPopup, hidePopup, setItemDetails } = useContext(PopupContext);

  const onClickHandler = () => {
    if (NextPopup) {
      showPopup(NextPopup);
    } else {
      hidePopup();
      setItemDetails({});
    }
  };

  return (
    <div>
      <div className="upload-popup-line" style={{ margin: 0 }} />
      <div
        className="upload-button-container"
        style={{
          padding: "24px 32px",
          justifyContent: !PreviousPopup ? "flex-end" : "space-between",
        }}
      >
        {PreviousPopup && (
          <Button
            text={"חזרה"}
            style={{
              width: "8.3vw",
              height: "4.4vh",
            }}
            // disabled={disabled}
            isWhiteButton={true}
            onClick={() => showPopup(PreviousPopup)}
          />
        )}
        <Button
          text={NextPopup ? "המשך" : "העלאה"}
          style={{
            width: "8.3vw",
            height: "4.4vh",
          }}
          disabled={disabled}
          onClick={onClickHandler}
        />
      </div>
    </div>
  );
};

export default UploadBottom;
