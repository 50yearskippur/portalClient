import "./Button.css";

const Button = ({ text, style, isDarkMode = false, onClick }) => {
  return (
    <div
      className="button"
      style={{ ...style, backgroundColor: isDarkMode && "#686868" }}
      onClick={onClick && onClick}
    >
      <p className="text-button" style={{ color: isDarkMode && "#FFFFFF" }}>
        {text}
      </p>
    </div>
  );
};

export default Button;
