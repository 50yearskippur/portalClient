import EduResourseRow from "../components/Admin/EduResourseRow";
import DesignTemplateRow from "../components/Admin/DesignTemplateRow";
import FormRow from "../components/Admin/FormRow";
import MediaRow from "../components/Admin/mediaRow";

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
    default:
      return EduResourseRow(item);
  }
};

export default getAdminChildren;
