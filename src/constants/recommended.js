//delete in production
import rabit from "../assets/img/rabit.jpg";
import video from "../assets/img/video.mp4";
import sea from "../assets/img/sea.jpg";
import robot from "../assets/img/robot.jpg";
import bamba from "../assets/img/bamba.jpg";
import flowers from "../assets/img/flowers.jfif";
import PT from "../assets/img/PT.jfif";
import snow from  "../assets/img/snow.jfif";
import tiger from "../assets/img/tiger.jfif";
import zebra from "../assets/img/zebra.jpg";
import sports from "../assets/img/sports.jfif";

//delete in production
const  recommendedEduResource = [
    {
      title: "איזה כיף בים",
      description: "כמה כיף לי בים איזה כיף לי בקיץ חם חם חם חם אין לי עוד רעיון לתיאור",
      unit: '8200',
      type: "לומדה",
      estimatedTime: "20",
      files: 
        {
          media: {
            file: sea,
            fileName: 'sea',
            MimeType: 'image',
          },
        },
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
        isAdmin: true
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
      files:
        {
          media: {
            file: video,
            fileName: 'chocolate',
            MimeType: 'mp4',
          },
        },
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
        isAdmin: true
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
      files:
        {
          media: {
            file: rabit,
            fileName: 'rabit',
            MimeType: 'image',
          },
        },
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
        isAdmin: false
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
      files:
        {
          media: {
            file: robot,
            fileName: 'robot',
            MimeType: 'image',
          },
        },
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
        isAdmin: true,
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
      files:
        {
          media: {
            file: bamba,
            fileName: 'bamba',
            MimeType: 'image',
          },
        },
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
        isAdmin: true,
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
    {
      title: "כוחות הטבע",
      description: "למדו על כוחות הטבע וכיצד הם משפיעים על העולם שסביבנו",
      unit: 'בה"ד 10',
      type: "לומדה",
      estimatedTime: "15",
      files:
        {
          media: {
            file: flowers,
            fileName: 'flowers',
            MimeType: 'image',
          },
        },
      subject: {
        title: "מבואות מודיעין",
        description: "תיאור תיאור",
        eduResource: [],
      },
      subSubject: {
        title: "הכרת זירת סוריה",
        description: "תיאור תיאור",
        eduResource: [],
      },
      credits: [
        {
          role: "מומחה תוכן",
          user: {
            fullName: "אליס פיזיקה",
          },
        },
        {
          role: "עיצוב גרפי",
          user: {
            fullName: "בוב גרף",
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
        fullName: "איינשטיין",
        isAdmin: true
      },
      views: 500,
      rating: [
        {
          userId: "123456",
          rate: 4,
        },
        {
          userId: "123456",
          rate: 5,
        },
      ],
      timestamps: new Date()
    },
    {
      title: "היסטוריה של עולם",
      description: "למדו על היסטוריה של העולם והאירועים המרכזיים בה",
      unit: 'בה"ד 20',
      type: "לומדה",
      estimatedTime: "25",
      files:
        {
          media: {
            file: PT,
            fileName: 'PT',
            MimeType: 'image',
          },
        },
      subject: {
        title: "מבואות מודיעין",
        description: "תיאור תיאור",
        eduResource: [],
      },
      subSubject: {
        title: "הכרת זירת סוריה",
        description: "תיאור תיאור",
        eduResource: [],
      },
      credits: [
        {
          role: "מומחה תוכן",
          user: {
            fullName: "היסטוריון יוסי",
          },
        },
        {
          role: "פרויקטור",
          user: {
            fullName: "שרה היסטוריה",
          },
        },
      ],
      settings: [
        {
          isHeadphonesNeeded: false,
        },
      ],
      difficultyLevel: "בינוני",
      creator: {
        fullName: "נפוליאון",
        isAdmin: true
      },
      views: 800,
      rating: [
        {
          userId: "123456",
          rate: 3,
        },
        {
          userId: "123456",
          rate: 4,
        },
      ],
      timestamps: new Date()
    },
    {
      title: "מדעי המחשב",
      description: "למדו על מדעי המחשב והטכנולוגיות המתקדמות בתחום",
      unit: 'בה"ד 30',
      type: "לומדה",
      estimatedTime: "35",
      files:
        {
          media: {
            file: snow,
            fileName: 'snow',
            MimeType: 'image',
          },
        },
      subject: {
        title: "מבואות מודיעין",
        description: "תיאור תיאור",
        eduResource: [],
      },
      subSubject: {
        title: "הכרת זירת סוריה",
        description: "תיאור תיאור",
        eduResource: [],
      },
      credits: [
        {
          role: "מומחה תוכן",
          user: {
            fullName: "ג'ון תכנות",
          },
        },
        {
          role: "עיצוב גרפי",
          user: {
            fullName: "לילי גרף",
          },
        },
      ],
      settings: [
        {
          isHeadphonesNeeded: true,
        },
      ],
      difficultyLevel: "גבוה",
      creator: {
        fullName: "ביל גייטס",
        isAdmin: false
      },
      views: 1200,
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
    {
      title: "אמנות",
      description: "למדו על אמנות ויצירה והשפעתה על החברה",
      unit: 'בה"ד 25',
      type: "לומדה",
      estimatedTime: "30",
      files:
        {
          media: {
            file: tiger,
            fileName: 'tiger',
            MimeType: 'image',
          },
        },
      subject: {
        title: "מבואות מודיעין",
        description: "תיאור תיאור",
        eduResource: [],
      },
      subSubject: {
        title: "הכרת זירת סוריה",
        description: "תיאור תיאור",
        eduResource: [],
      },
      credits: [
        {
          role: "מומחה תוכן",
          user: {
            fullName: "פיקאסו",
          },
        },
        {
          role: "עיצוב גרפי",
          user: {
            fullName: "מונה ליזה",
          },
        },
      ],
      settings: [
        {
          isHeadphonesNeeded: false,
        },
      ],
      difficultyLevel: "בינוני",
      creator: {
        fullName: "וינסנט ואן גוך",
        isAdmin: false,
      },
      views: 900,
      rating: [
        {
          userId: "123456",
          rate: 4,
        },
        {
          userId: "123456",
          rate: 3,
        },
      ],
      timestamps: new Date()
    },
    {
      title: "מדעי הטבע",
      description: "למדו על מדעי הטבע והתהליכים הטבעיים בעולם",
      unit: 'בה"ד 40',
      type: "לומדה",
      estimatedTime: "45",
      files:
        {
          media: {
            file: zebra,
            fileName: 'zebra',
            MimeType: 'image',
          },
        },
      subject: {
        title: "מבואות מודיעין",
        description: "תיאור תיאור",
        eduResource: [],
      },
      subSubject: {
        title: "הכרת זירת סוריה",
        description: "תיאור תיאור",
        eduResource: [],
      },
      credits: [
        {
          role: "מומחה תוכן",
          user: {
            fullName: "ניוטון",
          },
        },
        {
          role: "עיצוב גרפי",
          user: {
            fullName: "גלילאו",
          },
        },
      ],
      settings: [
        {
          isHeadphonesNeeded: false,
        },
      ],
      difficultyLevel: "גבוה",
      creator: {
        fullName: "איינשטיין",
        isAdmin: false
      },
      views: 1500,
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
    {
      title: "ספורט",
      description: "למדו על ספורט ופעילות גופנית והשפעתן על הבריאות",
      unit: 'בה"ד 35',
      type: "לומדה",
      estimatedTime: "40",
      files:
        {
          media: {
            file: sports,
            fileName: 'sports',
            MimeType: 'image',
          },
        },
      subject: {
        title: "מבואות מודיעין",
        description: "תיאור תיאור",
        eduResource: [],
      },
      subSubject: {
        title: "הכרת זירת סוריה",
        description: "תיאור תיאור",
        eduResource: [],
      },
      credits: [
        {
          role: "מומחה תוכן",
          user: {
            fullName: "מייקל פילס",
          },
        },
        {
          role: "מאמן",
          user: {
            fullName: "כריס רונאלדו",
          },
        },
      ],
      settings: [
        {
          isHeadphonesNeeded: false,
        },
      ],
      difficultyLevel: "בינוני",
      creator: {
        fullName: "אוסקר פיסטוריוס",
        isAdmin: true,
      },
      views: 1100,
      rating: [
        {
          userId: "123456",
          rate: 4,
        },
        {
          userId: "123456",
          rate: 3,
        },
      ],
      timestamps: new Date()
    }
  ];


  export default recommendedEduResource;