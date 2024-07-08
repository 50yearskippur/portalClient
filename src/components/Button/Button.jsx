import "./Button.css";

const Button = ({
  text,
  style,
  isDarkMode = false,
  disabled = false,
  onClick,
}) => {
  const onClickHandler = () => {
    if (disabled) return;
    return onClick();
  };

  return (
    <div
      className={`button ${disabled && "disabled"}`}
      style={{ ...style, backgroundColor: isDarkMode && "#686868" }}
      onClick={onClickHandler}
    >
      <p className="text-button" style={{ color: isDarkMode && "#FFFFFF" }}>
        {text}
      </p>
    </div>
  );
};

export default Button;
