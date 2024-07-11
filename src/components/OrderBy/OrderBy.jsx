// src/DropdownMenu.js
import React, { useState } from "react";
import "react-dropdown/style.css";
import sortIcon from "../../assets/media/Icons/sortIcon.svg";
import vicon from "../../assets/media/Icons/Vicon.png";

import "./OrderBy.css";

const OrderBy = () => {
  const options = [
    { value: "date", label: "תאריך הוספה" },
    { value: "alphabet", label: "א - ת" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggleDropdown = () => {
    console.log("hi");
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div
      style={{ width: selected ? "10vw" : "8vw" }}
      className="drop-down-container"
    >
      <div onClick={toggleDropdown} className="admin-order-by">
        <img alt="order-by" src={sortIcon} />
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <div
              key={option.value}
              className={`dropdown-item ${
                selected?.value === option.value ? "selected" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
              {selected?.value === option.value && (
                <img src={vicon} alt={"check-mark"} className="check-mark" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderBy;
