const getCredits = (fileType) => {
  switch (true) {
    case fileType === 'סיכום':
      return [{ role: 'כותב הסיכום' }];
    case fileType === 'מצגת' || fileType === 'לומדה':
      return [
        { role: 'כתיבה' },
        { role: 'מומחה תוכן' },
        { role: 'עיצוב גרפי' },
      ];
    case fileType === 'סרטון':
      return [
        { role: 'רת"ח Artech' },
        { role: 'מפקד מו"ח' },
        { role: 'תסריטאי' },
        { role: 'במאי' },
        { role: 'מפיק' },
        { role: 'צלמים' },
        { role: 'עורך' },
        { role: 'מקליט' },
      ];
    case fileType === 'משחק':
      return [
        { role: 'רת"ח Artech' },
        { role: 'רמ"ד פיתוח' },
        { role: 'רש"צים' },
        { role: 'אפיון' },
        { role: 'פיתוח' },
        { role: 'עיצוב גרפי' },
        { role: 'מידול תלת מימד' },
        { role: 'מומחה תוכן' },
        { role: 'פרויקטור' },
      ];
    default:
      return;
  }
};

export default getCredits;
