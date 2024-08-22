import './TemplateRow.css';
import GenericItem from '../GenericObjects/GenericItem';
import convertDateToString from '../../../utils/convertDateToString';
import Star from '../../Rate/Star';
import formIcon from '../../../assets/media/Upload/form.svg';

const FormRow = (item) => {
  return [
    <div className="generic-row-item-container">
      <img src={formIcon} alt="edu type" className="item-type-img" />
      <GenericItem
        title={item.title}
        subTitle="שם הטופס"
        style={{ width: '6.1vw' }}
      />
    </div>,
    <GenericItem
      title={item.subject?.title}
      subTitle="נושא"
      style={{ width: '4.5vw' }}
    />,
    <div className="edu-row-downloads">{`${item.downloads} הורדות`}</div>,
    <div className="generic-item-container" style={{ alignItems: 'center' }}>
      <Star defaultValue={item.settings[0]?.isRecommended} />
      <div className="generic-item-sub-title">נפוצים</div>
    </div>,
    <GenericItem title="PDF" subTitle="סוג קובץ" style={{ width: '4.5vw' }} />,
    <GenericItem
      title={convertDateToString(item.updatedAt)}
      subTitle="עודכן בתאריך"
      style={{ width: '7.4vw' }}
    />,
  ];
};

export default FormRow;
