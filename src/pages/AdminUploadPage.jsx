import "./AdminUploadPage.css";
import { useState } from "react";
import TopSection from "../components/TopSection/TopSection";
import EduType from "../components/Admin/Upload/EduType";
import Files from "../components/Admin/Upload/Files";
import Details from "../components/Admin/Upload/Details";
import Setting from "../components/Admin/Upload/Setting";

const Upload = () => {
  const stagesArray = [
    { title: "סוג תוצר", component: <EduType /> },
    { title: "קבצים", component: <Files /> },
    { title: "פרטים", component: <Details /> },
    { title: "הגדרות", component: <Setting /> },
  ];
  const [currentStage, setCurrentStage] = useState(stagesArray[0].title);

  return (
    <div className="admin-upload-container">
      <TopSection navigateTo={"/admin"} title="העלאת תוצר" />
      <div className="upload-stages-container">
        {stagesArray.map((stage, index) => (
          <div key={`stage ${index}`} className="stage-white-container">
            <div
              className="stage-header"
              onClick={() => setCurrentStage(stage.title)}
            >
              <div
                className={`stage-number ${
                  currentStage === stage.title && "current"
                } `}
              >
                {index + 1}
              </div>
              <div
                className={`stage-title ${
                  currentStage === stage.title && "current"
                }`}
              >
                {stage.title}
              </div>
            </div>
            {currentStage === stage.title && stage.component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upload;
