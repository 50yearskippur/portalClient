//delete in production
import rabit from "../assets/img/rabit.jpg";
import video from "../assets/img/video.mp4";
import sea from "../assets/img/sea.jpg";
import robot from "../assets/img/robot.jpg";
import bamba from "../assets/img/bamba.jpg";

//delete in production
const  recommendedEduResource = [
    {
      title: "איזה כיף בים",
      description: "כמה כיף לי בים איזה כיף לי בקיץ חם חם חם חם אין לי עוד רעיון לתיאור",
      unit: '8200',
      type: "לומדה",
      estimatedTime: "20",
      files: [
        {
          media: {
            file: sea,
            fileName: 'sea',
            MimeType: 'image',
          },
        },
      ],
      subject: {
        title: "טבע",
        description: "תיאור תיאור",
        eduResource: [],
      },
      subSubject: {
        title: "קיפוד",
        description: "תיאור תיאור",
        eduResource: [],
      },
      credits: [
        {
          role: "עיצוב גרפי",
          user: {
            fullName: "אלה כהן",
          },
        },
        {
          role: "מומחה תוכן",
          user: {
            fullName: "התינוק של במבה",
          },
        },
        {
          role: "פרויקטור",
          user: {
            fullName: "שלומי שלמה",
          },
        },
      ],
      settings: [
        {
          isHeadphonesNeeded: false,
        },
      ],
      difficultyLevel: "מותאם לכל הרמות",
      creator: {
        fullName: "הארי סטיילס",
      },
      views: 1240,
      rating: [
        {
          userId: "123456",
          rate: 5,
        },
        {
          userId: "123456",
          rate: 3,
        },
      ],
     timestamps: new Date()
    },
    {
      title: "רגע מתוק של עלית",
      description: "אני אוהב שוקולד ועוגות גבינה וארטיק וסוכריות ותות גינה",
      unit: 'בה"ד 15',
      type: "סרטון",
      estimatedTime: "2",
      files: [
        {
          media: {
            file: video,
            fileName: 'chocolate',
            MimeType: 'mp4',
          },
        },
      ],
      subject: {
        title: "טבע",
        description: "תיאור תיאור",
        eduResource: [],
      },
      subSubject: {
        title: "שוקולדים",
        description: "תיאור תיאור",
        eduResource: [],
      },
      credits: [
        {
          role: "פיתוח",
          user: {
            fullName: "פורטל פורטלי",
          },
        },
        {
          role: "מומחה תוכן",
          user: {
            fullName: "דורה",
          },
        },
        {
          role: "פיצוח תוכן",
          user: {
            fullName: "דייגו",
          },
        },
      ],
      settings: [
        {
          isHeadphonesNeeded: true,
        },
      ],
      difficultyLevel: "רמה גבוהה",
      creator: {
        fullName: "איש הווקה",
      },
      views: 190,
      rating: [
        {
          userId: "123456",
          rate: 2,
        },
        {
          userId: "123456",
          rate: 4,
        },
      ],
     timestamps: new Date()
    },
    {
      title: "חלליות",
      description: "בלה בלה בלה חלליות וחייזרים",
      unit: 'בה"ד 15',
      type: "לומדה",
      estimatedTime: "40",
      files: [
        {
          media: {
            file: rabit,
            fileName: 'rabit',
            MimeType: 'image',
          },
        },
      ],
      subject: {
        title: "חלל",
      },
      subSubject: {
        title: "כוכבי לכת",
      },
      credits: [
        {
          role: "מומחה תוכן",
          user: {
            fullName: "אסף גרניט",
          },
        },
        {
          role: "פיצוח",
          user: {
            fullName: "קובי מחט",
          },
        },
        {
          role: "עיצוב גרפי",
          user: {
            fullName: "טל מוסרי",
          },
        },
      ],
      settings: [
        {
          isHeadphonesNeeded: false,
        },
      ],
      difficultyLevel: "קל",
      creator: {
        fullName: "טיילור סוויפט",
      },
      views: 1000,
      rating: [
        {
          userId: "123456",
          rate: 1,
        },
        {
          userId: "123456",
          rate: 2,
        },
      ],
     timestamps: new Date()
    },
    {
      title: "רובוטים",
      description: "רובוט הלך לשוק וקנה שם סוללות כדי שיהיה לו כוח",
      unit: '8200',
      type: "לומדה",
      estimatedTime: "30",
      files: [
        {
          media: {
            file: robot,
            fileName: 'robot',
            MimeType: 'image',
          },
        },
      ],
      subject: {
        title: "טכנולוגיה",
      },
      subSubject: {
        title: "חידושים",
      },
      credits: [
        {
          role: "פיתוח",
          user: {
            fullName: "צוות ווב",
          },
        },
      ],
      settings: [
        {
          isHeadphonesNeeded: true,
        },
      ],
      difficultyLevel: "רמה בינונית",
      creator: {
        fullName: "סבא טוביה",
      },
      views: 700,
      rating: [
        {
          userId: "123456",
          rate: 1,
        },
        {
          userId: "123456",
          rate: 1,
        },
      ],
     timestamps: new Date()
    },
    {
      title: "במבה",
      description: "מארז אספנות 60 שנה לבמבה",
      unit: '81',
      type: "pdf",
      estimatedTime: "10",
      files: [
        {
          media: {
            file: bamba,
            fileName: 'bamba',
            MimeType: 'image',
          },
        },
      ],
      subject: {
        title: "חלבייה",
      },
      subSubject: {
        title: "מבצעים שווים",
      },
      credits: [
        {
          role: "הכל",
          user: {
            fullName: "ארטק",
          },
        },
      ],
      settings: [
        {
          isHeadphonesNeeded: false,
        },
      ],
      difficultyLevel: "קל",
      creator: {
        fullName: "דובון אכפת לי",
      },
      views: 32,
      rating: [
        {
          userId: "123456",
          rate: 5,
        },
        {
          userId: "123456",
          rate: 4,
        },
      ],
     timestamps: new Date()
    },
  ];

  export default recommendedEduResource;