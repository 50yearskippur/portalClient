import Home from "../pages/HomePage";
import Form from "../pages/FormPage";
import Media from "../pages/MediaPage";
import DesignTemplates from "../pages/designTemplatesPage";
import MediaAlbum from "../pages/MediaAlbumPage";
import SubSubject from "../pages/SubSubjectPage";

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
  {path: "/media", text: "תמונות ומדיה", component: Media},
  {path: "/mediaAlbum", text: "אלבומי תמונות", component: MediaAlbum},
  {path: "/subSubject", text: "אלבומי תמונות", component: SubSubject},
];

export default paths;
