import EduResourseRow from "../components/Admin/RowTypes/EduResourseRow";
import DesignTemplateRow from "../components/Admin/RowTypes/DesignTemplateRow";
import FormRow from "../components/Admin/RowTypes/FormRow";
import MediaRow from "../components/Admin/RowTypes/MediaRow";
import adminRow from "../components/Admin/RowTypes/adminRow";

const getAdminChildren = (item, selectedTab) => {
  switch (selectedTab) {
    case "תוצרים":
      return EduResourseRow(item);
    case "עיצובים":
      return DesignTemplateRow(item);
    case "טפסים":
      return FormRow(item);
    case "תמונות ואלבומים":
      return MediaRow(item);
    case selectedTab.includes("אדמינים"):
      return adminRow(item);
    default:
      return EduResourseRow(item);
  }
};

export default getAdminChildren;
