import "./TemplateRow.css";
import "./GenericItem.css";
import { useState } from "react";
import GenericItem from "./GenericItem";
import vPressed from "../../assets/media/Icons/vPressed.svg";
import vUnressed from "../../assets/media/Icons/vUnpresed.svg";
import React from 'react';

const FormRow = (item) => {
  const [isPressed, setIsPressed] = useState();

  return [
    <GenericItem
      title={item.title}
      subTitle="שם הטופס"
      style={{ width: "6.1vw" }}
    />,
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
      title={item.date}
      subTitle="תאריך העלאה"
      style={{ width: "5.2vw" }}
    />,
  ];
};

export default FormRow;
