import "./Button.css";

const Button = ({ text }) => {
  return (
    <div className="button">
      <div className="rectangle" style={{ backgroundColor: "#D9D9D9" }} />
      <p className="text-button">{text}</p>
    </div>
  );
};

export default Button;
