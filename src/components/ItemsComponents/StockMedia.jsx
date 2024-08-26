import React from 'react';
import './StockMedia.css';
import FileController from '../Media/FileController';
import { useNavigate } from 'react-router-dom';

const StockMedia = ({ item }) => {
  const navigate = useNavigate();

  console.log(item);
  return (
    <div
      className="stock-media-container"
      onClick={() => navigate('/mediaAlbum', { state: { album: item } })}
    >
      <FileController
        item={item.files[0]}
        style={{ height: '7.5vh', borderRadius: '4px' }}
        gradientStyle={{ background: '#18132B99', height: '100%' }}
      />
      <div className="stock-media-overlay">{item.title}</div>
    </div>
  );
};

export default StockMedia;
