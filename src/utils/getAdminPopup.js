import EduResPreview from "../components/Popup/EduPreview/EduResPreview";
import DesignPreview from "../components/Popup/EduPreview/DesignPreview";

const getAdminPopUp = (selectedTab) => {
  switch (true) {
    case selectedTab === "תוצרים":
      return EduResPreview;
    case selectedTab === "עיצובים":
      return DesignPreview;
    // case selectedTab === "טפסים":
    //   return FormRow(item);
    // case selectedTab === "תמונות ואלבומים":
    //   return MediaRow(item);
    default:
      return EduResPreview;
  }
};

export default getAdminPopUp;
