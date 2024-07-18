import "./TemplateRow.css";
import GenericItem from "../GenericObjects/GenericItem";
import convertDateToString from "../../../utils/convertDateToString";
const MediaRow = (item) => {
  return [
    <GenericItem
      title={item.title}
      subTitle="שם האלבום \ תמונה"
      style={{ width: "8.3vw" }}
    />,
    <GenericItem
      title={item.type}
      subTitle="סוג תמונה"
      style={{ width: "4.5vw" }}
    />,
    <GenericItem
      title={convertDateToString(item.date)}
      subTitle="עודכן בתאריך"
      style={{ width: "5.2vw" }}
    />,
  ];
};

export default MediaRow;
