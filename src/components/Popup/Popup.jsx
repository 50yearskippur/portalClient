import React from 'react';
import "./Popup.css";
import { useContext } from "react";
import { PopupContext } from "../../store/popup-context";

const Popup = () => {
  const { isPopupVisible, hidePopup, popupContent } = useContext(PopupContext);

  return (
    <>
      {isPopupVisible && (
        <div className="popup-overlay" onClick={hidePopup}>
          {popupContent}
        </div>
      )}
    </>
  );
};

export default Popup;
