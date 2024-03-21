import "./TitlesList.css";

const TitlesList = ({ titlesArray, selectedTitle }) => {
  return (
    <div className="titles-list-container">
      {titlesArray.map((title) => {
        return (
          <div>
            <div></div>
            <div>{title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TitlesList;
