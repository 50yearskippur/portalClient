import "./TemplateRow.css";
import "./GenericItem.css";
import GenericItem from "./GenericItem";

const MediaRow = (item) => {
  return [
    <GenericItem title={item.title} subTitle="שם האלבום \ תמונה" />,
    <GenericItem title={item.type} subTitle="סוג תמונה" />,
    <GenericItem title={item.date} subTitle="תאריך העלאה" />,
  ];
};

export default MediaRow;
