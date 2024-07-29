import "./EduResourseRow.css";
import "./TemplateRow.css";
import GenericItem from "../GenericObjects/GenericItem";
import Star from "../../Rate/Star";
import eduTypeByText from "../../../utils/eduTypeByText";
import convertDateToString from "../../../utils/convertDateToString";
import iconType from "../RowTypes/IconType";

const EduResourseRow = (item) => {
  return [
    <div className="generic-row-item-container">
      <img
        src={eduTypeByText(item?.type)}
        alt="edu type"
        className="item-type-img"
      />
      <GenericItem
        icon={iconType(item)}
        title={item?.title}
        subTitle="שם התוצר"
      />
    </div>,
    <GenericItem
      title={item?.subject?.title}
      subTitle={item?.subSubject?.title}
      style={{ width: "6.25vw" }}
    />,
    <div className="edu-row-views">12 צפיות</div>,
    <div className="generic-item-container" style={{ width: "3.125vw" }}>
      <Star style={{ width: "20px" }} />
      <div className="generic-item-sub-title">מומלץ</div>
    </div>,
    <GenericItem
      title={convertDateToString(item?.date)}
      subTitle="תאריך העלאה"
      style={{ width: "7.4vw" }}
    />,
    <div className="edu-row-tag-container">
      {item?.tags?.map((tag, tagIndex) => (
        <div key={`tag ${tagIndex}`} className="edu-row-tag">
          {tag?.title}
        </div>
      ))}
    </div>,
  ];
};

export default EduResourseRow;
