import React, { useState } from "react";
import "./Dropdown.css";
import dropdownIcon from "../../assets/media/Icons/dropdownIcon.svg";
import vIcon from "../../assets/media/Icons/v.svg";

const Dropdown = ({ list, onNewSubClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(list[0]);

  const handleSelect = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    if (item === "תת נושא חדש" || item === "נושא חדש") {
      onNewSubClick(item);
    }
  };

  return (
    <div
      className="dropdown-container"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="dropdown-item-container">
        <div className="dropdown-input-text">{selectedItem}</div>
        <img alt="dropdown" src={dropdownIcon} />
      </div>
      {isOpen && (
        <div
          className="dropdown-list"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {list.map((item, index) => (
            <React.Fragment key={index}>
              {index === list.length - 1 && <hr className="dropdown-divider" />}
              <div
                className={`dropdown-item-container ${
                  (item === "תת נושא חדש" || item === "נושא חדש") && "selected"
                }`}
                onClick={() => handleSelect(item)}
              >
                <div
                  className={`dropdown-text ${
                    selectedItem === item && "selected"
                  }`}
                >
                  {item}
                </div>
                {item === selectedItem && (
                  <img alt="v icon" src={vIcon} className="check-mark" />
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
