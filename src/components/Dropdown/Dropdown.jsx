import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';
import dropdownIcon from '../../assets/media/Icons/dropdownIcon.svg';
import vIcon from '../../assets/media/Icons/v.svg';
import warningIcon from '../../assets/media/Upload/warning.svg';
import { PopupContext } from '../../store/popup-context';

const Dropdown = ({
  list,
  onNewSubClick,
  style,
  defaultValue,
  fieldName,
  onSelect,
}) => {
  const { setItemDetails, itemDetails } = useContext(PopupContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    itemDetails[fieldName] || defaultValue
  );

  const IS_NEW_SUB_SUBJECT = selectedItem === 'תת נושא חדש';

  const saveDetails = (item) => {
    if (onSelect) onSelect(item);
    if (IS_NEW_SUB_SUBJECT) {
      setItemDetails((prevDetails) => ({
        ...prevDetails,
        [fieldName]: item,
      }));
    } else {
      setItemDetails((prevDetails) => ({
        ...prevDetails,
        [fieldName]: item,
        isNewSubSubject: false,
      }));
    }
  };

  const handleSelect = (item) => {
    saveDetails(item);
    setSelectedItem(item);
    setIsOpen(false);
    if (item === 'תת נושא חדש') {
      onNewSubClick(item);
    }
  };

  return (
    <div
      className="dropdown-container"
      onClick={() => setIsOpen((prev) => !prev)}
      style={style}
    >
      <div className="dropdown-item-container no-hover">
        <div className="dropdown-item-warning">
          <div className="dropdown-input-text">
            {IS_NEW_SUB_SUBJECT ? itemDetails['subSubject'] : selectedItem}
          </div>
          {itemDetails['isNewSubSubject'] && IS_NEW_SUB_SUBJECT && (
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
                  className={`dropdown-text ${item === 'תת נושא חדש' && 'new'}`}
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

Dropdown.propTypes = {
  list: PropTypes.array.isRequired,
  onNewSubClick: PropTypes.func,
  style: PropTypes.object,
  defaultValue: PropTypes.string,
  fieldName: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
};

export default Dropdown;
