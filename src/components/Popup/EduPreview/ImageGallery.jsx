import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  if (!images || images.length === 0) {
    return <p>No images to display</p>;
  }

  return (
    <div className="image-gallery">
      <div className="image-large">
        <img
          src={images[0].media.file}
          alt="Large preview"
          className="image-grid-large"
        />
      </div>
      <div className="image-grid">
        {images.slice(1).map((image, index) => (
          <div key={index} className="image-grid-item">
            <img
              src={image.media.file}
              alt={`Thumbnail ${index + 1}`}
              className="image-grid"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
