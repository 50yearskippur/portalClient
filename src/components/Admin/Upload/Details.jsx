import Dropdown from "../../Dropdown/Dropdown";
import Textarea from "../../Textarea/Textarea";

const Details = () => {
  return (
    <div className="stage-upload-container">
      <div className="stage-input-container">
        <div className="stage-text">שם המצגת</div>
        <input className="stage-input" type="text" />
      </div>
      <div className="stage-row-container">
        <div className="stage-input-container">
          <div className="stage-text">נושא</div>
          <input className="stage-input" type="text" />
        </div>
        <div className="stage-input-container">
          <div className="stage-text">תת נושא</div>
          <Dropdown
            listHeight={"20vh"}
            placeholder="בחרו דרגה"
            list={[
              'סמ"ר',
              'רס"ל',
              'רס"ר',
              'רס"ם',
              'רס"ב',
              'רנ"ם',
              'רנ"ג',
              'סג"ם',
              "סגן",
              "סרן",
              'רס"ן',
              'סא"ל',
              'אל"ם',
              'תא"ל',
              "אלוף",
            ]}
            style={{ width: "100%", height: "3.704vh" }}
          />
        </div>
      </div>
      <div className="stage-input-container">
        <div className="stage-text">תיאור (אופציונלי)</div>
        <Textarea
          style={{ height: "16.667vh" }}
          placeholder={"כתבו כאן את תיאור התוכן שאתם מעלים..."}
        />
      </div>
    </div>
  );
};

export default Details;
