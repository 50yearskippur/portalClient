import "./Rate.css";

const Rate = ({ imageSrc, style, numOfStars, clickable }) => {
  return (
    <div className="rate-container">
      {Array.from({ length: numOfStars }).map((_, index) => (
        <img src={imageSrc} style={style} alt={`star${index}`} key={index} />
      ))}
    </div>
  );
};

export default Rate;
