import "./AdminPage.css";
import { useState, useEffect, useContext } from "react";
import { PopupContext } from "../store/popup-context";
import UploadEduType from "../components/Popup/UploadEduType";
import Tabs from "../components/Tabs/Tabs";
import WaitingList from "../components/Admin/Requests/WaitingList";
import Search from "../components/Search/Search";
import TemplateTable from "../components/Admin/GenericObjects/TemplateTable";
import Requests from "../components/Admin/Requests/Requests";
//delete in production
import rabit from "../assets/img/rabit.jpg";
import arrow from "../assets/media/Icons/curvedArrow.svg";
import OrderBy from "../components/OrderBy/OrderBy";

const HomePage = () => {
  const { showPopup } = useContext(PopupContext);
  const tabsArray = ["תוצרים", "עיצובים", "טפסים", "תמונות ואלבומים"];
  const [selectedTab, setSelectedTab] = useState(tabsArray[0]);
  const [data, setData] = useState([]);

  //delete in production
  const requestsArr = [
    {
      title: "מצגת סוריה  מאז ועד היום",
      date: "28.5.2024",
      level: "מותאם לכל הרמות",
      creator: "יובל כהן",
      type: "מצגת",
    },
    {
      title: "סוריה מאז ועד היום",
      date: "28.5.2024",
      level: "מותאם לכל הרמות",
      creator: "יובל כהן",
      type: "מסמך",
    },
  ];

  //delete in production
  const commentsArr = [
    {
      title: "לורם איפסום",
      date: "28.5.2024",
      text: "“וואי זאת המצגת הכי טובה שראיתי בחיים שלי, איזה כיף חיים שיוואווווווו חולה עלייכם ארטק כפרה עליכם חייאתי”",
      type: "מסמך",
      creator: "יובל כהן",
    },
    {
      title: "לורם איפסום",
      date: "28.5.2024",
      text: "“יוואו אתם לא מפסיקים להפציץ”",
      type: "לומדה",
      creator: "יובל כהן",
    },
  ];

  useEffect(() => {
    //delete in production
    const eduArr = [
      {
        title: "הכירו את זירת סוריה",
        type: "סרטון",
        date: Date("28.8.2024"),
        experationDate: new Date(2024, 8, 15),
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
        date: Date("28.8.2024"),
        experationDate: new Date("2024-07-28T00:00"),
        subSubject: {
          title: "זירת סוריה",
        },
        subject: { title: "מבואות מודיעין" },
        media: rabit,
        cover: rabit,
        mediaType: "image",
        level: "רמה בסיסית",
        uploadByArtech: false,
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
        date: Date("28.8.2024"),
        experationDate: new Date("2024-07-14T00:00"),
        subSubject: {
          title: "זירת סוריה",
        },
        subject: { title: "מבואות מודיעין" },
        media: rabit,
        cover: rabit,
        mediaType: "image",
        level: "רמה בסיסית",
        uploadByArtech: false,
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
        date: Date("28.8.2024"),
        media: rabit,
        cover: rabit,
        mediaType: "image",
      },
      {
        title: "תבניות עיצוב 2",
        type: "מסמך",
        date: Date("28.8.2024"),
        media: rabit,
        cover: rabit,
        mediaType: "image",
      },
    ];

    const formsArr = [
      {
        title: "טפסים 1",
        type: "מסמך",
        date: Date("28.8.2024"),
        tag: { title: "שלישות" },
        media: rabit,
        cover: rabit,
        mediaType: "image",
      },
      {
        title: "טפסים 2",
        type: "מסמך",
        date: Date("28.8.2024"),
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
        date: Date("28.8.2024"),
        media: rabit,
        cover: rabit,
        mediaType: "image",
      },
      {
        title: "פורים 2024",
        type: "מסמך",
        date: Date("28.8.2024"),
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
            <OrderBy />
            <Search style={{ height: "42px", width: "16.7vw" }} />
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

export default HomePage;
