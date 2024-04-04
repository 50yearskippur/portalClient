import Home from "../pages/HomePage";
import Form from "../pages/FormPage";
import media from "../pages/MediaPage";
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
  {path: "media", text: "תמונות ומדיה", component: media},
];

export default paths;
