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
            eduResourse: recommendedEduResource.slice(0, 1),
        },
        {
            title:  'מבנה אמ"ן',
            eduResourse:  recommendedEduResource.slice(1, 3),
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
            eduResourse: recommendedEduResource.slice(0, 1),
        },
        {
            title:  "מערכות מידע",
            eduResourse:  recommendedEduResource.slice(-1),
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
            eduResourse: recommendedEduResource.slice(0, 1),
        },
        {
            title:  'פרסית',
            eduResourse:  recommendedEduResource.slice(-2),
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