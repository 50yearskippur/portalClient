import pdfFile from '../assets/pdfs/pdfPage.pdf';

export const forms = [
  {
    _id: '0',
    title: 'טופס חולים',
    settings: [{ isRecommended: true }],
    file: { media: { file: pdfFile, MimeType: 'pdf', fileName: 'מסמך' } },
  },
  {
    _id: '1',
    title: 'טופס חו"ל',
    settings: [{ isRecommended: false }],
    file: { media: { file: pdfFile, MimeType: 'pdf', fileName: 'מסמך' } },
  },
  {
    _id: '2',
    title: 'טופס טיולים',
    settings: [{ isRecommended: true }],
    file: { media: { file: pdfFile, MimeType: 'pdf', fileName: 'מסמך' } },
  },
  {
    _id: '3',
    title: 'טופס חופשה',
    settings: [{ isRecommended: true }],
    file: { media: { file: pdfFile, MimeType: 'pdf', fileName: 'מסמך' } },
  },
  {
    _id: '4',
    title: 'טופס נשק',
    settings: [{ isRecommended: true }],
    file: { media: { file: pdfFile, MimeType: 'pdf', fileName: 'מסמך' } },
  },
  {
    _id: '5',
    title: 'פורמט ריאיון ת"ש',
    settings: [{ isRecommended: false }],
    file: { media: { file: pdfFile, MimeType: 'pdf', fileName: 'מסמך' } },
  },
  {
    _id: '6',
    title: 'טופס אימוץ קיפוד',
    settings: [{ isRecommended: true }],
    file: { media: { file: pdfFile, MimeType: 'pdf', fileName: 'מסמך' } },
  },
  {
    _id: '7',
    title: 'הרשמה לקייטנה',
    settings: [{ isRecommended: false }],
    file: { media: { file: pdfFile, MimeType: 'pdf', fileName: 'מסמך' } },
  },
  {
    _id: '8',
    title: 'ויתור ת"ש',
    settings: [{ isRecommended: true }],
    file: { media: { file: pdfFile, MimeType: 'pdf', fileName: 'מסמך' } },
  },
  {
    _id: '9',
    title: 'נוהל פנייה לשלישות',
    settings: [{ isRecommended: true }],
    file: { media: { file: pdfFile, MimeType: 'pdf', fileName: 'מסמך' } },
  },
  {
    _id: '10',
    title: 'מש"ק ת"ש',
    settings: [{ isRecommended: false }],
    file: { media: { file: pdfFile, MimeType: 'pdf', fileName: 'מסמך' } },
  },
  {
    _id: '11',
    title: 'פנייה לשק"ם',
    settings: [{ isRecommended: false }],
    file: { media: { file: pdfFile, MimeType: 'pdf', fileName: 'מסמך' } },
  },
];

export default forms;
