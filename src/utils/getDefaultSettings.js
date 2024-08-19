import settingArray from '../store/settingsArray';

const getDefaultSettings = (fileType) => {
  switch (true) {
    case fileType === 'סיכום':
      return [
        {
          text: settingArray.isRecomennded,
          defaultValue: false,
        },
        {
          text: settingArray.isPrimaryEduResourse,
          defaultValue: false,
        },
        {
          text: settingArray.isValidated,
          defaultValue: true,
        },
      ];
    case fileType === 'מצגת' ||
      fileType === 'לומדה' ||
      fileType === 'סרטון' ||
      fileType === 'משחק':
      return [
        {
          text: settingArray.isHeadponesNeeded,
          defaultValue: fileType === 'סרטון' ? true : false,
        },
        {
          text: settingArray.isRecomennded,
          defaultValue: false,
        },
        {
          text: settingArray.isValidated,
          defaultValue: true,
        },
        { text: settingArray.isPrimaryEduResourse, defaultValue: false },
      ];
    default:
      return;
  }
};

export default getDefaultSettings;
