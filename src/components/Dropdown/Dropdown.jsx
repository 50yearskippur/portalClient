import React, { useState, useContext } from "react";
import "./Dropdown.css";
import dropdownIcon from "../../assets/media/Icons/dropdownIcon.svg";
import vIcon from "../../assets/media/Icons/v.svg";
import warningIcon from "../../assets/media/Upload/warning.svg";
import { PopupContext } from "../../store/popup-context";

const Dropdown = ({ list, onNewSubClick, style, placeholder, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(value ? value : placeholder);
  const { setItemDetails, itemDetails } = useContext(PopupContext);

  const IS_NEW_SUB_SUBJECT = selectedItem === "תת נושא חדש";

  const handleSelect = (item) => {
    if (placeholder === "נושא ראשי") {
      setItemDetails((prevDetails) => ({
        ...prevDetails,
        subject: item,
      }));
    } else if (item !== "תת נושא חדש") {
      setItemDetails((prevDetails) => ({
        ...prevDetails,
        subSubject: item,
        isNewSubSubject: false,
      }));
    }
    setSelectedItem(item);
    setIsOpen(false);
    if (item === "תת נושא חדש") {
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
          <div className="dropdown-input-text">
            {IS_NEW_SUB_SUBJECT ? itemDetails["subSubject"] : selectedItem}
          </div>
          {itemDetails["isNewSubSubject"] && IS_NEW_SUB_SUBJECT && (
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
                  className={`dropdown-text ${item === "תת נושא חדש" && "new"}`}
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
