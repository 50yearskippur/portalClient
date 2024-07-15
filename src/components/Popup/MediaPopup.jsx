import "./MediaPopup.css";
import backImg from "../../assets/media/Icons/backIcon.svg";
import downloadImg from "../../assets/media/Icons/downloadIcon.svg";
import { useContext } from "react";
import { PopupContext } from "../../store/popup-context";
import downloadPdf from "../../utils/downloadPdf ";

const MediaPopup = ({ children, item = {} }) => {
  const { hidePopup } = useContext(PopupContext);

  return (
    <div className="media-popup-container">
      <div className="media-popup-top-container">
        <div className="media-popup-exit-container" onClick={hidePopup}>
          <img src={backImg} alt="back icon" />
          <div className="media-popup-exit-text">יציאה ממצב תצוגה מקדימה</div>
        </div>
        <div className="media-popup-title">{item.title}</div>
        <div
          className="media-popup-download-container"
          onClick={() => downloadPdf(item)}
        >
          <img src={downloadImg} alt="download icon" />
          <div className="media-popup-download-text">הורדה</div>
        </div>
      </div>
      <div className="media-popup-content">{children}</div>
    </div>
  );
};
export default MediaPopup;
