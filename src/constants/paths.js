import Home from "../pages/HomePage";
import Form from "../pages/FormsPage";
import Media from "../pages/MediaPage";
// import DesignTemplates from "../pages/designTemplatesPage.jsx";
import MediaAlbum from "../pages/MediaAlbumPage";
import SubSubject from "../pages/SubSubjectPage";
import PersonalArea from "../pages/PersonalAreaPage";
import Admin from "../pages/AdminPage";

const paths = [
  {
    path: "/",
    text: "דף הבית",
    component: Home,
  },
  // {
  //   path: "/designTemplates",
  //   text: "תבניות עיצוב",
  //   component: DesignTemplates,
  // },
  {
    path: "/forms",
    text: "טפסים",
    component: Form,
  },
  { path: "/media", text: "תמונות ומדיה", component: Media },
  { path: "/mediaAlbum", text: "אלבומי תמונות", component: MediaAlbum },
  { path: "/subSubject", text: "תת נושא", component: SubSubject },
  { path: "/admin", text: "אדמין", component: Admin },
  { path: "/personalArea", text: "איזור אישי", component: PersonalArea },
];

export default paths;
