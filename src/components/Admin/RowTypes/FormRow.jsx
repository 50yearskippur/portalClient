import "./TemplateRow.css";
import GenericItem from "../GenericObjects/GenericItem";
import V from "./V";

const FormRow = (item) => {
  return [
    <GenericItem
      title={item?.title}
      subTitle="שם הטופס"
      style={{ width: "6.1vw" }}
    />,
    <div className="edu-row-tag">{item?.tag?.title}</div>,
    <div className="generic-item-container">
      <V />
      <div className="generic-item-sub-title">טפסים נפוצים</div>
    </div>,
    <GenericItem title="PDF" subTitle="סוג קובץ" style={{ width: "4.5vw" }} />,
    <GenericItem
      title={item?.date}
      subTitle="תאריך העלאה"
      style={{ width: "5.2vw" }}
    />,
  ];
};

export default FormRow;
