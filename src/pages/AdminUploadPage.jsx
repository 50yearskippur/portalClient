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

  const nextStage = () => {
    setCurrentStage((prevStage) => prevStage + 1);
  };

  const settingArray = [
    "התוצר מצריך שימוש באמצעי שמע",
    "התוצר יהיה חלק ממאגר המומלצים ליחידות והקורסים הרלוונטיים",
    "התוצר יהיה התוכן הראשי תחת תת הנושא",
    "התוצר נבדק, המידע בו עדכני ומאושר ע”י גורם המקצועי",
  ];

  const stagesArray = [
    {
      title: "סוג מוצר",
      component: <EduType nextStage={nextStage} />,
    },
    { title: "קבצים", component: <Files nextStage={nextStage} /> },
    { title: "פרטים", component: <Details nextStage={nextStage} /> },
    {
      title: "הגדרות",
      component: <Setting nextStage={nextStage} settings={settingArray} />,
    },
  ];

  return (
    <div className="admin-upload-container">
      <TopSection
        navigateTo={"/admin"}
        title="העלאת תוצר"
        exitText="לעמוד ההעלאות"
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
              {index + 1 < currentStage && (
                <img
                  alt="pencil"
                  src={pencilIcon}
                  className="admin-upload-edit-icon"
                  onClick={() => setCurrentStage(index + 1)}
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
