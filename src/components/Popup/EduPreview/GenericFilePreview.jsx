import greyArrow from '../../../assets/media/Icons/greyArrow.svg';
import greyDownload from '../../../assets/media/Icons/greyDownloadIcon.svg';
import FileController from '../../Media/FileController';
import formIcon from '../../../assets/media/Icons/formIcon.svg';
import './Files.css';
import './GenericFilePreview.css';

const GenericFilePreview = ({ edu, fileTitle }) => {
  const fileStyle = { width: '6.8vw', height: '6.8vh' };

  return (
    <div className="files-section-container">
      <div className="edu-preview-file-section-container">
        <div className="edu-preview-file-container">
          {edu.type !== 'סיכום' && (
            <FileController item={edu} style={fileStyle} />
          )}
          {edu.type === 'סיכום' && edu.uploadByArtech && (
            <img alt="form-icon" src={formIcon} />
          )}
          <div className="file-details-container">
            <div className="edu-preview-file-details">
              <div className="edu-preview-text">{fileTitle}</div>
              <div className="edu-preview-text">524MB</div>
            </div>
            <div className="edu-preview-file-icons">
              <img src={greyArrow} alt="arrow" />
              <img src={greyDownload} alt="download" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GenericFilePreview;
