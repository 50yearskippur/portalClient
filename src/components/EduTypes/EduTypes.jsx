import "./EduTypes.css";
import { useState, useContext } from "react";
import { PopupContext } from "../../store/popup-context";

const EduTypes = ({ eduTypesTitles }) => {
  const [activeIndex, setActiveIndex] = useState();
  const { setItemDetails } = useContext(PopupContext);

  const selectTypeHandler = (index, type) => {
    setActiveIndex(index);
    setItemDetails((prevDetails) => ({
      ...prevDetails,
      type: type,
    }));
  };

  return (
    <div className="edu-types-container">
      {eduTypesTitles.map((type, index) => (
        <div
          key={`eduType${index}`}
          className={`edu-container ${activeIndex === index && "edu-active"}`}
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
