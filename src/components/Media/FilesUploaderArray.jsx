import './FileUploader.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDropzone } from 'react-dropzone';
import { useContext } from 'react';
import { PopupContext } from '../../store/popup-context';
import uploadFile from '../../assets/media/Upload/uploadFile.svg';
import Button from '../Button/Button';
import MediaFilesPreview from '../Popup/EduPreview/MediaFilesPreview';

const FileUploaderArray = ({ text, fileTypes }) => {
  const { itemDetails, saveDetails } = useContext(PopupContext);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      saveDetails({ files: acceptedFiles });
    },
    directory: true,
  });

  const hadnleDragFiles = () => {
    switch (true) {
      case !!itemDetails?.files:
        return (
          <DndProvider backend={HTML5Backend}>
            <MediaFilesPreview files={itemDetails.files} />
          </DndProvider>
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

  return <>{hadnleDragFiles()}</>;
};

export default FileUploaderArray;
