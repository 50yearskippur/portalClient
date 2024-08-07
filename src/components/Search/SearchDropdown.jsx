import "./SearchDropdown.css";
import "../Dropdown/Dropdown.css";
import { useState, useEffect } from "react";
// import { PopupContext } from "../../store/popup-context";
import SearchIcon from "../../assets/media/Icons/search.svg";
import dropdownIcon from "../../assets/media/Icons/dropdownIcon.svg";
import removeIcon from "../../assets/media/Icons/exitIcon.svg";
import React from "react";

const SearchDropdown = ({ options, placeholder }) => {
  // const { setItemDetails } = useContext(PopupContext);

  const [input, setInput] = useState("");
  const [optionsAfterSelect, setOptionsAfterSelect] = useState(options);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(optionsAfterSelect);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    if (isOpen) {
      setFilteredOptions(optionsAfterSelect);
    }
  }, [isOpen, optionsAfterSelect]);

  // useEffect(() => {
  //   setItemDetails((prevDetails) => ({
  //     ...prevDetails,
  //     [fieldName]: selectedOptions,
  //   }));
  // }, [selectedOptions, fieldName]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setIsOpen(true);
    setInput(value);
    if (value) {
      const filtered = optionsAfterSelect.filter((option) =>
        option.includes(value)
      );
      setFilteredOptions(filtered);
    } else if (value.trim().length === 0) {
      setFilteredOptions(optionsAfterSelect);
    } else {
      setFilteredOptions([]);
    }
  };

  const handleOptionClick = (option) => {
    setOptionsAfterSelect((prev) => prev.filter((item) => item !== option));
    setIsOpen(false);
    setSelectedOptions([...selectedOptions, option]);
    setInput("");
    setFilteredOptions([]);
  };

  const handleRemoveOption = (option) => {
    setSelectedOptions(selectedOptions.filter((item) => item !== option));
    setOptionsAfterSelect([...optionsAfterSelect, option]);
  };

  return (
    <div
      className="dropdown-container"
      style={{ width: "100%", height: "25px" }}
    >
      <div className="search-dropdown-container">
        <div className="search-text-container">
          <img src={SearchIcon} alt="search" />
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="search-dropdown-input"
            onFocus={() => setIsOpen(true)}
          />
        </div>
        <img
          src={dropdownIcon}
          alt="dropdown"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
      {optionsAfterSelect.length > 0 && isOpen && (
        <div className="dropdown-list">
          {filteredOptions.map((option) => (
            <div key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
      <div className="selected-options">
        {selectedOptions.map((option) => (
          <div key={option} className="selected-option">
            {option}
            <img
              onClick={() => handleRemoveOption(option)}
              src={removeIcon}
              alt="remove"
              className="selected-options-remove"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchDropdown;
