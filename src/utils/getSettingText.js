const getSettingText = (pageType) => {
  switch (true) {
    case pageType === 'תוצרים':
      return {
        isHeadphonesNeeded: 'התוצר מצריך שימוש באמצעי שמע',
        isRecomennded:
          'התוצר יהיה חלק ממאגר המומלצים ליחידות והקורסים הרלוונטיים',
        isPrimaryEduResourse: 'התוצר יהיה ראשי תחת תת הנושא',
        isValidated: 'התוצר נבדק, המידע בו עדכני ומאושר ע”י גורם המקצועי',
        isShareable: 'תוצר זה יכול לשמש קורסים אחרים',
      };
    case pageType === 'טפסים':
      return {
        isRecomennded: 'הטופס יופיע בטפסים נפוצים',
      };
    case pageType === 'אלבום':
      return {
        isRecomennded: 'האלבום יופיע במומלצים',
      };
    default:
      return;
  }
};

export default getSettingText;
