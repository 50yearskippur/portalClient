import "./UploadError.css";
import redError from "../../assets/media/Icons/redError.svg";

const UploadError = ({ fileTypes, onClick }) => {
  return (
    <div className="upload-error-container">
      <img alt="red error" src={redError} className="upload-error-icon" />
      <div className="upload-error-text red">
        {`הקובץ שהעלאת לא מתאים לפורמט, נדרש קובץ ${fileTypes.join("/")}`}
      </div>
      <div className="upload-error-text blue" onClick={onClick}>
        נסה שוב
      </div>
    </div>
  );
};

export default UploadError;
