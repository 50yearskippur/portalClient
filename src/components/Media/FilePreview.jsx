import './FilePreview.css';
import verifyFile from '../../assets/media/Icons/verifyFile.png';

const FilePreview = ({ file, handleRemoveFile }) => {
  return (
    <div className="file-preview-container">
      <img alt="verify file" src={verifyFile} />
      <div className="file-preview-title">{file.fileName || file.path}</div>
      <div
        className="file-preview-delete-btn"
        onClick={() => handleRemoveFile(file.fileName || file.path)}
      >
        מחיקה
      </div>
    </div>
  );
};

export default FilePreview;
