import "./TemplateRow.css";
import eduTypeByText from "../../../utils/eduTypeByText";
import GenericItem from "../GenericObjects/GenericItem";
import convertDateToString from "../../../utils/convertDateToString";
import V from "./V";

const FormRow = (item) => {
  return [
    <div className="generic-row-item-container">
      <img
        src={eduTypeByText(item?.type)}
        alt="edu type"
        className="item-type-img"
      />
      <GenericItem
        title={item.title}
        subTitle="שם הטופס"
        style={{ width: "6.1vw" }}
      />
    </div>,
    <div className="edu-row-tag">{item?.tag?.title}</div>,
    <div className="generic-item-container">
      <V />
      <div className="generic-item-sub-title">טפסים נפוצים</div>
    </div>,
    <GenericItem title="PDF" subTitle="סוג קובץ" style={{ width: "4.5vw" }} />,
    <GenericItem
      title={convertDateToString(item.date)}
      subTitle="תאריך העלאה"
      style={{ width: "7.4vw" }}
    />,
  ];
};

export default FormRow;
