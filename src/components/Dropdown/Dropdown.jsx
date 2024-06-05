import "./Dropdown.css";
import dropdownIcon from "../../assets/media/Icons/dropdownIcon.svg";

const Dropdown = () => {
  return (
    <div className="dropdown-container">
      <div>רע"ן</div>
      <img src={dropdownIcon} alt="dropdown" />
    </div>
  );
};

export default Dropdown;
