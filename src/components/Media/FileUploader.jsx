import './FileUploader.css';
import { useDropzone } from 'react-dropzone';
import { useState, useContext } from 'react';
import { PopupContext } from '../../store/popup-context';
import uploadFile from '../../assets/media/Upload/uploadFile.svg';
import whiteEdit from '../../assets/media/Icons/whiteEdit.svg';
import UploadError from './Notiffactions/UploadError';
import FilePreview from './FilePreview';
import Button from '../Button/Button';

const FileUploader = ({ text, fileTypes, isCover = false }) => {
  const { itemDetails, setItemDetails } = useContext(PopupContext);
  const [isInvalidType, setIsInvalidType] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const unsupportedFiles = acceptedFiles.filter((file) => {
        const fileExtension = file.path?.split('.').pop().toUpperCase();
        return !fileTypes?.includes(fileExtension);
      });

      if (unsupportedFiles.length > 0) setIsInvalidType(true);
      else {
        setItemDetails((prevDetails) => ({
          ...prevDetails,
          files: {
            ...prevDetails.files,
            [isCover ? 'cover' : 'media']: acceptedFiles[0],
          },
        }));
        setIsInvalidType(false);
      }
    },
  });

  const tryUploadAgain = () => {
    setIsInvalidType(false);
  };

  const handleRemoveFile = () => {
    setItemDetails((prevDetails) => {
      const newFiles = { ...prevDetails.files };
      delete newFiles.media;
      return { ...prevDetails, files: newFiles };
    });
  };

  const hadnleDragFiles = () => {
    switch (true) {
      case isInvalidType:
        return <UploadError fileTypes={fileTypes} onClick={tryUploadAgain} />;
      case !isCover && !!itemDetails?.files?.media:
        return (
          <FilePreview
            file={itemDetails?.files?.media}
            handleRemoveFile={handleRemoveFile}
          />
        );
      case isCover && !!itemDetails?.files?.cover:
        return (
          <>
            <img
              src={URL.createObjectURL(itemDetails?.files?.cover)}
              className="file-upload-cover"
              alt="file"
            />
            <div className="file-upload-cover-edit">
              <img alt="edit" src={whiteEdit} />
              <>עריכה</>
            </div>
          </>
        );
      default:
        return (
          <div className="file-upload-container" {...getRootProps()}>
            <input {...getInputProps({ multiple: true })} />
            <img src={uploadFile} style={{ width: '4vw' }} alt="upload file" />
            <div className="file-upload-text-container">
              <div className="file-upload-text">{text}</div>
              {fileTypes && (
                <div className="file-upload-type">{fileTypes?.join(' / ')}</div>
              )}
            </div>
            <Button
              style={{ height: '3vh' }}
              onClick={() => {}}
              isWhiteButton={true}
              text="בחר קובץ"
            />
          </div>
        );
    }
  };

  return <div className="drag-container">{hadnleDragFiles()}</div>;
};

export default FileUploader;
