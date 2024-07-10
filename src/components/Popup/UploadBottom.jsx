import { useContext } from "react";
import { PopupContext } from "../../store/popup-context";
import Button from "../Button/Button";

const UploadBottom = ({ NextPopup, PreviousPopup, disabled }) => {
  const { showPopup } = useContext(PopupContext);

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
          <div
            className="upload-btn back"
            onClick={() => showPopup(PreviousPopup)}
          >
            חזרה
          </div>
        )}
        <Button
          text={"המשך"}
          style={{
            width: "8.3vw",
            height: "4.4vh",
          }}
          disabled={disabled}
          className="upload-btn"
          onClick={() => showPopup(NextPopup)}
        />
      </div>
    </div>
  );
};

export default UploadBottom;
