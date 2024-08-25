import GenericItem from '../GenericObjects/GenericItem';
import eduTypeByText from '../../../utils/eduTypeByText';
import convertDateToString from '../../../utils/convertDateToString';
import iconType from '../RowTypes/IconType';
import './EduResourseRow.css';
import './TemplateRow.css';
import Star from '../../Rate/Star';

const EduResourseRow = (item) => {
  const isRecommended = item.settings?.find((setting) =>
    setting.hasOwnProperty('isRecommended')
  ).isRecommended;

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
      style={{ width: '6.25vw' }}
    />,
    <div className="edu-row-views">{`${item.views} צפיות`}</div>,
    <div
      className="generic-item-container"
      style={{ width: '3.125vw', alignItems: 'center' }}
    >
      <Star defaultValue={isRecommended} />
      <div className="generic-item-sub-title">מומלץ</div>
    </div>,
    <GenericItem
      title={convertDateToString(item?.updatedAt)}
      subTitle="עודכן בתאריך"
      style={{ width: '7.4vw' }}
    />,
  ];
};

export default EduResourseRow;
