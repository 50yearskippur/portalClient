import "./TitlesList.css";
import {useState} from "react";

const TitlesList = ({titlesArray, style}) => {
  const [selectedTitle, setSelectedTitle] = useState(titlesArray[0]);

  return (
    <div className="titles-list-container" style={style.containerStyle}>
      {titlesArray.map((title, index) => (
        <div
          className="title-list-row"
          key={`title${index}`}
          onClick={() => setSelectedTitle(title)}
        >
          <div
            className="rectangle"
            style={{
              color: title === selectedTitle ? "#fff" : "#838383",
              backgroundColor:
                title === selectedTitle ? style.color : "#d4d4d4",
            }}
          >
            2
          </div>
          <div
            className="title"
            style={{
              color: style.color,
              fontWeight: title === selectedTitle ? "700" : "400",
            }}
          >
            {title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TitlesList;
