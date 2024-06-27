import "./TemplateRow.css";
import "./GenericItem.css";
import GenericItem from "./GenericItem";

const MediaRow = (item) => {
  return [
    <GenericItem
      title={item.title}
      subTitle="שם האלבום \ תמונה"
      style={{ width: "12.3vw" }}
    />,
    <GenericItem
      title={item.type}
      subTitle="סוג תמונה"
      style={{ width: "8.3vw" }}
    />,
    <GenericItem
      title={item.date}
      subTitle="תאריך העלאה"
      style={{ width: "5.2vw" }}
    />,
  ];
};

export default MediaRow;
