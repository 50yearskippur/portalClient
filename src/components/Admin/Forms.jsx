import "./TemplateRow.css";
import "./GenericItem.css";
import TemplateRow from "./TemplateRow";
import GenericItem from "./GenericItem";

const getChildren = (form) => {
  return [
    <GenericItem title={form.title} subTitle="שם התוצר" />,
    <GenericItem title={form.type} subTitle="סוג תוצר" />,
    <GenericItem title={form.date} subTitle="תאריך העלאה" />,
  ];
};

const Forms = ({ formsArr }) => {
  return (
    <div className="rows-container">
      {formsArr?.map((form, index) => (
        <TemplateRow key={`form ${index}`} children={getChildren(form)} />
      ))}
    </div>
  );
};

export default Forms;
