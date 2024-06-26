import "./EduResourse.css";
import "./RowTemplate.css";
import "./GenericItem.css";
import RowTemplate from "./RowTemplate";
import GenericItem from "./GenericItem";
import Star from "../Rate/Star";
import eduTypeByText from "../../utils/eduTypeByText";

const getChildren = (edu) => {
  return [
    <GenericItem title={edu.title} subTitle="שם התוצר" />,
    <div className="generic-row-item-container">
      <img
        src={eduTypeByText(edu.type)}
        alt="edu type"
        className="item-type-img"
      />
      <GenericItem title={edu.type} subTitle="סוג תוצר" />
    </div>,
    <GenericItem title={edu.subject.title} subTitle={edu.subSubject.title} />,
    <div className="edu-row-comment">12 תגובות</div>,
    <div className="generic-item-container">
      <Star style={{ width: "20px" }} clickable={true} />
      <div className="generic-item-sub-title">מומלץ</div>
    </div>,
    <GenericItem title={edu.date} subTitle="תאריך העלאה" />,
    <div className="edu-row-tag-container">
      {edu?.tags?.map((tag, tagIndex) => (
        <div key={`tag ${tagIndex}`} className="edu-row-tag">
          {tag.title}
        </div>
      ))}
    </div>,
  ];
};

const EduResourse = ({ eduArr }) => {
  return (
    <div className="rows-container">
      {eduArr?.map((edu, index) => (
        <RowTemplate key={`edu admin ${index}`} children={getChildren(edu)} />
      ))}
    </div>
  );
};

export default EduResourse;
