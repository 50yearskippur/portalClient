import "./AdminPage.css";
import { useState, useContext, useMemo } from "react";
import { PopupContext } from "../store/popup-context";
import UploadEduType from "../components/Popup/UploadEdu/UploadEduType";
import Tabs from "../components/Tabs/Tabs";
import WaitingList from "../components/Admin/Requests/WaitingList";
import Search from "../components/Search/Search";
import TemplateTable from "../components/Admin/GenericObjects/TemplateTable";
import bigA from "../assets/media/Icons/bigA.svg";
import selectedbigA from "../assets/media/Icons/blueBigA.svg";
import reversedClock from "../assets/media/Icons/reversedClock.svg";
import selectedreversedClock from "../assets/media/Icons/blueReversedClock.svg";
import staricon from "../assets/media/Icons/starIcon.svg";
import selectedstaricon from "../assets/media/Icons/blueStarIcon.svg";

import downloadIcon from "../assets/media/Icons/squereDownload.svg";
import selecteddownloadIcon from "../assets/media/Icons/blueDownloadIcon.svg";

//delete in production
import rabit from "../assets/img/rabit.jpg";
import arrow from "../assets/media/Icons/curvedArrow.svg";
import OrderBy from "../components/OrderBy/OrderBy";

const AdminPage = () => {
  const { showPopup } = useContext(PopupContext);
  const [tabsArray, setTabs] = useState([
    "תוצרים",
    "עיצובים",
    "טפסים",
    "תמונות סטוק ואלבומים",
  ]);
  const [selectedTab, setSelectedTab] = useState(tabsArray[0]);
  const [data, setData] = useState([]);

  //delete in production
  const requestsArr = [
    {
      title: "סוריה מאז ועד היום",
      date: Date("28.5.2024"),
      type: "לומדה",
      level: "מותאם לכל הרמות",
      creator: "יובל כהן",
    },
    {
      title: "סוריה מאז ועד היום",
      date: Date("28.5.2024"),
      level: "מותאם לכל הרמות",
      type: "לומדה",
      creator: "יובל כהן",
    },
    {
      title: "סוריה מאז ועד היום",
      date: Date("28.5.2024"),
      level: "מותאם לכל הרמות",
      type: "לומדה",

      creator: "יובל כהן",
    },
  ];
  const commentsArr = [
    {
      title: "לורם איפסום",
      date: Date("28.5.2024"),
      text: "“וואי זאת המצגת הכי טובה שראיתי בחיים שלי, איזה כיף חיים שיוואווווווו חולה עלייכם ארטק כפרה עליכם חייאתי”",
      type: "סיכום",
      creator: "יובל כהן",
    },
    {
      title: "לורם איפסום",
      date: Date("28.5.2024"),
      text: "“יוואו אתם לא מפסיקים להפציץ”",
      type: "לומדה",
      creator: "יובל כהן",
    },
  ];

  //delete in production

  useMemo(() => {
    //delete in production
    const eduArr = [
      {
        title: "הכירו את זירת לבנון",
        type: "סרטון",
        date: Date("28.8.2024"),
        experationDate: new Date("2024-07-26T00:00"),
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
            date: Date("28.8.2024"),
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
          {
            content:
              "אחלה לומדה, לימדה אותי מלא על זירת סוריה איזה כיף. מה שכן נתקע באיזה שהוא שלב, שווה לסדר את זה.",
            date: Date("28.8.2024"),
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
          {
            content:
              "אחלה לומדה, לימדה אותי מלא על זירת סוריה איזה כיף. מה שכן נתקע באיזה שהוא שלב, שווה לסדר את זה.",
            date: Date("28.8.2024"),
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
          {
            content:
              "אחלה לומדה, לימדה אותי מלא על זירת סוריה איזה כיף. מה שכן נתקע באיזה שהוא שלב, שווה לסדר את זה.",
            date: Date("28.8.2024"),
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
          {
            content:
              "אחלה לומדה, לימדה אותי מלא על זירת סוריה איזה כיף. מה שכן נתקע באיזה שהוא שלב, שווה לסדר את זה.",
            date: Date("28.8.2024"),
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
        ],
      },
      {
        title: "איך לשרוד בתנאי שטח",
        type: "סרטון",
        date: Date("28.8.2024"),
        experationDate: new Date("2024-07-26T00:00"),
        subSubject: {
          title: " סוריה",
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
            date: Date("28.8.2024"),
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
          {
            content:
              "אחלה לומדה, לימדה אותי מלא על זירת סוריה איזה כיף. מה שכן נתקע באיזה שהוא שלב, שווה לסדר את זה.",
            date: Date("28.8.2024"),
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
          {
            content:
              "אחלה לומדה, לימדה אותי מלא על זירת סוריה איזה כיף. מה שכן נתקע באיזה שהוא שלב, שווה לסדר את זה.",
            date: Date("28.8.2024"),
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
          {
            content:
              "אחלה לומדה, לימדה אותי מלא על זירת סוריה איזה כיף. מה שכן נתקע באיזה שהוא שלב, שווה לסדר את זה.",
            date: Date("28.8.2024"),
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
          {
            content:
              "אחלה לומדה, לימדה אותי מלא על זירת סוריה איזה כיף. מה שכן נתקע באיזה שהוא שלב, שווה לסדר את זה.",
            date: Date("28.8.2024"),
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
        ],
      },
      {
        title: "לומדת בם",
        type: "סרטון",
        date: Date("28.8.2024"),
        experationDate: new Date("2024-07-30T00:00"),
        subSubject: {
          title: " סוריה",
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
            date: Date("28.8.2024"),
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
          {
            content:
              "אחלה לומדה, לימדה אותי מלא על זירת סוריה איזה כיף. מה שכן נתקע באיזה שהוא שלב, שווה לסדר את זה.",
            date: Date("28.8.2024"),
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
          {
            content:
              "אחלה לומדה, לימדה אותי מלא על זירת סוריה איזה כיף. מה שכן נתקע באיזה שהוא שלב, שווה לסדר את זה.",
            date: Date("28.8.2024"),
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
          {
            content:
              "אחלה לומדה, לימדה אותי מלא על זירת סוריה איזה כיף. מה שכן נתקע באיזה שהוא שלב, שווה לסדר את זה.",
            date: Date("28.8.2024"),
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
          {
            content:
              "אחלה לומדה, לימדה אותי מלא על זירת סוריה איזה כיף. מה שכן נתקע באיזה שהוא שלב, שווה לסדר את זה.",
            date: Date("28.8.2024"),
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
        ],
      },
      {
        title: "3הכירו את זירת סוריה",
        type: "סיכום",
        date: Date("28.8.2024"),
        experationDate: new Date("2024-07-20T00:00"),
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
            date: Date("28.8.2024"),
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
          {
            content:
              "אחלה לומדה, לימדה אותי מלא על זירת סוריה איזה כיף. מה שכן נתקע באיזה שהוא שלב, שווה לסדר את זה.",
            date: Date("28.8.2024"),
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
          {
            content:
              "אחלה לומדה, לימדה אותי מלא על זירת סוריה איזה כיף. מה שכן נתקע באיזה שהוא שלב, שווה לסדר את זה.",
            date: Date("28.8.2024"),
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
          {
            content:
              "אחלה לומדה, לימדה אותי מלא על זירת סוריה איזה כיף. מה שכן נתקע באיזה שהוא שלב, שווה לסדר את זה.",
            date: Date("28.8.2024"),
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
          {
            content:
              "אחלה לומדה, לימדה אותי מלא על זירת סוריה איזה כיף. מה שכן נתקע באיזה שהוא שלב, שווה לסדר את זה.",
            date: Date("28.8.2024"),
            user: { fullName: "בני גבע", role: 'רמ"ד קורס אתרוג' },
          },
        ],
      },
    ];

    const designsArr = [
      {
        title: "תבניות עיצוב 1",
        type: "מצגת",
        date: Date("28.8.2024"),
        media: rabit,
        cover: rabit,
        mediaType: "image",
      },
      {
        title: "תבניות עיצוב 2",
        type: "סיכום",
        date: Date("28.8.2024"),
        media: rabit,
        cover: rabit,
        mediaType: "image",
      },
    ];

    const formsArr = [
      {
        title: "טפסים 1",
        type: "סיכום",
        date: Date("28.8.2024"),
        tag: { title: "שלישות" },
        media: rabit,
        cover: rabit,
        mediaType: "image",
      },
      {
        title: "טפסים 1",
        type: "סיכום",
        date: Date("28.8.2024"),
        tag: { title: "שלישות" },
        media: rabit,
        cover: rabit,
        mediaType: "image",
      },
    ];

    const mediaArr = [
      {
        title: "הרמת כוסית לראש השנה",
        type: "תמונה",
        date: Date("28.8.2024"),
        media: [rabit, rabit, rabit, rabit],
        cover: rabit,
        mediaType: "image",
      },
      {
        title: "פורים 2024",
        type: "תמונה",
        date: Date("28.8.2024"),
        media: rabit,
        cover: rabit,
        mediaType: "image",
      },
    ];
    setTabs([
      `תוצרים (${eduArr.length})`,
      `עיצובים (${designsArr.length})`,
      `טפסים (${formsArr.length})`,
      `תמונות סטוק ואלבומים (${mediaArr.length})`,
    ]);
    switch (true) {
      case selectedTab.includes("תוצרים"):
        setData(eduArr);
        break;
      case selectedTab.includes("עיצובים"):
        setData(designsArr);
        break;
      case selectedTab.includes("טפסים"):
        setData(formsArr);
        break;
      case selectedTab.includes("תמונות סטוק ואלבומים"):
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
            <OrderBy
              options={[
                {
                  value: "upload-date",
                  label: "תאריך העלאה",
                  icon: downloadIcon,
                  selectedicon: selecteddownloadIcon,
                },
                {
                  value: "update-date",
                  label: "תאריך עדכון",
                  icon: reversedClock,
                  selectedicon: selectedreversedClock,
                },
                {
                  value: "popularity",
                  label: "פופולריות",
                  icon: staricon,
                  selectedicon: selectedstaricon,
                },
                {
                  value: "alphabet",
                  label: " 'א' - ב",
                  icon: bigA,
                  selectedicon: selectedbigA,
                },
              ]}
            />
            <Search
              placeholder={"חיפוש תוצר/נושא"}
              style={{ height: "42px", width: "16.7vw" }}
            />
          </div>
          <TemplateTable
            icon={arrow}
            dataArr={data}
            selectedTab={selectedTab}
          />
        </div>
        <div className="admin-pending-approval-side">
          <div className="admin-pending-approval-container">
            <div className="admin-top-other">
              <div className="admin-other-header">
                תוצרים שמחכים לאישור ({requestsArr.length})
              </div>
              <div className="admin-link">כל השאר </div>
            </div>
            <WaitingList
              header={`תוצרים שמחכים לאישור`}
              requests={requestsArr}
            />
          </div>
          <div className="admin-pending-approval-container">
            <div className="admin-top-other">
              <div className="admin-other-header">
                תגובות לאישור בקליק ({commentsArr.length})
              </div>
              <div className="admin-link">כל השאר </div>
            </div>
            <WaitingList
              header={"תגובות לאישור בקליק"}
              requests={commentsArr}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
