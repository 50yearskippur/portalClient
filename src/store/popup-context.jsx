import {useState, createContext} from "react";

export const PopupContext = createContext();

export const PopupProvider = ({children}) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const showPopup = () => {
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };

  return (
    <PopupContext.Provider value={{isPopupVisible, showPopup, hidePopup}}>
      {children}
    </PopupContext.Provider>
  );
};
