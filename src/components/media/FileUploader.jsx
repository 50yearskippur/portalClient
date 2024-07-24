import "./FileUploader.css";
import { useDropzone } from "react-dropzone";
import { useState, useEffect, useContext } from "react";
import { PopupContext } from "../../store/popup-context";
import uploadFile from "../../assets/media/Upload/uploadFile.svg";
import Button from "../Button/Button";

const extensionToMime = {
  PNG: "image/png",
  JPG: "image/jpeg",
  JPEG: "image/jpeg",
  GIF: "image/gif",
  // Add more mappings as needed
};

const FileUploader = ({ text, fileTypes }) => {
  const { setItemDetails } = useContext(PopupContext);
  const [files, setFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [allowedMimes, setAllowedMimes] = useState([]);

  useEffect(() => {
    // Convert file extensions to MIME types
    const validMimes = fileTypes
      .map((type) => extensionToMime[type.toUpperCase()])
      .filter(Boolean);
    setAllowedMimes(validMimes);
  }, [fileTypes]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const unsupportedFiles = acceptedFiles.filter(
        (file) => !allowedMimes.includes(file.type)
      );

      if (unsupportedFiles.length > 0) {
        setErrorMessage(
          `הקובץ שהעלאת לא מתאים לפורמט, נדרש קובץ ${fileTypes.join(
            "/"
          )} נסה שוב`
        );
      } else {
        setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
        console.log(acceptedFiles[0].path);
        setItemDetails((prevDetails) => ({
          ...prevDetails,
          files: acceptedFiles,
        }));
        setErrorMessage(""); // Clear any previous error message
      }
    },
    accept: allowedMimes.join(","), // Restrict file input to specified MIME types
  });

  const handleRemoveFile = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  return (
    <div className="file-upload-container" {...getRootProps()}>
      {/* {files.length > 0 && (
        <ul className="file-list">
          {files.map((file) => (
            <FileIcon key={file.path} file={file} onRemove={handleRemoveFile} />
          ))}
        </ul>
      )} */}
      <input {...getInputProps({ multiple: true })} />
      <img src={uploadFile} style={{ width: "4vw" }} alt="upload file" />
      <div className="file-upload-text-container">
        <div className="file-upload-text">{text}</div>
        {fileTypes && (
          <div className="file-upload-type">{fileTypes.join(" / ")}</div>
        )}
      </div>
      {errorMessage && (
        <div className="error-message">
          <span>{errorMessage}</span>
        </div>
      )}
      <Button
        style={{ height: "3vh" }}
        onClick={() => {}}
        isWhiteButton={true}
        text="בחר קובץ"
      />
    </div>
  );
};

export default FileUploader;
