import { useState, createContext, useEffect, useCallback } from 'react';

export const PopupContext = createContext({
  isPopupVisible: false,
  isEdit: false,
  showPopup: () => {},
  hidePopup: () => {},
  editPopUp: () => {},
  saveDetails: () => {},
});

export const PopupProvider = ({ children }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [itemDetails, setItemDetails] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isPopupVisible ? 'hidden' : 'auto';
  }, [isPopupVisible]);

  useEffect(() => {
    console.log(itemDetails);
  }, [itemDetails]);

  const showPopup = (content) => {
    setPopupContent(content);
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };

  const editPopUp = () => {
    setIsEdit(true);
  };

  const saveDetails = useCallback(
    (newDetails) => {
      setItemDetails((prevDetails) => ({
        ...(!isEdit && prevDetails),
        ...newDetails,
      }));
      setIsEdit(false);
    },
    [isEdit]
  );

  return (
    <PopupContext.Provider
      value={{
        isPopupVisible,
        isEdit,
        showPopup,
        hidePopup,
        popupContent,
        itemDetails,
        setItemDetails,
        editPopUp,
        saveDetails,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};
