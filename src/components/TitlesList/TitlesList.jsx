import "./TitlesList.css";
import {useState} from "react";

const TitlesList = ({titlesArray, style}) => {
  const [selectedTitle, setSelectedTitle] = useState(titlesArray[0]);

  return (
    <div className="titles-list-container" style={style}>
      {titlesArray.map((title, index) => (
        <div
          className="title-list-row"
          key={`title${index}`}
          onClick={() => setSelectedTitle(title)}
        >
          <div
            className="rectangle"
            style={{
              backgroundColor: title === selectedTitle ? "#FFF" : "#d4d4d4",
            }}
          />
          <div
            className="title"
            style={{fontWeight: title === selectedTitle ? "700" : "400"}}
          >
            {title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TitlesList;
