import "./EduTypes.css";
import { useState } from "react";
import eduTypesTitles from "../../constants/eduTypes";

const EduTypes = () => {
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
