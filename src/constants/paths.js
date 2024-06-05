import Home from "../pages/HomePage";
import Form from "../pages/FormPage";
import Media from "../pages/MediaPage";
import DesignTemplates from "../pages/DesignTemplatesPage";
import MediaAlbum from "../pages/MediaAlbumPage";
import SubSubject from "../pages/SubSubjectPage";
import PersonalArea from "../pages/PersonalAreaPage";

const paths = [
  {
    path: "/",
    text: "דף הבית",
    component: Home,
  },
  {
    path: "/designTemplates",
    text: "תבניות עיצוב",
    component: DesignTemplates,
  },
  {
    path: "/forms",
    text: "טפסים",
    component: Form,
  },
  { path: "/media", text: "תמונות ומדיה", component: Media },
  { path: "/mediaAlbum", text: "אלבומי תמונות", component: MediaAlbum },
  { path: "/subSubject", text: "תת נושא", component: SubSubject },
  { path: "/personalArea", text: "איזור אישי", component: PersonalArea },
];

export default paths;
