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
        <div className="header">טפסים</div>
        <Search
          style={{ width: "21.17vw", height: "3.38vh", marginTop: "1.4vh" }}
        />
      </div>
      <SortBySubject
        subjects={subjects}
        subSubjectsArray={subSubjects}
        ItemComponent={PdfPreview}
      />
      {/* <SubjectsContainer subjects={data} /> */}
      {/* <PageTemplate
        ItemComponent={PdfPreview}
        gridStyle={{
          gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr)`,
          gap: "24px",
        }}
        data={data}
      /> */}
    </div>
  );
};

export default FormPage;
