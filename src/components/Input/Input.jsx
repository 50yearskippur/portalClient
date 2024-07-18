import "./Input.css";

const Input = ({ style, valu, onChange }) => {
  return (
    <input
      type="text"
      className="input"
      value={subSubjectName}
      onChange={(e) => setSubSubjectName(e.target.value)}
    />
  );
};

export default Input;
