import "./EduTypes.css";
import {useState} from "react";

const EduTypes = () => {
  const eduTypesTitles = [
    "מסמך",
    "מצגת",
    "סרטון/פלייליסט",
    "לומדה",
    "משחק",
    "אחר",
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
          <div className="edu-type-icon"></div>
          <div className="edu-type-title">{type}</div>
        </div>
      ))}
    </div>
  );
};

export default EduTypes;
