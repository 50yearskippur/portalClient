import "./FormsPage.css";
// import PageTemplate from "../components/PageTemplate/PageTemplate";
import PdfPreview from "../components/ItemsComponents/PdfPreview";
import pdf from "../assets/pdfs/pdfPage.pdf";
import Search from "../components/Search/Search";
import SortBySubject from "../components/SortBySubject/SortBySubject";

const FormPage = () => {
  const subjects = [
    {
      title: "טפסים נפוצים",
      type: "טפסים",
      subSubject: [
        {
          title: "ארנב",
          type: "חיה",
          subSubject: {
            title: 'יוהל"ם',
          },
          media: pdf,
          mediaType: "pdf",
        },
        {
          title: "ארנב",
          type: "חיה",
          subSubject: {
            title: "חינוך",
          },
          media: pdf,
          mediaType: "pdf",
        },
        {
          title: "ארנב",
          type: "חיה",
          subSubject: {
            title: "שלישות",
          },
          media: pdf,
          mediaType: "pdf",
        },
      ],
    },
    {
      title: "שלישות",
      type: "טפסים",
      subSubject: [],
    },
    {
      title: 'ת"ש',
      type: "טפסים",
      subSubject: [],
    },
    {
      title: 'יוהל"ם',
      type: "טפסים",
      subSubject: [],
    },
    {
      title: "חינוך",
      type: "טפסים",
      subSubject: [],
    },
    {
      title: "נפגעים",
      type: "טפסים",
      subSubject: [
        {
          title: "ארנב",
          type: "חיה",
          subSubject: {
            title: 'נפגעים',
          },
          media: pdf,
          mediaType: "pdf",
        },
        {
          title: "ארנב",
          type: "חיה",
          subSubject: {
            title: "נפגעים",
          },
          media: pdf,
          mediaType: "pdf",
        },
      ],
    },
    {
      title: 'רס"ר',
      type: "טפסים",
      subSubject: [
        {
          title: "ארנב",
          type: "חיה",
          subSubject: {
            title: 'רס"ר',
          },
          media: pdf,
          mediaType: "pdf",
        },
      ],
    },
    {
      title: "רכב",
      type: "טפסים",
      subSubject: [
        {
          title: "ארנב",
          type: "חיה",
          subSubject: {
            title: "רכב",
          },
          media: pdf,
          mediaType: "pdf",
        },
        {
          title: "ארנב",
          type: "חיה",
          subSubject: {
            title: "רכב",
          },
          media: pdf,
          mediaType: "pdf",
        },
        {
          title: "ארנב",
          type: "חיה",
          subSubject: {
            title: "רכב",
          },
          media: pdf,
          mediaType: "pdf",
        },
        {
          title: "ארנב",
          type: "חיה",
          subSubject: {
            title: "רכב",
          },
          media: pdf,
          mediaType: "pdf",
        },
      ],
    },
    {
      title: "שלמיה",
      type: "טפסים",
      subSubject: [
        {
          title: "ארנב",
          type: "חיה",
          subSubject: {
            title: 'שלמיה',
          },
          media: pdf,
          mediaType: "pdf",
        },
        {
          title: "ארנב",
          type: "חיה",
          subSubject: {
            title: "שלמיה",
          },
          media: pdf,
          mediaType: "pdf",
        },
      ],
    },
    {
      title: "רבנות",
      type: "טפסים",
      subSubject: [
        {
          title: "ארנב",
          type: "חיה",
          subSubject: {
            title: "רבנות",
          },
          media: pdf,
          mediaType: "pdf",
        },
        {
          title: "ארנב",
          type: "חיה",
          subSubject: {
            title: "רבנות",
          },
          media: pdf,
          mediaType: "pdf",
        },
      ],
    },
    {
      title: 'אג"מ',
      type: "טפסים",
      subSubject: [
        {
          title: "ארנב",
          type: "חיה",
          subSubject: {
            title: 'אג"מ',
          },
          media: pdf,
          mediaType: "pdf",
        },
        {
          title: "ארנב",
          type: "חיה",
          subSubject: {
            title: 'אג"מ',
          },
          media: pdf,
          mediaType: "pdf",
        },
      ],
    },
    {
      title: "בטיחות",
      type: "טפסים",
      subSubject: [
        {
          title: "בטיחותתתת",
          type: "חיה",
          subSubject: {
            title: "בטיחות",
          },
          media: pdf,
          mediaType: "pdf",
        },
      ],
    },
  ];

  return (
    <div className="page-container">
      <div className="form-page-top">
        <div className="header">טפסים</div>
        <Search
          style={{ width: "21.17vw", height: "3.38vh", marginTop: "1.4vh" }}
        />
      </div>
      <SortBySubject
        numberOfItemsInLine={3}
        subjects={subjects}
        ItemComponent={PdfPreview}
      />
    </div>
  );
};

export default FormPage;
