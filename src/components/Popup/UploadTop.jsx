import { useContext } from "react";
import { PopupContext } from "../../store/popup-context";
import exitIcon from "../../assets/media/Icons/exitIcon.svg";

const UploadTop = () => {
  const { hidePopup } = useContext(PopupContext);

  return (
    <div className="upload-popup-top">
      <div className="upload-popup-header">העלאת תוצר לפורטל</div>
      <img
        src={exitIcon}
        className="upload-exit-button"
        alt="exit-button"
        onClick={hidePopup}
      />
      <div className="upload-popup-line" style={{ top: "6.67vh" }} />
    </div>
  );
};

export default UploadTop;
