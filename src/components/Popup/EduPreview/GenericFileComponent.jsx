import "./Files.css";
import greyArrow from "../../../assets/media/Icons/greyArrow.svg";
import greyDownload from "../../../assets/media/Icons/greyDownloadIcon.svg";
import FileController from "../../Media/FileController";
import formIcon from "../../../assets/media/Icons/formIcon.svg";
const GenericFileComponent = ({ edu, fileTitle, componentCover }) => {
  const fileStyle = { width: "6.8vw", height: "6.8vh" };

  return (
    <div className="files-section-container">
      <div className="edu-preview-file-section-container">
        <div className="edu-preview-file-container">
          {!edu.uploadByArtech && (
            <FileController item={edu} style={fileStyle} />
          )}
          {edu.uploadByArtech && <img alt="form-icon" src={formIcon} />}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="edu-preview-file-details">
              <div className="edu-preview-text">{fileTitle}</div>
              <div className="edu-preview-text">524MB</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "space-between",
              }}
            >
              <img src={greyArrow} alt="arrow" />
              <img src={greyDownload} alt="download" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GenericFileComponent;
