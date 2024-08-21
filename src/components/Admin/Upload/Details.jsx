import { useState, useEffect, useContext } from 'react';
import { PopupContext } from '../../../store/popup-context';
import NextBtn from './NextBtn';
import Dropdown from '../../Dropdown/Dropdown';
import Textarea from '../../Textarea/Textarea';
import Credit from './Credit';
import getCredits from '../../../utils/getCredits';
import BluePlusIcon from '../../../assets/media/Icons/bluePlus.svg';
import AddSubSubject from '../../Popup/General/AddSubSubject';

const Details = ({ nextStage }) => {
  const { itemDetails, saveDetails } = useContext(PopupContext);
  const [isSubOpen, setIsSubOpen] = useState(false);
  const [isNewCredit, setIsNewCredit] = useState(false);
  const [creditsList, setCreditsList] = useState(
    itemDetails.credits ? itemDetails.credits : getCredits(itemDetails?.type)
  );
  const [newCredit, setNewCredit] = useState({ role: '', user: '' });

  useEffect(() => {
    saveDetails({ credits: creditsList });
  }, [creditsList, saveDetails]);

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
        <div className="stage-text">{`שם ה${itemDetails.type}`}</div>
        <input
          className="stage-input"
          type="text"
          defaultValue={itemDetails.title}
          onChange={(e) => saveDetails({ title: e.target.value })}
        />
      </div>
      <div className="stage-row-container">
        <div className="stage-input-container">
          <div className="stage-text">נושא</div>
          <Dropdown
            defaultValue={
              itemDetails.subject?.title
                ? itemDetails.subject.title
                : 'בחרו נושא'
            }
            list={['מבואות מודיעין', 'טכנולוגיה וסייבר', 'שפה', 'המלצות']}
            fieldName=""
          />
        </div>
        <div className="stage-input-container">
          <div className="stage-text">תת נושא</div>
          <Dropdown
            defaultValue={
              itemDetails.subSubject?.title
                ? itemDetails.subSubject.title
                : 'בחרו תת נושא'
            }
            list={['מבואות מודיעין', 'טכנולוגיה וסייבר', 'שפה', 'המלצות']}
            fieldName=""
            onNewSubClick={() => setIsSubOpen(true)}
          />
        </div>
      </div>

      <div className="stage-input-container">
        <div className="stage-text">תיאור (אופציונלי)</div>
        <Textarea
          defaultValue={itemDetails.description}
          placeholder="כתבו כאן את תיאור התוכן שאתם מעלים..."
          style={{ height: '16.667vh' }}
          onChange={(e) => saveDetails({ description: e.target.value })}
        />
      </div>
      <div className="stage-text big">קרדיטים</div>
      {creditsList?.map((credit, index) => (
        <Credit
          key={`credit ${index}`}
          role={credit.role}
          defaultValue={
            itemDetails.credits?.[index]?.user?.fullName
              ? itemDetails.credits?.[index].user.fullName
              : credit.user?.fullName
          }
          deleteCredit={() => deleteCredit(index)}
          setCreditsList={setCreditsList}
        />
      ))}
      {isNewCredit && (
        <div className="stage-credit-container">
          <input
            className="stage-input"
            type="text"
            onChange={(e) => handleNewCredit({ role: e.target.value })}
            style={{ width: '6.146vw' }}
          />
          <input
            className="stage-input"
            onChange={(e) => handleNewCredit({ user: e.target.value })}
            type="text"
            style={{ width: '15.5vw' }}
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
      <NextBtn
        disabled={
          !itemDetails.title || !itemDetails.subject || !itemDetails.subSubject
        }
        nextStage={nextStage}
        current="פרטים"
      />
      <AddSubSubject isOpen={isSubOpen} onClose={() => setIsSubOpen(false)} />
    </div>
  );
};

export default Details;
