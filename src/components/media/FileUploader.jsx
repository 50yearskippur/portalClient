import "./FileUploader.css";
import { useDropzone } from "react-dropzone";
import { useState, useContext } from "react";
import { PopupContext } from "../../store/popup-context";
import uploadFile from "../../assets/media/Upload/uploadFile.svg";
import Button from "../Button/Button";
import { List } from "@mui/material";
import FileIcon from "./FileIcon";
// import UploadFileIcon from "@mui/icons-material/UploadFile";

const FileUploader = ({ text, fileTypes }) => {
  const { setItemDetails } = useContext(PopupContext);
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);

      setItemDetails((prevDetails) => ({
        ...prevDetails,
        file: acceptedFiles,
      }));
    },
  });

  const handleRemoveFile = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  return (
    <div className="file-upload-container" {...getRootProps()}>
      {files.length > 0 && (
        <List className="file-list">
          {files.map((file) => (
            <FileIcon key={file.path} file={file} onRemove={handleRemoveFile} />
          ))}
        </List>
      )}
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
        text={"בחר קובץ"}
      />
    </div>
  );
};

export default FileUploader;
