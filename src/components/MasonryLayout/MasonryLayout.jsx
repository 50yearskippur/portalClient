import React from 'react';
import './MasonryLayout.css';
import FileController from '../Media/FileController';
import { useContext, useEffect } from 'react';
import { PopupContext } from '../../store/popup-context';
import MediaPopup from '../Popup/General/MediaPopup';

const MasonryLayout = ({ data }) => {
  const { showPopup } = useContext(PopupContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="masonry-container">
      {data.files.map((image, index) => (
        <div
          key={`masonry item ${index}`}
          style={{ marginBottom: '2.222vh' }}
          onClick={() =>
            showPopup(
              <MediaPopup
                children={
                  <img
                    className="masonry-item-popup"
                    src={image.media.file}
                    alt="the full size item"
                  />
                }
                item={image}
              />
            )
          }
        >
          <FileController
            showOnHover={true}
            key={`masonry${index}`}
            item={image}
          />
        </div>
      ))}
    </div>
  );
};

export default MasonryLayout;
