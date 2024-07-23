import { useState, useContext } from "react";
import { PopupContext } from "../../../store/popup-context";
import Dropdown from "../../Dropdown/Dropdown";
import Textarea from "../../Textarea/Textarea";
import Credit from "./Credit";
import BluePlusIcon from "../../../assets/media/Icons/bluePlus.svg";
import Button from "../../Button/Button";
import AddSubSubject from "../../Popup/General/AddSubSubject";

const Details = ({ nextStage }) => {
  const { itemDetails, setItemDetails } = useContext(PopupContext);
  const [isSubOpen, setIsSubOpen] = useState(false);
  const [isNewCredit, setIsNewCredit] = useState(false);
  const [creditsList, setCreditsList] = useState([
    { title: "כתיבה" },
    { title: "מומחה תוכן" },
    { title: "עיצוב גרפי" },
  ]);
  const [newCredit, setNewCredit] = useState({ title: "", text: "" });

  const saveDetails = (detail) => {
    setItemDetails((prevDetails) => ({
      ...prevDetails,
      ...detail,
    }));
  };

  const handleNewCredit = (credit) => {
    setNewCredit((prevCredit) => ({ ...prevCredit, ...credit }));
  };

  const addNewCredit = () => {
    setCreditsList((prev) => [...prev, newCredit]);
    setIsNewCredit(false);
  };

  const deleteCredit = (index) => {
    const updatedCredits = creditsList.filter(
      (_, creditIndex) => creditIndex !== index
    );
    setCreditsList(updatedCredits);
  };

  return (
    <div className="stage-upload-container">
      <div className="stage-input-container">
        <div className="stage-text">שם המצגת</div>
        <input
          className="stage-input"
          type="text"
          onChange={(e) => saveDetails({ title: e.target.value })}
        />
      </div>
      <div className="stage-row-container">
        <div className="stage-input-container">
          <div className="stage-text">נושא</div>
          <Dropdown
            listHeight={"20vh"}
            defaultValue="בחרו נושא"
            list={["מבואות מודיעין", "טכנולוגיה וסייבר", "שפה", "המלצות"]}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="stage-input-container">
          <div className="stage-text">תת נושא</div>
          <Dropdown
            listHeight={"20vh"}
            defaultValue="בחרו תת נושא"
            list={[
              "מבואות מודיעין",
              "טכנולוגיה וסייבר",
              "שפה",
              "המלצות",
              "תת נושא חדש",
            ]}
            style={{ width: "100%", height: "100%" }}
            onNewSubClick={() => setIsSubOpen(true)}
          />
        </div>
      </div>
      <div className="stage-input-container">
        <div className="stage-text">תיאור (אופציונלי)</div>
        <Textarea
          placeholder={"כתבו כאן את תיאור התוכן שאתם מעלים..."}
          style={{ height: "16.667vh" }}
        />
      </div>
      <div className="stage-text big">קרדיטים</div>
      {creditsList.map((credit, index) => (
        <Credit
          key={`credit ${index}`}
          title={credit.title}
          text={credit.text}
          deleteCredit={() => deleteCredit(index)}
        />
      ))}
      {isNewCredit && (
        <div className="stage-credit-container">
          <input
            className="stage-input"
            type="text"
            style={{ height: "19px", width: "5.104vw" }}
            onChange={(e) => handleNewCredit({ title: e.target.value })}
          />
          <input
            className="stage-input"
            onChange={(e) => handleNewCredit({ text: e.target.value })}
            type="text"
            style={{ height: "19px", width: "17.5vw" }}
          />
          <div className="stage-blue-text" onClick={addNewCredit}>
            שמור
          </div>
        </div>
      )}
      <div
        className="add-credit-container"
        onClick={() => setIsNewCredit(true)}
      >
        <img alt="blue plus" src={BluePlusIcon} />
        <div className="stage-blue-text">הוספת קרדיט</div>
      </div>
      <Button
        text={"המשך"}
        style={{
          width: "8.3vw",
          height: "4.4vh",
        }}
        disabled={
          !itemDetails["title"] ||
          !itemDetails["subject"] ||
          !itemDetails["subSubject"]
        }
        onClick={nextStage}
      />
      <AddSubSubject isOpen={isSubOpen} onClose={() => setIsSubOpen(false)} />
    </div>
  );
};

export default Details;
