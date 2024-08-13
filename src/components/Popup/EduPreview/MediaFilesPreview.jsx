import './MediaFilesPreview.css';

const MediaFilesPreview = ({ files }) => {
  return (
    <div className="media-files-preview-containr">
      <div className="media-files-cover-title ">תמונת קאבר</div>
      <img
        src={URL.createObjectURL(files[0])}
        alt="file"
        className="media-file-cover"
      />
      <div className="media-files-grid">
        {files.slice(1).map((file, index) => (
          <img
            key={index}
            src={URL.createObjectURL(file)}
            alt="file"
            className="media-file"
          />
        ))}
      </div>
    </div>
  );
};

export default MediaFilesPreview;
