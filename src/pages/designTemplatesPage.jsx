import "./FormsPage.css";
import PdfPreview from "../components/ItemsComponents/PdfPreview";
import pdf from "../assets/pdfs/pdfPage.pdf";
import Search from "../components/Search/Search";
import SortBySubject from "../components/SortBySubject/SortBySubject";

const DesignTemplatesPage = () => {
  const subjects = [
    {
      title: "טפסים נפוצים",
      type: "טפסים",
      subSubject: [],
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
      subSubject: [],
    },
    {
      title: 'רס"ר',
      type: "טפסים",
      subSubject: [],
    },
    {
      title: "רכב",
      type: "טפסים",
      subSubject: [],
    },
    {
      title: "שלמיה",
      type: "טפסים",
      subSubject: [],
    },
    {
      title: "רבנות",
      type: "טפסים",
      subSubject: [],
    },
    {
      title: 'אג"מ',
      type: "טפסים",
      subSubject: [],
    },
    {
      title: "בטיחות",
      type: "טפסים",
      subSubject: [],
    },
  ];

  const subSubjects = [
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: pdf,
      mediaType: "pdf",
    },
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: pdf,
      mediaType: "pdf",
    },
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: pdf,
      mediaType: "pdf",
    },
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: pdf,
      mediaType: "pdf",
    },
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: pdf,
      mediaType: "pdf",
    },
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: pdf,
      mediaType: "pdf",
    },
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: pdf,
      mediaType: "pdf",
    },
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: pdf,
      mediaType: "pdf",
    },
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: pdf,
      mediaType: "pdf",
    },
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: pdf,
      mediaType: "pdf",
    },
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: pdf,
      mediaType: "pdf",
    },
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: pdf,
      mediaType: "pdf",
    },
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: pdf,
      mediaType: "pdf",
    },
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: pdf,
      mediaType: "pdf",
    },
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: pdf,
      mediaType: "pdf",
    },
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: pdf,
      mediaType: "pdf",
    },
    {
      title: "ארנב",
      type: "חיה",
      subSubject: {
        title: "יונקים",
      },
      media: pdf,
      mediaType: "pdf",
    },
  ];

  return (
    <div className="page-container">
      <div className="form-page-top">
        <div className="header">תבניות עיצוב</div>
        <Search
          style={{ width: "21.17vw", height: "3.38vh", marginTop: "1.4vh" }}
        />
      </div>
      <SortBySubject
        numberOfItemsInLine={3}
        subjects={subjects}
        subSubjectsArray={subSubjects}
        ItemComponent={PdfPreview}
      />
    </div>
  );
};

export default DesignTemplatesPage;
