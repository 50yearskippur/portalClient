import React from 'react';
import { useState, useEffect, useContext, useRef } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import { PopupContext } from '../../../store/popup-context';
import grayPlus from '../../../assets/media/Icons/grayPlus.svg';
import DotsMenu from './DotsMenu';
import './MediaFilesPreview.css';

const rotateImageOnCanvas = (imageFile, callback) => {
  console.log(imageFile);
  const reader = new FileReader();
  reader.readAsDataURL(imageFile);

  reader.onload = function (event) {
    const img = new Image();
    img.src = event.target.result;

    img.onload = function () {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      // Set canvas size to the dimensions of the image, swapping width and height for 90-degree rotation
      canvas.width = img.height;
      canvas.height = img.width;

      // Translate canvas context to the center of the canvas
      ctx.translate(canvas.width / 2, canvas.height / 2);

      // Rotate the canvas 90 degrees
      ctx.rotate((90 * Math.PI) / 180);

      // Draw the image onto the canvas, adjusting position based on rotation
      ctx.drawImage(img, -img.width / 2, -img.height / 2);

      // const fileName = imageFile.name || imageFile.fileName;
      // Convert the canvas back to a file object
      canvas.toBlob((blob) => {
        const rotatedFile = new File([blob], imageFile.name, {
          type: imageFile.type,
          lastModified: Date.now(),
        });
        callback(rotatedFile);
      });
    };
  };
};

const BigImage = ({
  image,
  onDrop,
  handleDeleteImage,
  handleRotateImage,
  isTypeFile,
}) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'image',
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  console.log(image);

  return (
    <div
      ref={drop}
      className="media-file-cover-container"
      style={{
        border: isOver ? '2px solid blue' : '2px solid transparent',
      }}
    >
      {!!image && (
        <>
          <img
            src={isTypeFile ? URL.createObjectURL(image) : image}
            alt="file"
            className="media-file-cover grab"
          />
          <DotsMenu
            handleDeleteImage={handleDeleteImage}
            handleRotateImage={handleRotateImage}
            image={image}
            style={{ right: '23.385vw' }}
          />
        </>
      )}
    </div>
  );
};

const SmallImage = ({
  image,
  index,
  setCurrentImageSwap,
  handleDeleteImage,
  handleRotateImage,
  isTypeFile,
}) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'image',
    item: { index, image },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  useEffect(() => {
    if (isDragging) {
      setCurrentImageSwap(image);
    }
  }, [isDragging, image, setCurrentImageSwap]);

  return (
    <div
      ref={drag}
      className="media-file-container"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <img
        src={isTypeFile ? URL.createObjectURL(image) : image}
        alt="file"
        className="media-file grabbing"
      />
      <DotsMenu
        handleDeleteImage={handleDeleteImage}
        handleRotateImage={handleRotateImage}
        image={image}
      />
    </div>
  );
};

const MediaFilesPreview = ({ files }) => {
  const { saveDetails } = useContext(PopupContext);
  const [images, setImages] = useState(files);
  const [currentImageSwap, setCurrentImageSwap] = useState();
  const fileInputRef = useRef(null);

  useEffect(() => {
    saveDetails({ files: images });
  }, [images, saveDetails]);

  const onDrop = (swapImage) => {
    const indexToSwap = images.findIndex(
      (image) => image.name === swapImage.name
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
    const transformedFiles = newImages.map((file) => ({
      media: { file },
    }));
    setImages((prevImages) => [...prevImages, ...transformedFiles]);
  };

  const handleDeleteImage = (imageToDelete) => {
    console.log(imageToDelete);
    const newImages = images.filter(
      (image) =>
        image.media?.file?.name !== imageToDelete.name ||
        image.media?.file?.fileName !== imageToDelete.fileName
    );
    console.log(newImages);
    setImages(newImages);
  };

  const handleRotateImage = (file) => {
    rotateImageOnCanvas(file, (rotatedFile) => {
      const updatedImages = images.map((image) =>
        image.name === rotatedFile.name ? rotatedFile : image
      );

      setImages(updatedImages);
    });
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="media-files-preview-container">
      <BigImage
        image={images[0].media.file}
        onDrop={() => onDrop(currentImageSwap)}
        handleDeleteImage={handleDeleteImage}
        handleRotateImage={handleRotateImage}
        isTypeFile={images[0].media.file instanceof File}
      />
      <div className="media-files-grid">
        {images.slice(1).map((image, index) => (
          <React.Fragment key={index}>
            <SmallImage
              image={image.media.file}
              index={index}
              setCurrentImageSwap={setCurrentImageSwap}
              handleDeleteImage={handleDeleteImage}
              handleRotateImage={handleRotateImage}
              isTypeFile={image.media.file instanceof File}
            />
            <DotsMenu />
          </React.Fragment>
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
