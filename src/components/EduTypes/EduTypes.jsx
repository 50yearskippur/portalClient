import "./EduTypes.css";
import { useState } from "react";
import document from "../../assets/media/Upload/document.svg";
import game from "../../assets/media/Upload/game.svg";
import other from "../../assets/media/Upload/other.svg";
import presentation from "../../assets/media/Upload/presentation.svg";
import storyline from "../../assets/media/Upload/storyline.svg";
import video from "../../assets/media/Upload/video.svg";

const EduTypes = () => {
  const eduTypesTitles = [
    { text: "מסמך", img: document },
    { text: "מצגת", img: game },
    { text: "סרטון/פלייליסט", img: video },
    { text: "לומדה", img: presentation },
    { text: "משחק", img: storyline },
    { text: "אחר", img: other },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="edu-types-container">
      {eduTypesTitles.map((type, index) => (
        <div
          key={`eduType${index}`}
          className={`edu-container ${activeIndex === index && "edu-active"}`}
          onClick={() => setActiveIndex(index)}
        >
          <img
            src={type.img}
            alt="edu icon"
            className="edu-type-icon"
            style={{
              opacity: `${activeIndex === index ? "" : "0.3"}`,
            }}
          />
          <div className="edu-type-title">{type.text}</div>
        </div>
      ))}
    </div>
  );
};

export default EduTypes;
