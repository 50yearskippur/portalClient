import "./RowTemplate.css";
import "./GenericItem.css";
import RowTemplate from "./RowTemplate";
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
        <RowTemplate key={`form ${index}`} children={getChildren(form)} />
      ))}
    </div>
  );
};

export default Forms;
