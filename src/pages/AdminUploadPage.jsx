import "./AdminUploadPage.css";
import { useState } from "react";
import TopSection from "../components/TopSection/TopSection";
import EduType from "../components/Admin/Upload/EduType";
import Files from "../components/Admin/Upload/Files";
import Details from "../components/Admin/Upload/Details";
import Setting from "../components/Admin/Upload/Setting";
import pencilIcon from "../assets/media/Icons/pencil.svg";

const Upload = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [lastOpenedStage, setLastOpenedStage] = useState(1);

  const nextStage = () => {
    setCurrentStage(lastOpenedStage + 1);
    setLastOpenedStage((prevStage) => prevStage + 1);
  };

  const editStage = (stage) => {
    setLastOpenedStage(currentStage - 1);
    setCurrentStage(stage);
  };

  const stagesArray = [
    { title: "סוג מוצר", component: <EduType nextStage={nextStage} /> },
    { title: "קבצים", component: <Files nextStage={nextStage} /> },
    { title: "פרטים", component: <Details nextStage={nextStage} /> },
    { title: "הגדרות", component: <Setting nextStage={nextStage} /> },
  ];

  return (
    <div className="admin-upload-container">
      <TopSection
        navigateTo={"/admin"}
        title="העלאת מוצר חדש"
        exitText="בטל העלאת מוצר"
      />
      <div className="upload-stages-container">
        {stagesArray.map((stage, index) => (
          <div key={stage.title} className="stage-white-container">
            <div className="stage-header">
              <div
                className={`stage-number ${index < currentStage && "current"}`}
              >
                {index + 1}
              </div>
              <div
                className={`stage-title ${index < currentStage && "current"}`}
              >
                {stage.title}
              </div>
              {index < currentStage && (
                <img
                  alt="pencil"
                  src={pencilIcon}
                  className="admin-upload-edit-icon"
                  onClick={() => editStage(index + 1)}
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
