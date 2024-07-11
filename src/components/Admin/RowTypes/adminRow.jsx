import "./TemplateRow.css";
import GenericItem from "../GenericObjects/GenericItem";

const adminRow = (item) => {
  return [
    <GenericItem
      title={item.fullName}
      style={{ width: "8.3vw" }}
    />,
    <GenericItem
      title={item.role}
      style={{ width: "4.5vw" }}
    />,
   
  ];
};

export default adminRow;
