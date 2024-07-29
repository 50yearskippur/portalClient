import "./Textarea.css";
const Textarea = ({ style, placeholder, onChange = () => {} }) => {
  return (
    <textarea
      style={style}
      type="text"
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Textarea;
