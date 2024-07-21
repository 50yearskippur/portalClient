import { useState } from "react";
import "./TemplateRow.css";
import GenericItem from "../GenericObjects/GenericItem";
import vPressed from "../../../assets/media/Icons/vPressed.svg";
import vUnressed from "../../../assets/media/Icons/vUnpresed.svg";
import eduTypeByText from "../../../utils/eduTypeByText";
import convertDateToString from "../../../utils/convertDateToString";

const FormRow = (item) => {
  const [isPressed, setIsPressed] = useState();

  return [
    <div className="generic-row-item-container">
      {/* <img
        src={eduTypeByText(item?.type)}
        alt="edu type"
        className="item-type-img"
      /> */}
      <GenericItem
        title={item.title}
        subTitle="שם הטופס"
        style={{ width: "6.1vw" }}
      />
    </div>,
    <div className="edu-row-tag">{item?.tag?.title}</div>,
    <div className="generic-item-container">
      <img
        src={`${isPressed ? vPressed : vUnressed}`}
        alt="v to pressed"
        onClick={() => setIsPressed((prev) => !prev)}
      />
      <div className="generic-item-sub-title">טפסים נפוצים</div>
    </div>,
    <GenericItem title="PDF" subTitle="סוג קובץ" style={{ width: "4.5vw" }} />,
    <GenericItem
      title={convertDateToString(item.date)}
      subTitle="עודכן בתאריך"
      style={{ width: "5.2vw" }}
    />,
  ];
};

export default FormRow;
