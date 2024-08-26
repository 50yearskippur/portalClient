import './Files.css';
import FileController from '../../Media/FileController';

const Files = ({ item }) => {
  const fileStyle = { width: '6.8vw', height: '6.8vh' };
  return (
    <div className="files-section-container">
      <div className="edu-preview-file-section-container">
        <div className="edu-bright-text">קובץ תוכן</div>
        <div className="edu-preview-file-container">
          <FileController item={item.files} style={fileStyle} />
          <div className="edu-preview-file-details">
            <div className="edu-preview-text">{item.title}</div>
            <div className="edu-preview-text">524MB</div>
          </div>
        </div>
      </div>
      <div className="edu-preview-file-section-container">
        <div className="edu-bright-text">תמונת קאבר</div>
        <div className="edu-preview-file-container">
          <FileController item={item.files} style={fileStyle} />
          <div className="edu-preview-file-details">
            <>{item.title}</>
            <>524MB</>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Files;
