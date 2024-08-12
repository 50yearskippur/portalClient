import './FileUploader.css';
import { useDropzone } from 'react-dropzone';
import { useContext, useEffect } from 'react';
import { PopupContext } from '../../store/popup-context';
import uploadFile from '../../assets/media/Upload/uploadFile.svg';
import Button from '../Button/Button';
import MediaFilesPreview from '../Popup/EduPreview/MediaFilesPreview';

const FileUploaderArray = ({ text, fileTypes }) => {
  const { itemDetails, setItemDetails } = useContext(PopupContext);

  useEffect(() => {
    console.log('itemDetails', itemDetails);
  }, [itemDetails]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setItemDetails((prevDetails) => ({
        ...prevDetails,
        files: acceptedFiles,
      }));
    },
    directory: true,
  });

  //   const handleRemoveFile = () => {
  //     setItemDetails((prevDetails) => {
  //       const newFiles = { ...prevDetails.files };
  //       return { ...prevDetails, files: newFiles };
  //     });
  //   };

  const hadnleDragFiles = () => {
    switch (true) {
      case !!itemDetails?.files:
        return <MediaFilesPreview files={itemDetails.files} />;
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

  return <>{hadnleDragFiles()}</>;
};

export default FileUploaderArray;
