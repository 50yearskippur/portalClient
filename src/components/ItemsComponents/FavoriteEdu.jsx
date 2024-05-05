import "./FavoriteEdu.css";
import FileController from "../Media/FileController";

const FavotireEdu = ({item}) => {
  return (
    <div className="favorite-edu-conrainer">
      <FileController item={item} />
      <div className="favorite-edu-info">
        <div className="favorite-edu-content">
          <div className="favorite-edu-title">
            <div className="favorite-edu-title">{item.title}</div>
            <div className="favorite-edu-title">|</div>
            <div>{item.type}</div>
          </div>
          <div>{item.subSubject.title}</div>
        </div>
        <div className="favorite-edu-heart"></div>
      </div>
    </div>
  );
};

export default FavotireEdu;
