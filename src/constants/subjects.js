//delete in production

import recommendedEduResource from "./recommended"

const subjects = [
    {
        _id: "66b46996cb231f6817ea15cb",
        title: "מבואות מודיעין",
        pageType: "אמצעי למידה",
        type: "נושא",
        subSubjects: [
        {
            title: "הכרת זירת סוריה",
            description: "סיכום על סוריה",
            eduResourse: recommendedEduResource.slice(-6),
        },
        {
            title:  'מבנה אמ"ן',
            description: "סיכום על מבנה אמ\"ן",
            eduResourse:  recommendedEduResource.slice(2,5),
        },
        ],
    },
    {
        _id: "66b46996cb231f6817ea15cq",
        title: "טכנולוגיה וסייבר",
        pageType: "אמצעי למידה",
        type: "נושא",
        subSubjects: [
        {
            title: "לימודי SQL",
            description: "סיכום על לימודי SQL",
            eduResourse: recommendedEduResource.slice(0,8),
        },
        {
            title:  "מערכות מידע",
            description: "סיכום על מערכות מידע",
            eduResourse:  recommendedEduResource.slice(-2),
        },
        ],
    },
    {
        _id: "66b46996cb231f6817ea15cf",
        title: "שפה",
        pageType: "אמצעי למידה",
        type: "נושא",
        subSubjects: [
        {
            title: "ערבית מדוברת",
            description: "סיכום על ערבית מדוברת",
            eduResourse: recommendedEduResource.slice(3,10),
        },
        {
            title:  'פרסית',
            description: "סיכום על פרסית",
            eduResourse:  recommendedEduResource.slice(6,10),
        },
        ],
    },
    {
        _id: "66b46996cb231f6817ea15cl",
        title: "מחקר ומיצוי מידע",
        pageType: "אמצעי למידה",
        type: "נושא",
        subSubjects: [
        ],}

]

export default subjects;