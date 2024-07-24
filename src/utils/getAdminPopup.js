import EduResPreview from "../components/Popup/EduPreview/EduResPreview";
import DesignPreview from "../components/Popup/EduPreview/DesignPreview";
import FormPreview from "../components/Popup/EduPreview/FormPreview";
import MediaPreview from "../components/Popup/EduPreview/MediaPreview";

const getAdminPopUp = (selectedTab) => {
  switch (true) {
    case selectedTab === "תוצרים":
      return EduResPreview;
    case selectedTab === "עיצובים":
      return DesignPreview;
    case selectedTab === "טפסים":
      return FormPreview;
    case selectedTab === "תמונות סטוק ואלבומים":
      return MediaPreview;
    default:
      return EduResPreview;
  }
};

export default getAdminPopUp;
