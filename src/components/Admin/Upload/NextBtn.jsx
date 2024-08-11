import { useContext } from 'react';
import { PopupContext } from '../../../store/popup-context';
import Button from '../../Button/Button';
import getUploadStages from '../../../utils/getUploadStages';

const NextBtn = ({ disabled, nextStage, current }) => {
  const { itemDetails } = useContext(PopupContext);
  const pageType = itemDetails.pageType;

  const text =
    getUploadStages(pageType)[getUploadStages(pageType).length - 1].title ===
    current
      ? 'העלה תוצר'
      : 'הבא';

  return (
    <Button
      text={text}
      style={{
        width: '6.667vw',
        height: '4.4vh',
        margin: '0 auto',
      }}
      disabled={disabled}
      onClick={nextStage}
    />
  );
};

export default NextBtn;
