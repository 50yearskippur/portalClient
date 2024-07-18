import "./TemplateRow.css";
import GenericItem from "../GenericObjects/GenericItem";
import eduTypeByText from "../../../utils/eduTypeByText";
import convertDateToString from "../../../utils/convertDateToString";

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
      style={{ width: "4.5vw" }}
    />,
    <GenericItem
      title={convertDateToString(item.date)}
      subTitle="עודכן בתאריך"
      style={{ width: "5.2vw" }}
    />,
  ];
};

export default DesignTemplatesRow;
