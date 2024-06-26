import "./UploadEdu.css";
import UploadTop from "./UploadTop";
import FileUploader from "../Media/FileUploader";
import UploadEduDetails from "./UploadEduDetails";
import UploadEduType from "./UploadEduType";
import handlePropagation from "../../utils/handlePropagation";
import UploadBottom from "./UoloadBottom";
import Dropdown from "../Dropdown/Dropdown";

const UploadEdu = () => {
  return (
    <div className="upload-popup" onClick={(e) => handlePropagation(e)}>
      <UploadTop />
      <div className="upload-popup-content" style={{ gap: "32px" }}>
        <div className="upload-input-continer">
          <div className="upload-details-container">
            <div className="upload-popup-text">שם התוצר:</div>
            <input type="text" className="upload-input-field" />
          </div>
          <div className="upload-details-container">
            <div className="upload-popup-text">רמת קושי:</div>
            <Dropdown
              list={["מותאם לכל הרמות", "רמה 1", "רמה 2", "רמה 3"]}
              style={{ width: "100%", height: "40px" }}
            />
          </div>
        </div>
        <FileUploader />
        <div className="upload-agreement-container">
          <input
            className="upload-agreement-input"
            type="checkbox"
            name="subscribe"
            value="newsletter"
          />
          אני מאשר שהתוכן עומד בתנאי בטחון מידע ומותאם לפרסום לכלל אמ"ן
        </div>
      </div>
      <UploadBottom
        NextPopup={<UploadEduDetails />}
        PreviousPopup={<UploadEduType />}
      />
    </div>
  );
};

export default UploadEdu;
