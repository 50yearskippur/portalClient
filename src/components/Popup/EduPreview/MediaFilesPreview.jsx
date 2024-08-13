import './MediaFilesPreview.css';
import { useState, useEffect, useContext, useRef } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import { PopupContext } from '../../../store/popup-context';
import grayPlus from '../../../assets/media/Icons/grayPlus.svg';
import DotsMenu from './DotsMenu';

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
      <DotsMenu />
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
    <div
      ref={drag}
      className="media-file-container"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <img
        src={URL.createObjectURL(image)}
        alt="file"
        className="media-file grabbing"
      />
      <DotsMenu />
    </div>
  );
};

const MediaFilesPreview = ({ files }) => {
  const { setItemDetails } = useContext(PopupContext);
  const [images, setImages] = useState(files);
  const [currentImageSwap, setCurrentImageSwap] = useState();
  const fileInputRef = useRef(null);

  useEffect(() => {
    setItemDetails((prevDetails) => ({
      ...prevDetails,
      files: images,
    }));
  }, [images, setItemDetails]);

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
  };

  const handleAddImages = (event) => {
    const newImages = Array.from(event.target.files);
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="media-files-preview-containr">
      <BigImage image={images[0]} onDrop={() => onDrop(currentImageSwap)} />
      <div className="media-files-grid">
        {images.slice(1).map((image, index) => (
          <>
            <SmallImage
              key={index}
              image={image}
              setCurrentImageSwap={setCurrentImageSwap}
            />
            <DotsMenu />
          </>
        ))}
        <div className="media-file-add-container" onClick={triggerFileInput}>
          <img src={grayPlus} alt="add" />
          <div className="media-file-add-text">תמונות נוספות</div>
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        multiple
        accept="image/*"
        onChange={handleAddImages}
      />
    </div>
  );
};

export default MediaFilesPreview;
