const getDefaultSettings = (fileType) => {
  switch (true) {
    case fileType === 'סיכום':
      return [
        {
          isRecomennded: false,
        },
        {
          isPrimaryEduResourse: false,
        },
        {
          isValidated: true,
        },
      ];
    case fileType === 'מצגת' ||
      fileType === 'לומדה' ||
      fileType === 'סרטון' ||
      fileType === 'משחק':
      return [
        {
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
    default:
      return;
  }
};

export default getDefaultSettings;
