import greyArrow from '../../../assets/media/Icons/greyArrow.svg';
import greyDownload from '../../../assets/media/Icons/greyDownloadIcon.svg';
import FileController from '../../Media/FileController';
import download from '../../../utils/download';
import formIcon from '../../../assets/media/Icons/formIcon.svg';
import './Files.css';
import './GenericFilePreview.css';

const GenericFilePreview = ({ edu, fileTitle }) => {
  const fileStyle = { width: '6.8vw', height: '6.8vh', borderRadius: '3px' };
  console.log(edu);

  return (
    <div className="files-section-container">
      <div className="edu-preview-file-container">
        {edu.type ? (
          <FileController item={edu} style={fileStyle} />
        ) : (
          <img src={formIcon} alt="form" />
        )}
        <div className="file-details-container">
          <div className="edu-preview-file-details">
            <div className="edu-preview-text">{fileTitle}</div>
            <div className="edu-preview-text">524MB</div>
          </div>
          <div className="edu-preview-file-icons">
            <img src={greyArrow} alt="arrow" className="edu-preview-icon" />
            <img
              src={greyDownload}
              alt="download"
              className="edu-preview-icon"
              onClick={() => download(edu)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericFilePreview;
