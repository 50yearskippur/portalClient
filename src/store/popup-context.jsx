import { useState, createContext, useEffect } from 'react';

export const PopupContext = createContext({
  isPopupVisible: false,
  showPopup: () => {},
  hidePopup: () => {},
});

export const PopupProvider = ({ children }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [itemDetails, setItemDetails] = useState({});

  useEffect(() => {
    document.body.style.overflow = isPopupVisible ? 'hidden' : 'auto';
  }, [isPopupVisible]);

  const showPopup = (content) => {
    setPopupContent(content);
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };

  return (
    <PopupContext.Provider
      value={{
        isPopupVisible,
        showPopup,
        hidePopup,
        popupContent,
        itemDetails,
        setItemDetails,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};
