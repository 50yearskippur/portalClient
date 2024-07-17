import "./Button.css";

const Button = ({
  text,
  style,
  isWhiteButton = false,
  disabled = false,
  onClick = () => {},
}) => {
  const onClickHandler = () => {
    if (disabled) return;
    return onClick();
  };

  return (
    <div
      className={`button ${disabled && "disabled"}`}
      style={{
        ...style,
        background: isWhiteButton && "white",
        border: isWhiteButton && "1.5px solid #6C60FF",
      }}
      onClick={onClickHandler}
    >
      <p
        className="text-button"
        style={{
          background:
            isWhiteButton &&
            "linear-gradient(127deg, #6c60ff 18.87%, #3b2ed1 71.49%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: isWhiteButton && "transparent",
          display: "inline",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default Button;
