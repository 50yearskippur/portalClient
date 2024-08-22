const getDefaultSettings = (fileType) => {
  return [
    fileType !== 'סיכום' && {
      isHeadphonesNeeded: fileType === 'סרטון' ? true : false,
    },
    {
      isRecommended: false,
    },
    {
      isValidated: true,
    },
    { isPrimaryEduResourse: false },
  ].filter(Boolean);
};

export default getDefaultSettings;
