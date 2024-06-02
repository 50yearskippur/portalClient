import "./EduResPrev.css";
import FileController from "../Media/FileController";
import point from "../../assets/media/Icons/blackPoint.svg";
// delete in ptoduction
import rabit from "../../assets/img/party.png";

const EduResPrev = ({ item }) => {
  return (
    <div className="edu-prev-container">
      <FileController
        item={{
          title: "ארנב",
          type: "חיה",
          subSubject: {
            title: "כותרת",
          },
          media: rabit,
          mediaType: "image",
          uploadByArtech: false,
        }}
        style={{ width: "8.6vw", borderRadius: "10px" }}
      />
      <div className="edu-prev-deatails-container">
        <div className="edu-prev-title">{`זירת סוריה, פלייליסט`}</div>
        <div className="edu-prev-deatails">
          <div className="edu-prev-info">28.5.2024</div>
          <img src={point} alt="black point" />
          <div className="edu-prev-info">רמה בסיסית</div>
        </div>
      </div>
    </div>
  );
};

export default EduResPrev;
