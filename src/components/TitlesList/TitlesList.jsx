import "./TitlesList.css";
import {useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";

const TitlesList = ({titlesArray, showNumbers = false, style}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();
  const [selectedTitle, setSelectedTitle] = useState(
    showNumbers
      ? titlesArray[0]
      : titlesArray.find((p) => p.path === currentPath)?.text
  );

  return (
    <div className="titles-list-container" style={style.containerStyle}>
      {titlesArray.map((title, index) => (
        <div
          className="title-list-row"
          key={`title${index}`}
          onClick={() => setSelectedTitle(title.text)}
        >
          <div
            className="rectangle"
            style={{
              color: title.text === selectedTitle ? "#fff" : "#838383",
              backgroundColor:
                title.text === selectedTitle ? style.color : "#d4d4d4",
            }}
            onClick={() => navigate(title.path)}
          >
            {showNumbers && 2}
          </div>
          <div
            className="title"
            style={{
              color: style.color,
              fontWeight: title.text === selectedTitle ? "700" : "400",
            }}
          >
            {title.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TitlesList;
