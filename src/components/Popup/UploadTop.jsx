import exitIcon from "../../assets/media/Icons/exitIcon.svg";


const UploadTop = ({ title, onClickExit }) => {
  return (
    <div className="upload-popup-top">
      <div className="upload-popup-header">{title}</div>
      <img
        src={exitIcon}
        className="upload-exit-button"
        alt="exit-button"
        onClick={onClickExit}
      />
      <div className="upload-popup-line" style={{ top: "72px" }} />
    </div>
  );
};

export default UploadTop;
