import "./AdminPage.css";
import { useState, useEffect, useContext } from "react";
import { PopupContext } from "../store/popup-context";
import UploadEduType from "../components/Popup/UploadEdu/UploadEduType";
import Tabs from "../components/Tabs/Tabs";
import Search from "../components/Search/Search";
import TemplateTable from "../components/Admin/GenericObjects/TemplateTable";
import Requests from "../components/Admin/Requests/Requests";
//delete in production
import rabit from "../assets/img/rabit.jpg";

const AdminPage = () => {
  const { showPopup } = useContext(PopupContext);
  const tabsArray = ["תוצרים", "עיצובים", "טפסים", "תמונות ואלבומים"];
  const [selectedTab, setSelectedTab] = useState(tabsArray[0]);
  const [data, setData] = useState([]);

  //delete in production
  const requestsArr = [
    {
      title: "סוריה מאז ועד היום",
      date: "28.5.2024",
      level: "מותאם לכל הרמות",
      creator: "יובל כהן",
    },
    {
      title: "סוריה מאז ועד היום",
      date: "28.5.2024",
      level: "מותאם לכל הרמות",
      creator: "יובל כהן",
    },
    {
      title: "סוריה מאז ועד היום",
      date: "28.5.2024",
      level: "מותאם לכל הרמות",
      creator: "יובל כהן",
    },
  ];

  //delete in production
  const subSubjectsArr = [
    {
      title: "לורם איפסום",
      date: "28.5.2024",
      creator: "יובל כהן",
    },
    {
      title: "לורם איפסום",
      date: "28.5.2024",
      creator: "יובל כהן",
    },
  ];

  useEffect(() => {
    //delete in production
    const eduArr = [
      {
        title: "הכירו את זירת סוריה",
        type: "סרטון",
        date: "28.05.2024",
        subSubject: {
          title: "זירת סוריה",
        },
        subject: { title: "מבואות מודיעין" },
        media: rabit,
        cover: rabit,
        mediaType: "image",
        level: "רמה בסיסית",
        uploadByArtech: true,
        tags: [{ title: "תג 1" }, { title: "תג 2" }],
        info: "משחק שנועד ללמד את צבעי הכומתות בחיילות השונים משחק שנועד ללמד את צבעי הכומתות בחיילות השונים  משחק שנועד ללמד את צבעי הכומתות בחיילות השונים",
        comments: [
          {
            content:
              "אחלה לומדה, לימדה אותי מלא על זירת סוריה איזה כיף. מה שכן נתקע באיזה שהוא שלב, שווה לסדר את זה.",
            date: "28.05.2024",
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
          {
            content:
              "אחלה לומדה, לימדה אותי מלא על זירת סוריה איזה כיף. מה שכן נתקע באיזה שהוא שלב, שווה לסדר את זה.",
            date: "28.05.2024",
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
          {
            content:
              "אחלה לומדה, לימדה אותי מלא על זירת סוריה איזה כיף. מה שכן נתקע באיזה שהוא שלב, שווה לסדר את זה.",
            date: "28.05.2024",
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
          {
            content:
              "אחלה לומדה, לימדה אותי מלא על זירת סוריה איזה כיף. מה שכן נתקע באיזה שהוא שלב, שווה לסדר את זה.",
            date: "28.05.2024",
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
          {
            content:
              "אחלה לומדה, לימדה אותי מלא על זירת סוריה איזה כיף. מה שכן נתקע באיזה שהוא שלב, שווה לסדר את זה.",
            date: "28.05.2024",
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
        ],
      },
      {
        title: "הכירו את זירת סוריה",
        type: "סרטון",
        date: "28.05.2024",
        subSubject: {
          title: "זירת סוריה",
        },
        subject: { title: "מבואות מודיעין" },
        media: rabit,
        cover: rabit,
        mediaType: "image",
        level: "רמה בסיסית",
        uploadByArtech: true,
        tags: [{ title: "תג 1" }, { title: "תג 2" }],
        info: "משחק שנועד ללמד את צבעי הכומתות בחיילות השונים משחק שנועד ללמד את צבעי הכומתות בחיילות השונים  משחק שנועד ללמד את צבעי הכומתות בחיילות השונים",
        comments: [
          {
            content:
              "אחלה לומדה, לימדה אותי מלא על זירת סוריה איזה כיף. מה שכן נתקע באיזה שהוא שלב, שווה לסדר את זה.",
            date: "28.05.2024",
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
          {
            content:
              "אחלה לומדה, לימדה אותי מלא על זירת סוריה איזה כיף. מה שכן נתקע באיזה שהוא שלב, שווה לסדר את זה.",
            date: "28.05.2024",
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
          {
            content:
              "אחלה לומדה, לימדה אותי מלא על זירת סוריה איזה כיף. מה שכן נתקע באיזה שהוא שלב, שווה לסדר את זה.",
            date: "28.05.2024",
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
          {
            content:
              "אחלה לומדה, לימדה אותי מלא על זירת סוריה איזה כיף. מה שכן נתקע באיזה שהוא שלב, שווה לסדר את זה.",
            date: "28.05.2024",
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
          {
            content:
              "אחלה לומדה, לימדה אותי מלא על זירת סוריה איזה כיף. מה שכן נתקע באיזה שהוא שלב, שווה לסדר את זה.",
            date: "28.05.2024",
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
        ],
      },
    ];

    const designsArr = [
      {
        title: "תבניות עיצוב 1",
        type: "מצגת",
        date: "28.05.2024",
        media: rabit,
        cover: rabit,
        mediaType: "image",
      },
      {
        title: "תבניות עיצוב 2",
        type: "מסמך",
        date: "28.05.2024",
        media: rabit,
        cover: rabit,
        mediaType: "image",
      },
    ];

    const formsArr = [
      {
        title: "טפסים 1",
        type: "מצגת",
        date: "28.05.2024",
        tag: { title: "שלישות" },
        media: rabit,
        cover: rabit,
        mediaType: "image",
      },
      {
        title: "טפסים 2",
        type: "מסמך",
        date: "28.05.2024",
        tag: { title: "נשקייה" },
        media: rabit,
        cover: rabit,
        mediaType: "image",
      },
    ];

    const mediaArr = [
      {
        title: "הרמת כוסית לראש השנה",
        type: "מצגת",
        date: "28.05.2024",
        media: rabit,
        cover: rabit,
        mediaType: "image",
      },
      {
        title: "פורים 2024",
        type: "מסמך",
        date: "28.05.2024",
        media: rabit,
        cover: rabit,
        mediaType: "image",
      },
    ];

    switch (true) {
      case selectedTab === "תוצרים":
        setData(eduArr);
        break;
      case selectedTab === "עיצובים":
        setData(designsArr);
        break;
      case selectedTab === "טפסים":
        setData(formsArr);
        break;
      case selectedTab === "תמונות ואלבומים":
        setData(mediaArr);
        break;
      default:
        setData(eduArr);
    }
  }, [selectedTab]);

  return (
    <div className="page-container">
      <div className="admin-header-container">
        <div className="header">העלאות</div>
        <div
          className="admin-upload-btn"
          onClick={() => showPopup(<UploadEduType />)}
        >
          העלאה
        </div>
      </div>
      <div className="admin-container">
        <div className="admin-approved-edu-side">
          <div className="admin-top-approved">
            <Tabs
              tabsArray={tabsArray}
              setSelectedTab={setSelectedTab}
              selectedTab={selectedTab}
            />
            <Search style={{ height: "42px", width: "16.7vw" }} />
          </div>
          <TemplateTable dataArr={data} selectedTab={selectedTab} />
        </div>
        <div className="admin-pending-approval-side">
          <div className="admin-pending-approval-container">
            <div className="admin-top-other">
              <div className="admin-other-header">תוצרים שממתינים לאישור</div>
              <div className="admin-link">היסטוריית העלאות</div>
            </div>
            <Requests requests={requestsArr} />
          </div>
          <div className="admin-pending-approval-container">
            <div className="admin-other-header">תתי נושאים חדשים</div>
            <Requests requests={subSubjectsArr} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
