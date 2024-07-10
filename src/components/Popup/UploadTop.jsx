import exitIcon from "../../assets/media/Icons/exitIcon.svg";

const UploadTop = ({ onClickExit }) => {
  return (
    <div className="upload-popup-top">
      <div className="upload-popup-header">העלאת תוכן לפורטל</div>
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
