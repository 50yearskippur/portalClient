import React, { useState } from "react";
import "./Dropdown.css";
import dropdownIcon from "../../assets/media/Icons/dropdownIcon.svg";
import vIcon from "../../assets/media/Icons/v.svg";
import warningIcon from "../../assets/media/Upload/warning.svg";

const Dropdown = ({ list, onNewSubClick, style }) => {
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
      style={style}
    >
      <div className="dropdown-item-container">
        <div className="dropdown-item-warning">
          <div
            className={`dropdown-input-text ${
              (selectedItem === "תת נושא חדש" || selectedItem === "נושא חדש") &&
              "new"
            }`}
          >
            {selectedItem}
          </div>
          {(selectedItem === "תת נושא חדש" || selectedItem === "נושא חדש") && (
            <img src={warningIcon} alt="warning" />
          )}
        </div>
        <img alt="dropdown" src={dropdownIcon} />
      </div>
      {isOpen && (
        <div
          className="dropdown-list"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {list.map((item, index) => (
            <React.Fragment key={index}>
              {index === list.length - 1 && onNewSubClick && (
                <hr className="dropdown-divider" />
              )}
              <div
                className="dropdown-item-container"
                onClick={() => handleSelect(item)}
              >
                <div
                  className={`dropdown-text ${
                    (item === "תת נושא חדש" || item === "נושא חדש") && "new"
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
