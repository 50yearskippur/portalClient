import "./SubSubjectPage.css";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {PopupContext} from "../store/popup-context";
import BackArrow from "../components/BackArrow/BackArrow";
import UploadPopup from "../components/Popup/UploadPopup";
import rabit from "../assets/img/rabit.jpg";

const SubSubjectPage = () => {
  const navigate = useNavigate();
  const {showPopup} = useContext(PopupContext);

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
      <button
        style={{width: "100px"}}
        onClick={() => showPopup(UploadPopup)}
      ></button>
    </div>
  );
};

export default SubSubjectPage;
