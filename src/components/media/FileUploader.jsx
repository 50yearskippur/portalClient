import "./FileUploader.css";
import { useDropzone } from "react-dropzone";
import uploadFile from "../../assets/media/Upload/uploadFile.svg";

const FileUploader = () => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      // handle file upload...
    },
  });

  return (
    <div className="file-upload-container" {...getRootProps()}>
      <input {...getInputProps({ multiple: true })} />
      <img src={uploadFile} alt="upload file" />
      <div className="upload-file-text-container">
        <div className="file-upload-text">לחץ לעלות קבצים או גררו לתיבה</div>
      </div>
      <div className="upload-btn back" style={{ marginTop: "32px" }}>
        בחר קובץ
      </div>
    </div>
  );
};

export default FileUploader;
