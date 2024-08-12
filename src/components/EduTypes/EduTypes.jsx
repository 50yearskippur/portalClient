import React, { useState, useContext } from "react";
import { PopupContext } from "../../store/popup-context";
import "./EduTypes.css";

const EduTypes = ({ defaultValue, eduTypesTitles, numberOfItemsInLine }) => {
  const [activeIndex, setActiveIndex] = useState(
    eduTypesTitles.findIndex((item) => item.text === defaultValue)
  );
  const { setItemDetails } = useContext(PopupContext);

  const selectTypeHandler = (index, type) => {
    setActiveIndex(index);
    setItemDetails((prevDetails) => ({
      ...prevDetails,
      type,
    }));
  };

  const calculateColumnWidth = () => {
    const baseWidth = (100 - (numberOfItemsInLine - 1) * 5) / numberOfItemsInLine;
    return `repeat(auto-fill, minmax(${baseWidth}%, 1fr))`;
  };

  return (
    <div className="edu-types-container" style={{ gridTemplateColumns: calculateColumnWidth() }}>
      {eduTypesTitles.map((type, index) => (
        <div
          key={`eduType${index}`}
          className={`edu-container ${
            eduTypesTitles[activeIndex] &&
            (activeIndex !== index ? "edu-not-active" : "edu-active")
          }`}
          onClick={() => selectTypeHandler(index, type.text)}
        >
          <img src={type.img} alt="edu icon" className="edu-type-icon" />
          <div className="edu-type-title">{type.text}</div>
          <div className="edu-type-secondary-title">קובץ מסוג</div>
        </div>
      ))}
    </div>
  );
};

export default EduTypes;
