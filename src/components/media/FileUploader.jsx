import "./FileUploader.css";
import { useDropzone } from "react-dropzone";
import uploadFile from "../../assets/media/Upload/uploadFile.svg";
import Button from "../Button/Button";

const FileUploader = () => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      // handle file upload...
    },
  });

  return (
    <div className="file-upload-container" {...getRootProps()}>
      <input {...getInputProps({ multiple: true })} />
      <img src={uploadFile} style={{ width: "4vw" }} alt="upload file" />
      <div className="upload-file-text-container">
        <div className="file-upload-text">לחצו להעלות קבצים או גררו לתיבה</div>
      </div>
      <Button
        style={{ height: "3vh" }}
        onClick={() => {}}
        isWhiteButton={true}
        text={"בחרו קובץ"}
      />
    </div>
  );
};

export default FileUploader;
