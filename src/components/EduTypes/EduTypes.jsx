import "./EduTypes.css";
import { useState, useContext } from "react";
import { PopupContext } from "../../store/popup-context";

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

  return (
    <div
      className="edu-types-container"
      style={{
        gridTemplateColumns: `repeat(auto-fill, minmax(${
          (100 - (numberOfItemsInLine - 1) * 5) / numberOfItemsInLine
        }%, 1fr))`,
      }}
    >
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
