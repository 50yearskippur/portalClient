import "./Textarea.css";
const Textarea = ({
  style,
  defaultValue,
  placeholder,
  onChange = () => {},
}) => {
  return (
    <textarea
      style={style}
      type="text"
      onChange={onChange}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
  );
};

export default Textarea;
