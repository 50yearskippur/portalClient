import "./TemplateRow.css";
import "../GenericObjects/GenericItem.css";
import GenericItem from "../GenericObjects/GenericItem";
import React from "react";

const MediaRow = (item) => {
  return [
    <GenericItem
      title={item.title}
      subTitle="שם האלבום\תמונה"
      style={{ width: "8.3vw" }}
    />,
    <GenericItem
      title={item.type}
      subTitle="סוג תמונה"
      style={{ width: "4.5vw" }}
    />,
    <GenericItem
      title={item.date}
      subTitle="תאריך העלאה"
      style={{ width: "5.2vw" }}
    />,
  ];
};

export default MediaRow;
