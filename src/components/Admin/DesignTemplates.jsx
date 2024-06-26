import "./EduResourse.css";
import "./RowTemplate.css";
import "./GenericItem.css";
import RowTemplate from "./RowTemplate";
import GenericItem from "./GenericItem";
import arrow from "../../assets/media/Icons/curvedArrow.svg";
import Star from "../Rate/Star";

const getChildren = (design) => {
  return [
    <GenericItem title={design.title} subTitle="שם התוצר" />,
    <GenericItem title={design.type} subTitle="סוג תוצר" />,
    <GenericItem
      title={design.subject.title}
      subTitle={design.subSubject.title}
    />,
    <div className="edu-row-comment">12 תגובות</div>,
    <div className="generic-item-container">
      <Star style={{ width: "20px" }} clickable={true} />
      <div className="generic-item-sub-title">מומלץ</div>
    </div>,
    <GenericItem title={design.date} subTitle="תאריך העלאה" />,
    <div className="edu-row-tag-container">
      {design?.tags?.map((tag, tagIndex) => (
        <div key={`tag ${tagIndex}`} className="edu-row-tag">
          {tag.title}
        </div>
      ))}
      <img src={arrow} alt="arrow" />
    </div>,
  ];
};

const DesignTemplates = ({ designsArr }) => {
  return (
    <div className="rows-container">
      {designsArr?.map((design, index) => (
        <RowTemplate key={`row ${index}`} children={getChildren(design)} />
      ))}
    </div>
  );
};

export default DesignTemplates;
