import { useContext } from "react";
import { PopupContext } from "../../store/popup-context";

const UploadBottom = ({ NextPopup, PreviousPopup }) => {
  const { showPopup } = useContext(PopupContext);

  return (
    <div
      className="upload-button-container"
      style={{
        padding: "24px 32px",
        justifyContent: !PreviousPopup ? "flex-end" : "space-between",
      }}
    >
      <div className="upload-popup-line" style={{ bottom: "96px" }} />
      {PreviousPopup && (
        <div
          className="upload-btn back"
          onClick={() => showPopup(PreviousPopup)}
        >
          חזרה
        </div>
      )}
      <div
        className="upload-btn clickable"
        onClick={() => showPopup(NextPopup)}
      >
        שמירת שינויים
      </div>
    </div>
  );
};

export default UploadBottom;
