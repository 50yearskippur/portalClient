import { useContext } from "react";
import { PopupContext } from "../../store/popup-context";
import UploadEdu from "./UploadEdu";

const UploadBottom = () => {
  const { showPopup } = useContext(PopupContext);

  return (
    <div className="upload-button-container" style={{ padding: "24px 32px" }}>
      <div className="upload-popup-line" style={{ bottom: "96px" }} />
      <div
        className="upload-btn clickable"
        onClick={() => showPopup(<UploadEdu />)}
      >
        המשך
      </div>
    </div>
  );
};

export default UploadBottom;
