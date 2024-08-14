import pdfFile from '../assets/pdfs/pdfPage.pdf';

export const forms = [
  {
    _id: '0',
    title: 'טופס חופשה חולים',
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

export const formsSubjects = [
  {
    _id: '01',
    title: 'שלישות',
    forms: forms.slice(0, 3),
  },
  {
    _id: '02',
    title: 'ת"ש',
    forms: forms.slice(3, 5),
  },
  {
    _id: '03',
    title: 'יוהל"ם',
    forms: forms.slice(5, 6),
  },
  {
    _id: '04',
    title: 'חינוך',
    forms: forms.slice(6, 8),
  },
  {
    _id: '05',
    title: 'נפגעים',
    forms: [],
  },
  {
    _id: '06',
    title: 'בטיחות',
    forms: forms.slice(-3),
  },
];
