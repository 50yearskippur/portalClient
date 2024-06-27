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
      <GenericItem title={item.type} subTitle="סוג עיצוב" />
    </div>,
    <GenericItem title={item.title} subTitle="שם" />,
    <GenericItem title="Power Point" subTitle="קובץ" />,
    <GenericItem title={item.date} subTitle="תאריך העלאה" />,
  ];
};

export default DesignTemplatesRow;
