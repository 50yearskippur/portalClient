const getDefaultSettings = (fileType) => {
  return [
    fileType !== 'סיכום' && {
      isHeadponesNeeded: fileType === 'סרטון' ? true : false,
    },
    {
      isRecomennded: false,
    },
    {
      isValidated: true,
    },
    { isPrimaryEduResourse: false },
  ];
};

export default getDefaultSettings;
