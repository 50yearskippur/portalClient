import "./SearchDropdown.css";
import "../Dropdown/Dropdown.css";
import { useState, useEffect } from "react";
import SearchIcon from "../../assets/media/Icons/search.svg";
import dropdownIcon from "../../assets/media/Icons/dropdownIcon.svg";
import removeIcon from "../../assets/media/Icons/exitIcon.svg";

const SearchDropdown = ({ options }) => {
  const [input, setInput] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) setFilteredOptions(options);
  }, [isOpen, options]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value) {
      const filtered = options.filter((option) => option.startsWith(value));
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions([]);
    }
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    if (!selectedOptions.includes(option)) {
      setSelectedOptions([...selectedOptions, option]);
      setInput("");
      setFilteredOptions([]);
    }
  };

  const handleRemoveOption = (option) => {
    setSelectedOptions(selectedOptions.filter((item) => item !== option));
  };

  return (
    <div
      className="dropdown-container"
      style={{ width: "100%", height: "40px" }}
    >
      <div className="search-dropdown-container">
        <div className="search-text-container">
          <img src={SearchIcon} alt="search" />
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="בחר תיוגים"
            className="search-dropdown-input"
          />
        </div>
        <img
          src={dropdownIcon}
          alt="dropdown"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
      {(filteredOptions.length > 0 || isOpen) && (
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
