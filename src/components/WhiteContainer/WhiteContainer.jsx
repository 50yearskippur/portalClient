import "./WhiteContainer.css";

const WhiteContainer = ({ children, style }) => {
  console.log(children);
  return (
    <div className="white-container" style={style}>
      {children}
    </div>
  );
};

export default WhiteContainer;
