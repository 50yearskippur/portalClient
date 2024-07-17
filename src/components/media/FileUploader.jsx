import "./FileUploader.css";
import { useDropzone } from "react-dropzone";
import { useContext } from "react";
import { PopupContext } from "../../store/popup-context";
import uploadFile from "../../assets/media/Upload/uploadFile.svg";
import Button from "../Button/Button";

const FileUploader = ({ text, fileTypes }) => {
  const { setItemDetails } = useContext(PopupContext);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setItemDetails((prevDetails) => ({
        ...prevDetails,
        file: acceptedFiles,
      }));
    },
  });

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
        text={"בחר קובץ"}
      />
    </div>
  );
};

export default FileUploader;
