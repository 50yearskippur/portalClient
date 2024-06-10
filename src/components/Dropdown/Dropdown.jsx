import "./Dropdown.css";
import React, { useState } from "react";
import dropdownIcon from "../../assets/media/Icons/dropdownIcon.svg";
import vIcon from "../../assets/media/Icons/v.svg";

const Dropdown = ({ list }) => {
  console.log(list);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(list[0]);

  return (
    <div className="dropdown-container">
      <div className="dropdown-item-container">
        <div className="dropdown-input-text">{selectedItem}</div>
        <img
          alt="dropdown"
          src={dropdownIcon}
          onClick={() => setIsOpen((prev) => !prev)}
        />
        <div className="dropdown-list">
          {isOpen &&
            list.map((item, index) => (
              <div
                key={`dropdown item ${index}`}
                className={`dropdown-item-container ${
                  selectedItem === item && "selected"
                }`}
                onClick={() => setSelectedItem(item)}
              >
                <div className="dropdown-text">{item}</div>
                {item === selectedItem && <img alt="v icon" src={vIcon} />}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
