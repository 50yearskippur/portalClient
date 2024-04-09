import {useState, createContext} from "react";

export const PopupContext = createContext({
  isPopupVisible: false,
  showPopup: () => {},
  hidePopup: () => {},
});

export const PopupProvider = ({children}) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const showPopup = (content) => {
    setPopupContent(content);
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };

  return (
    <PopupContext.Provider
      value={{isPopupVisible, showPopup, hidePopup, popupContent}}
    >
      {children}
    </PopupContext.Provider>
  );
};
