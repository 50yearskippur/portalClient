import "./TemplateRow.css";
import TemplateRow from "./TemplateRow";
import GenericItem from "./GenericItem";
import eduTypeByText from "../../utils/eduTypeByText";

const getChildren = (design) => {
  return [
    <div className="generic-row-item-container">
      <img
        src={eduTypeByText(design.type)}
        alt="design type"
        className="item-type-img"
      />
      <GenericItem title={design.type} subTitle="סוג עיצוב" />
    </div>,
    <GenericItem title={design.title} subTitle="שם" />,
    <GenericItem title="Power Point" subTitle="קובץ" />,
    <GenericItem title={design.date} subTitle="תאריך העלאה" />,
  ];
};

const DesignTemplates = ({ designsArr }) => {
  return (
    <div className="rows-container">
      {designsArr?.map((design, index) => (
        <TemplateRow key={`design ${index}`} children={getChildren(design)} />
      ))}
    </div>
  );
};

export default DesignTemplates;
