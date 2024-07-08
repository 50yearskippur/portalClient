import "./Files.css";
import FileController from "../../Media/FileController";

const Files = ({ edu }) => {
  const fileStyle = { width: "6.8vw", height: "6.8vh" };
  return (
    <div className="files-section-container">
      <div className="edu-preview-file-section-container">
        <div className="edu-bright-text">קובץ תוכן</div>
        <div className="edu-preview-file-container">
          <FileController item={edu} style={fileStyle} />
          <div className="edu-preview-file-details">
            <div className="edu-preview-text">{edu.title}</div>
            <div className="edu-preview-text">524MB</div>
          </div>
        </div>
      </div>
      <div className="edu-preview-file-section-container">
        <div className="edu-bright-text">תמונת קאבר</div>
        <div className="edu-preview-file-container">
          <FileController item={edu} style={fileStyle} />
          <div className="edu-preview-file-details">
            <div>{edu.title}</div>
            <div>524MB</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Files;
