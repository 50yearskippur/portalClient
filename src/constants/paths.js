import Home from "../pages/HomePage";
import Form from "../pages/FormPage";
import Gallery from "../pages/GalleryPage";
import designTemplates from "../pages/designTemplatesPage";

const paths = [
  {
    path: "",
    text: "דף הבית",
    component: Home,
  },
  {
    path: "designTemplates",
    text: "תבניות עיצוב",
    component: designTemplates,
  },
  {
    path: "forms",
    text: "טפסים",
    component: Form,
  },
  {path: "gallery", text: "תמונות ומדיה", component: Gallery},
];

export default paths;
