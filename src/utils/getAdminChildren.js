import EduResourceRow from "../components/Admin/RowTypes/EduResourceRow";
import DesignTemplateRow from "../components/Admin/RowTypes/DesignTemplateRow";
import FormRow from "../components/Admin/RowTypes/FormRow";
import adminRow from "../components/Admin/RowTypes/adminRow";
import MediaRow from "../components/Admin/RowTypes/MediaRow";
const getAdminChildren = (item, selectedTab) => {
  switch (true) {
    case selectedTab?.includes("תוצרים"):
      return EduResourceRow(item);
    case selectedTab?.includes("עיצובים"):
      return DesignTemplateRow(item);
    case selectedTab?.includes("טפסים"):
      return FormRow(item);
    case selectedTab?.includes("תמונות סטוק ואלבומים"):
      return MediaRow(item);
    case selectedTab?.includes("אדמינים"):
      return adminRow(item);
    default:
      return EduResourceRow(item);
  }
};

export default getAdminChildren;
