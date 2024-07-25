import "./FileUploader.css";
import { useDropzone } from "react-dropzone";
import { useState, useContext, useEffect } from "react";
import { PopupContext } from "../../store/popup-context";
import uploadFile from "../../assets/media/Upload/uploadFile.svg";
import whiteEdit from "../../assets/media/Icons/whiteEdit.svg";
import UploadError from "./UploadError";
import FilePreview from "./FilePreview";
import Button from "../Button/Button";

const FileUploader = ({ text, fileTypes, IsCover = false }) => {
  const { itemDetails, setItemDetails } = useContext(PopupContext);
  const [files, setFiles] = useState([]);
  const [isInvalidType, setIsInvalidType] = useState(false);

  useEffect(() => {
    console.log(itemDetails);
  }, [itemDetails]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const unsupportedFiles = acceptedFiles.filter((file) => {
        const fileExtension = file.path.split(".").pop().toUpperCase();
        return !fileTypes.includes(fileExtension);
      });

      if (unsupportedFiles.length > 0) setIsInvalidType(true);
      else {
        setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
        setItemDetails((prevDetails) => ({
          ...prevDetails,
          files: { [IsCover ? "cover" : "media"]: acceptedFiles },
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
    switch (true) {
      case isInvalidType:
        return <UploadError fileTypes={fileTypes} onClick={tryUploadAgain} />;
      case files.length === 0:
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
      case IsCover && files.length > 0:
        return (
          <>
            <img
              src={URL.createObjectURL(
                itemDetails.files[0]?.cover ? itemDetails.cover : files[0]
              )}
              className="file-upload-cover"
              alt="file"
            />
            <div className="file-upload-cover-edit">
              <img alt="edit" src={whiteEdit} />
              <>עריכה</>
            </div>
          </>
        );
      case files.length > 0:
        return (
          <FilePreview file={files[0]} handleRemoveFile={handleRemoveFile} />
        );
    }
  };

  return <div className="drag-container">{hadnleDragFiles()}</div>;
};

export default FileUploader;
