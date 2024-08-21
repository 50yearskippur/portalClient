const getDefaultSettings = (fileType) => {
  return [
    fileType !== 'סיכום' && {
      isHeadphonesNeeded: fileType === 'סרטון' ? true : false,
    },
    {
      isRecomennded: false,
    },
    {
      isValidated: true,
    },
    { isPrimaryEduResourse: false },
  ].filter(Boolean);
};

export default getDefaultSettings;
