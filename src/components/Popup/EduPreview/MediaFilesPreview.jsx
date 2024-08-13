import './MediaFilesPreview.css';
import { useDrop } from 'react-dnd';

const BigImage = ({ image, onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'image',
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{ border: isOver ? '2px solid blue' : '2px solid transparent' }}
    >
      <img
        src={URL.createObjectURL(image)}
        alt="file"
        className="media-file-cover"
      />
    </div>
  );
};

const MediaFilesPreview = ({ files }) => {
  return (
    <div className="media-files-preview-containr">
      {/* <div className="media-files-cover-title ">תמונת קאבר</div>
      <img
        src={URL.createObjectURL(files[0])}
        alt="file"
        className="media-file-cover"
      /> */}
      <BigImage image={files[0]} onDrop={(item) => console.log(item)} />
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
