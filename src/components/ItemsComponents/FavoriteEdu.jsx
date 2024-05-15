import "./FavoriteEdu.css";
import { useState } from "react";
import FileController from "../Media/FileController";
import heartImg from "../../assets/media/Icons/heart.png";
import addImg from "../../assets/media/Icons/addIcon.svg";

const FavotireEdu = ({ item }) => {
  const [addBtnHover, setAddBtnHover] = useState(false);

  return (
    <div className="favorite-edu-container">
      <FileController item={item} />
      <div className="favorite-edu-info">
        <div className="favorite-edu-content">
          {/* <div className="favorite-edu-title">
            <div className="favorite-edu-title">{item.title}</div>
            <div className="favorite-edu-title">|</div>
            <div>{item.type}</div>
          </div>
          <div>{item.subSubject.title}</div> */}
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
