import "./FormsPage.css";
import PdfPreview from "../components/ItemsComponents/PdfPreview";
import pdf from "../assets/pdfs/pdfPage.pdf";
import Search from "../components/Search/Search";
import SortBySubject from "../components/SortBySubject/SortBySubject";

const DesignTemplatesPage = () => {
  const subjects = [
    {
      title: "מצגות",
      type: "תבניות עיצוב",
      subSubjects: [],
    },
    {
      title: "תעודות",
      type: "תבניות עיצוב",
      subSubjects: [],
    },
    {
      title: "קול קורא",
      type: "תבניות עיצוב",
      subSubjects: [],
    },
    {
      title: "חיילים",
      type: "תבניות עיצוב",
      subSubjects: [],
    },
    {
      title: "מחברות",
      type: "תבניות עיצוב",
      subSubjects: [
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
      ],
    },
    {
      title: "סמלים",
      type: "תבניות עיצוב",
      subSubjects: [],
    },
    {
      title: "אינפוגרפיקות",
      type: "תבניות עיצוב",
      subSubjects: [],
    },
    {
      title: "פונטים",
      type: "תבניות עיצוב",
      subSubjects: [],
    },
    {
      title: "הזמנות",
      type: "תבניות עיצוב",
      subSubjects: [],
    },
    {
      title: "באנרים",
      type: "תבניות עיצוב",
      subSubjects: [],
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
