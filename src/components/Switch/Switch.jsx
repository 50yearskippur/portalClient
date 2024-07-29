import Switch from "react-switch";
import { useState } from "react";

const SwitchComponent = ({
  defaultChecked = false,
  changeSetting = () => {},
  style = {
    width: 39,
    height: 16,
    onColor: "#42C8A0",
    offColor: "#C2C6CC",
    handleDiameter: 10,
  },
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleToggle = () => {
    setChecked((prev) => !prev);
    changeSetting();
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
