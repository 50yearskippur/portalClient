import Button from '../../Button/Button';

const NextBtn = ({ text, disabled, nextStage }) => {
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
