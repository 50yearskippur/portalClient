import "./Popup.css";
import React from "react";
import {useContext} from "react";
import {PopupContext} from "../../store/popup-context";

const Popup = () => {
  const {isPopupVisible, hidePopup, popupContent} = useContext(PopupContext);

  const handlePopupClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {isPopupVisible && (
        <div className="popup-overlay" onClick={hidePopup}>
          <div className="popup-content" onClick={handlePopupClick}>
            {popupContent}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
