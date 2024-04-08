import "./Popup.css";
import React from "react";
import {useContext} from "react";
import {PopupContext} from "../../store/popup-context";

const Popup = () => {
  const {hidePopup, isPopupVisible, popupContent} = useContext(PopupContext);

  return (
    <>
      {isPopupVisible && (
        <div className="popup-overlay" onClick={() => hidePopup()}>
          <div className="popup-content">{popupContent}</div>
        </div>
      )}
    </>
  );
};

export default Popup;
