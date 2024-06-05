import "./FileUploader.css";
import { useDropzone } from "react-dropzone";

const FileUploader = () => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      // handle file upload...
    },
  });

  return (
    <div className="file-upload-container" {...getRootProps()}>
      <input {...getInputProps({ multiple: true })} />
      <div className="upload-icon" />
      <div className="upload-file-text-container">
        <div
          className="file-upload-text"
          style={{ textDecorationLine: "underline" }}
        >
          לחצו לעלות קבצים
        </div>
        <div className="file-upload-text">או גררו לתיבה</div>
      </div>
    </div>
  );
};

export default FileUploader;
