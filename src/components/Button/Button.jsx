import "./Button.css";
import React from "react";

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
          color: isWhiteButton && "#3259ff",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default Button;
