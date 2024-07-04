import "./Files.css";
import FileController from "../../Media/FileController";

const Files = ({ edu }) => {
  const fileStyle = { width: "6.8vw", height: "6.8vh" };
  return (
    <div className="files-section-container">
      <div className="edu-preview-file-container">
        <FileController item={edu} style={fileStyle} />
        <div className="edu-bright-text" style={{ width: "16.4vw" }}>
          קובץ תוצר
        </div>
      </div>
      <div className="edu-preview-file-container">
        <FileController item={edu} style={fileStyle} />
        <div className="edu-bright-text" style={{ width: "16.4vw" }}>
          תמונת קאבר
        </div>
      </div>
    </div>
  );
};

export default Files;
