import "./FavoriteEdu.css";
import { useState } from "react";
import FileController from "../Media/FileController";
import heartImg from "../../assets/media/Icons/heartBox.svg";
import addImg from "../../assets/media/Icons/addIcon.svg";
import { useNavigate } from "react-router-dom";

const FavoriteEdu = ({ item }) => {
  const [addBtnHover, setAddBtnHover] = useState(false);
  const navigate = useNavigate();

  // Function to handle click on the plus button
  const handlePlusClick = (event) => {
    event.stopPropagation(); // Prevents the event from bubbling up to the parent
    console.log("Plus button clicked");
    // Your logic for plus button click
  };

  return (
    <div
      className="favorite-edu-container"
      onClick={() => navigate("/subSubject", { state: { item } })}
    >
      <FileController
        item={item}
        style={{ borderRadius: "8.647px", height: "25.4vh" }}
      />
      <div className="favorite-edu-info">
        <div className="favorite-type-container">
          <div className="favorite-type">{item.type}</div>
          <div className="favorite-type">{item.subSubject.title}</div>
        </div>
      </div>

      <div className="favorite-icons-container">
        <div className="favorite-icon-container">
          <img src={heartImg} alt="heart icon" className="favorite-heart" />
        </div>
        <div
          className="favorite-icon-container"
          style={{ width: addBtnHover && "fit-content" }}
          onMouseEnter={() => setAddBtnHover(true)}
          onMouseLeave={() => setAddBtnHover(false)}
          onClick={handlePlusClick}
        >
          {addBtnHover ? (
            <div className="favorite-add-container">
              <img src={addImg} alt="add icon" />
              <div className="favorite-add-text">הוספה לקורס המועדף</div>
            </div>
          ) : (
            <img src={addImg} alt="add icon" />
          )}
        </div>
      </div>

      <div className="favorite-edu-title">{item.title}</div>
    </div>
  );
};

export default FavoriteEdu;
