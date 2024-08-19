import './TemplateRow.css';
import '../GenericObjects/GenericItem.css';
import GenericItem from '../GenericObjects/GenericItem';
import React from 'react';
import convertDateToString from '../../../utils/convertDateToString';
import CoverComponent from '../Templates/CoverComponent';
const MediaRow = (item) => {
  return [
    <CoverComponent />,
    <GenericItem
      title={item.title}
      subTitle="שם האלבום\תמונה"
      style={{ width: '8.3vw' }}
    />,

    <div className="edu-row-views">12 צפיות</div>,
    <GenericItem
      title={item.type}
      subTitle="סוג תמונה"
      style={{ width: '4.5vw' }}
    />,
    <GenericItem
      title={convertDateToString(item.date)}
      subTitle="עודכן בתאריך"
      style={{ width: '7.4vw' }}
    />,
  ];
};

export default MediaRow;
