import { useContext } from "react";
import { PopupContext } from "../../../store/popup-context";
import Button from "../../Button/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UploadBottom = ({ NextPopup, PreviousPopup, disabled }) => {
  const { showPopup, setItemDetails } = useContext(PopupContext);

  const onClickHandler = () => {
    if (NextPopup) {
      showPopup(NextPopup);
    } else {
      toast(
        <div
          style={{
            display: "flex",
            direction: "rtl",
            justifyContent: "space-between",
          }}
        >
          <div>התוצר שלכם נשלח לאישור!</div>
          <a
            style={{ color: "#8CAEFF", cursor: "pointer" }}
            href="/personal-area"
          >
            צפייה בתוצר שנשלח
          </a>
        </div>,
        {
          type: "info",
          autoClose: 2000,
          icon: false,
        }
      );
      // hidePopup();
      setItemDetails({});
    }
  };

  return (
    <div>
      <div className="upload-popup-line" style={{ margin: 0 }} />
      <div
        className="upload-button-container"
        style={{
          padding: "24px 32px",
          justifyContent: !PreviousPopup ? "flex-end" : "space-between",
        }}
      >
        {PreviousPopup && (
          <Button
            text={"חזרה"}
            style={{
              width: "8.3vw",
              height: "4.4vh",
            }}
            isWhiteButton={true}
            onClick={() => showPopup(PreviousPopup)}
          />
        )}
        <Button
          text={NextPopup ? "המשך" : "העלאה"}
          style={{
            width: "8.3vw",
            height: "4.4vh",
          }}
          disabled={disabled}
          onClick={onClickHandler}
        />
      </div>
    </div>
  );
};

export default UploadBottom;
