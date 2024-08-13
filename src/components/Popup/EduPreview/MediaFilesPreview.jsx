import './MediaFilesPreview.css';
import { useState, useContext } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import { PopupContext } from '../../../store/popup-context';

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
      className="media-file-cover-container"
      style={{
        border: isOver ? '2px solid blue' : '2px solid transparent',
      }}
    >
      <img
        src={URL.createObjectURL(image)}
        alt="file"
        className="media-file-cover grab"
      />
    </div>
  );
};

const SmallImage = ({ image, index, setCurrentImageSwap }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'image',
    item: { index, image },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  if (isDragging) {
    setCurrentImageSwap(image);
  }

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <img
        src={URL.createObjectURL(image)}
        alt="file"
        className="media-file grabbing"
      />
    </div>
  );
};

const MediaFilesPreview = ({ files }) => {
  const { setItemDetails } = useContext(PopupContext);
  const [images, setImages] = useState(files);
  const [currentImageSwap, setCurrentImageSwap] = useState();

  const onDrop = (swapImage) => {
    const indexToSwap = images.findIndex(
      (image) => image.path === swapImage.path
    );

    if (indexToSwap === -1 || indexToSwap === 0) {
      return;
    }

    const updatedImages = [...images];

    [updatedImages[0], updatedImages[indexToSwap]] = [
      updatedImages[indexToSwap],
      updatedImages[0],
    ];

    setImages(updatedImages);
    setItemDetails((prevDetails) => ({
      ...prevDetails,
      files: updatedImages,
    }));
  };

  return (
    <div className="media-files-preview-containr">
      <BigImage image={images[0]} onDrop={() => onDrop(currentImageSwap)} />
      <div className="media-files-grid">
        {images.slice(1).map((image, index) => (
          <SmallImage
            key={index}
            image={image}
            setCurrentImageSwap={setCurrentImageSwap}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaFilesPreview;
