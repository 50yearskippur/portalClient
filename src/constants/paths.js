import Home from "../pages/HomePage";
import Form from "../pages/FormPage";

const paths = [
  {
    path: "",
    text: "דף הבית",
    component: Home,
  },
  {
    path: "forms",
    text: "טפסים",
    component: Form,
  },
  {
    path: "*",
    text: "דף הבית",
    component: Home,
  },
];

export default paths;
