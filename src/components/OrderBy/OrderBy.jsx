// src/DropdownMenu.js
import React, { useState } from 'react';
import sortIcon from '../../assets/media/Icons/sortIcon.svg';
import selectedSortDown from '../../assets/media/Icons/blueSortDown.svg';
import selectedSortUp from '../../assets/media/Icons/blueSortUp.svg';
import sortUp from '../../assets/media/Icons/sortUp.svg';
import './OrderBy.css';

const OrderBy = ({ options, onSelect }) => {
  const sortBottons = [
    {
      value: 'orderbyup',
      label: 'סדר עולה',
      icon: sortUp,
      selectedicon: selectedSortUp,
    },
    {
      value: 'orderbydown',
      label: 'סדר יורד',
      icon: sortIcon,
      selectedicon: selectedSortDown,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelected(option);
    if (onSelect) {
      onSelect(option);
    }
    // setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="order-by-container">
      <div onClick={toggleDropdown} className="admin-order-by">
        <img alt="order-by" src={sortIcon} />
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <div
              key={option.value}
              className={`dropdown-item ${
                selected?.value === option.value ? 'selected' : ''
              }`}
              onClick={() => handleSelect(option)}
            >
              {selected?.value === option.value ? (
                <img
                  src={option?.selectedicon}
                  alt={'check-mark'}
                  className="check-icon"
                />
              ) : (
                <img
                  src={option?.icon}
                  alt={'check-mark'}
                  className="check-icon"
                />
              )}
              {option.label}
            </div>
          ))}
          <div className={'dropdown-item'}>
            {sortBottons.map((option) => (
              <div
                key={option.value}
                className={`dropdown-sort-item ${
                  selected?.value === option.value ? 'selected' : ''
                }`}
                onClick={() => handleSelect(option)}
              >
                {selected?.value === option.value ? (
                  <img
                    src={option?.selectedicon}
                    alt={'check-mark'}
                    className="sort-icon"
                  />
                ) : (
                  <img
                    src={option?.icon}
                    alt={'check-mark'}
                    className="sort-icon"
                  />
                )}
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderBy;
