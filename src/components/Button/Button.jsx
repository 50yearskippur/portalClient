import "./Button.css";

const Button = ({ text, isDarkMode = false, onClick }) => {
  return (
    <div
      className="button"
      style={{ backgroundColor: isDarkMode && "#686868" }}
      onClick={onClick && onClick}
    >
      {/* <div className="rectangle" style={{ backgroundColor: "#D9D9D9" }} /> */}
      <p className="text-button" style={{ color: isDarkMode && "#FFFFFF" }}>
        {text}
      </p>
    </div>
  );
};

export default Button;
