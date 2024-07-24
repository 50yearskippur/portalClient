import "./FileUploader.css";
import { useDropzone } from "react-dropzone";
import { useState, useContext } from "react";
import { PopupContext } from "../../store/popup-context";
import uploadFile from "../../assets/media/Upload/uploadFile.svg";
import UploadError from "./UploadError";
import FilePreview from "./FilePreview";
import Button from "../Button/Button";

const FileUploader = ({ text, fileTypes }) => {
  const { setItemDetails } = useContext(PopupContext);
  const [files, setFiles] = useState([]);
  const [isInvalidType, setIsInvalidType] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const unsupportedFiles = acceptedFiles.filter((file) => {
        const fileExtension = file.path.split(".").pop().toUpperCase();
        return !fileTypes.includes(fileExtension);
      });

      if (unsupportedFiles.length > 0) setIsInvalidType(true);
      else {
        setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
        console.log("on");
        setItemDetails((prevDetails) => ({
          ...prevDetails,
          files: acceptedFiles,
        }));
      }
    },
  });

  const tryUploadAgain = () => {
    setIsInvalidType(false);
    setFiles([]);
  };

  const handleRemoveFile = (filePath) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.path !== filePath));
  };

  const hadnleDragFiles = () => {
    if (isInvalidType)
      return <UploadError fileTypes={fileTypes} onClick={tryUploadAgain} />;
    else if (files.length > 0)
      return (
        <FilePreview file={files[0]} handleRemoveFile={handleRemoveFile} />
      );
    return (
      <div className="file-upload-container" {...getRootProps()}>
        <input {...getInputProps({ multiple: true })} />
        <img src={uploadFile} style={{ width: "4vw" }} alt="upload file" />
        <div className="file-upload-text-container">
          <div className="file-upload-text">{text}</div>
          {fileTypes && (
            <div className="file-upload-type">{fileTypes.join(" / ")}</div>
          )}
        </div>
        <Button
          style={{ height: "3vh" }}
          onClick={() => {}}
          isWhiteButton={true}
          text="בחר קובץ"
        />
      </div>
    );
  };

  return <>{hadnleDragFiles()}</>;
};

export default FileUploader;
