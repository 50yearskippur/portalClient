import './AdminUploadPage.css';
import { useState, useContext } from 'react';
import { PopupContext } from '../store/popup-context';
import TopSection from '../components/TopSection/TopSection';
import getUploadStages from '../utils/getUploadStages';
import { useLocation } from 'react-router-dom';
import pencilIcon from '../assets/media/Icons/pencil.svg';
import whiteV from '../assets/media/Icons/whiteV.svg';

const Upload = () => {
  const location = useLocation();
  const pageType = location.state?.pageType;
  const [currentStage, setCurrentStage] = useState(1);
  const { itemDetails, editPopUp } = useContext(PopupContext);

  const nextStage = () => {
    setCurrentStage((prevStage) => prevStage + 1);
  };

  const editStage = (stage, index) => {
    setCurrentStage(index + 1);
    if (stage.title === 'סוג מוצר') editPopUp();
  };

  const stagesArray = getUploadStages(pageType, itemDetails, nextStage);

  return (
    <div className="admin-upload-container">
      <TopSection
        navigateTo={'/admin'}
        title="העלאת תוצר"
        exitText="לעמוד ההעלאות"
      />
      <div className="upload-stages-container">
        {stagesArray.map((stage, index) => (
          <div key={stage.title} className="stage-white-container">
            <div className="stage-header">
              {index + 1 < currentStage ? (
                <img
                  src={whiteV}
                  alt="v"
                  className={
                    stage.title === 'סוג מוצר'
                      ? 'admin-upload-horizontal-v'
                      : undefined
                  }
                />
              ) : (
                <div
                  className={`stage-number ${
                    index < currentStage && 'current'
                  }`}
                >
                  {index + 1}
                </div>
              )}
              <div className="stage-column-header">
                <div
                  className={`stage-title ${
                    index + 1 === currentStage && 'current'
                  }`}
                >
                  {stage.title}
                </div>
                {itemDetails.type &&
                  stage.title === stagesArray[0].title &&
                  index + 1 < currentStage && (
                    <div className="stage-title small">{itemDetails.type}</div>
                  )}
              </div>
              {index + 1 < currentStage && (
                <img
                  alt="pencil"
                  src={pencilIcon}
                  className="admin-upload-edit-icon"
                  onClick={() => editStage(stage, index)}
                />
              )}
            </div>
            {currentStage === index + 1 && stage.component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upload;
