import "./FavoriteEdu.css";
import { useState } from "react";
import FileController from "../Media/FileController";
import heartImg from "../../assets/media/Icons/heart.png";
import addImg from "../../assets/media/Icons/addIcon.svg";

const FavotireEdu = ({ item }) => {
  const [addBtnHover, setAddBtnHover] = useState(false);

  return (
    <div className="favorite-edu-container">
      <FileController
        item={item}
        style={{ bordeRradius: "8.647px", height: "25.4vh" }}
      />
      <div className="favorite-edu-info">
        <div className="favorite-type-container">
          <div className="favorite-type">{item.type}</div>
          <div className="favorite-type">{item.subSubject.title}</div>
        </div>
        <div className="favorite-icons-container">
          <div className="favorite-icon-container">
            <img src={heartImg} alt="heart icon" />
          </div>
          <div
            className="favorite-icon-container"
            style={{ width: addBtnHover && "fit-content" }}
            onMouseOver={() => setAddBtnHover(true)}
            onMouseLeave={() => setAddBtnHover(false)}
          >
            {addBtnHover ? (
              <div className="favorite-add-container">
                <img src={addImg} alt="add icon" />
                <div className="favorite-add-text">הוספה לקורס שלי</div>
              </div>
            ) : (
              <img src={addImg} alt="add icon" />
            )}
          </div>
        </div>
        <div className="favorite-edu-title">{item.title}</div>
      </div>
    </div>
  );
};

export default FavotireEdu;
