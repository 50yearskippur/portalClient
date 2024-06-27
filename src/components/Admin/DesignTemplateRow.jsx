import "./TemplateRow.css";
import GenericItem from "./GenericItem";
import eduTypeByText from "../../utils/eduTypeByText";

const DesignTemplatesRow = (item) => {
  return [
    <div className="generic-row-item-container">
      <img
        src={eduTypeByText(item?.type)}
        alt="design type"
        className="item-type-img"
      />
      <GenericItem
        title={item.type}
        subTitle="סוג עיצוב"
        style={{ width: "6.25vw" }}
      />
    </div>,
    <GenericItem
      title={item.title}
      subTitle="שם"
      style={{ width: "6.25vw" }}
    />,
    <GenericItem
      title="Power Point"
      subTitle="קובץ"
      style={{ width: "9.375vw" }}
    />,
    <GenericItem
      title={item.date}
      subTitle="תאריך העלאה"
      style={{ width: "5.2vw" }}
    />,
  ];
};

export default DesignTemplatesRow;
