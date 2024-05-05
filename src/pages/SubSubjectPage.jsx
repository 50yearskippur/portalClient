import "./SubSubjectPage.css";
import { useNavigate } from "react-router-dom";
import BackArrow from "../components/BackArrow/BackArrow";
import rabit from "../assets/img/rabit.jpg";

const SubSubjectPage = () => {
  const navigate = useNavigate();

  const subSubject = {
    title: "יונקים",
    description: "פרטים על יונקים",
    eduResourse: [
      {
        title: "ארנב",
        type: "חיה",
        subSubject: {
          title: "כותרת",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "ארנב",
        type: "חיה",
        subSubject: {
          title: "כותרת",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "ארנב",
        type: "חיה",
        subSubject: {
          title: "כותרת",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "ארנב",
        type: "חיה",
        subSubject: {
          title: "כותרת",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "ארנב",
        type: "חיה",
        subSubject: {
          title: "כותרת",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "ארנב",
        type: "חיה",
        subSubject: {
          title: "כותרת",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "ארנב",
        type: "חיה",
        subSubject: {
          title: "כותרת",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "ארנב",
        type: "חיה",
        subSubject: {
          title: "כותרת",
        },
        media: rabit,
        mediaType: "image",
      },
      {
        title: "ארנב",
        type: "חיה",
        subSubject: {
          title: "כותרת",
        },
        media: rabit,
        mediaType: "image",
      },
    ],
  };
  return (
    <div className="page-container">
      <BackArrow onClick={() => navigate("/")} />
      <div className="subSubject-page-header">{subSubject.title}</div>
    </div>
  );
};

export default SubSubjectPage;
