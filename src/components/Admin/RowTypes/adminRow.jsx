import "./TemplateRow.css";
import GenericItem from "../GenericObjects/GenericItem";

import PersonalAreaAvater from "../../PersonalAreaAvater/PersonalAreaAvater";
const adminRow = (item) => {
  return [
    <PersonalAreaAvater
      style={{
        width: "40px",
        height: "40px",
        fontSize: "14px",
        borderRadius: "43px",
      }}
      name={item.personalAreaName}
    />,
    <GenericItem title={item.fullName} style={{ width: "8.3vw" }} />,
    <GenericItem title={item.role} style={{ width: "4.5vw" }} />,
  ];
};

export default adminRow;
