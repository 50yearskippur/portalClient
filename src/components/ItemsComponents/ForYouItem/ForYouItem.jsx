import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FileController from '../../Media/FileController';
import './ForYouItem.css';

const ForYouItem = ({ item }) => {
  const [files, setFiles] = useState(item.eduResource[0].files);
  const navigate = useNavigate();

  useEffect(() => {
    setFiles(item.eduResource[0].files);
  }, [item]);

  return (
    <div className="for-you-item-container">
      <div
        className="for-you-item-details"
        onClick={() => {
          navigate('/subSubject', {
            state: {
              subSubject: item,
            },
          });
        }}
      >
        <FileController
          item={files}
          style={{ width: '8.3vw', borderRadius: '10px', height: '9.6vh' }}
        />
        <div className="for-you-item-content">
          <div className="for-you-item-title">{item.title}</div>
          <div className="for-you-item-description">{item.description}</div>
        </div>
      </div>
      <div className="for-you-item-edu-container">
        {item.eduResource.slice(1, 4).map((edu, index) => (
          <div className="for-you-item-edu-img" key={`edu${index}`}>
            <FileController
              key={`edu${index}`}
              item={edu.files}
              style={{
                width: '4.2vw',
                height: '4.8vh',
                borderRadius: '10px',
              }}
              gradientStyle={{
                height: index === 2 ? '100%' : '0%',
                backgroundColor: index === 2 && '#18132B99',
              }}
            />
            {index === 2 && (
              <div className="for-you-item-edu-number">{`+${
                item.eduResource.length - 3
              }`}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default ForYouItem;
