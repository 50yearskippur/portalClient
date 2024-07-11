import EduResourseRow from "../components/Admin/RowTypes/EduResourseRow";
import DesignTemplateRow from "../components/Admin/RowTypes/DesignTemplateRow";
import FormRow from "../components/Admin/RowTypes/FormRow";
import MediaRow from "../components/Admin/RowTypes/mediaRow";
import adminRow from "../components/Admin/RowTypes/adminRow";
const getAdminChildren = (item, selectedTab) => {
  switch (true) {
    case selectedTab === "תוצרים":
      return EduResourseRow(item);
    case selectedTab === "עיצובים":
      return DesignTemplateRow(item);
    case selectedTab === "טפסים":
      return FormRow(item);
    case selectedTab === "תמונות ואלבומים":
      return MediaRow(item);
    case selectedTab.includes("אדמינים"):
      return adminRow(item);
    default:
      return EduResourseRow(item);
  }
};

export default getAdminChildren;
