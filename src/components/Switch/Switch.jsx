import Switch from "react-switch";
import { useState } from "react";

const SwitchComponent = ({
  defaultChecked = false,
  style = {
    width: 39,
    height: 16,
    onColor: "#42c8a0",
    offColor: "#f2f4fa",
    handleDiameter: 10,
  },
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleToggle = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleToggle}
      onColor={style.onColor}
      offColor={style.offColor}
      uncheckedIcon={false}
      checkedIcon={false}
      height={style.height}
      width={style.width}
      handleDiameter={style.handleDiameter}
    />
  );
};

export default SwitchComponent;
