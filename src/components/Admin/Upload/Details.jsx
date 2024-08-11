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
  const { itemDetails, setItemDetails } = useContext(PopupContext);
  const [isSubOpen, setIsSubOpen] = useState(false);
  const [isNewCredit, setIsNewCredit] = useState(false);
  const [creditsList, setCreditsList] = useState(
    itemDetails.credits ? itemDetails.credits : getCredits(itemDetails?.type)
  );
  const [newCredit, setNewCredit] = useState({ role: '', user: '' });

  useEffect(() => {
    setItemDetails((prevDetails) => ({
      ...prevDetails,
      credits: creditsList,
    }));
  }, [creditsList, setItemDetails]);

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
          defaultValue={itemDetails['title']}
          onChange={(e) => saveDetails({ title: e.target.value })}
        />
      </div>
      <div className="stage-row-container">
        <div className="stage-input-container">
          <div className="stage-text">נושא</div>
          <Dropdown
            defaultValue="בחרו נושא"
            list={['מבואות מודיעין', 'טכנולוגיה וסייבר', 'שפה', 'המלצות']}
            fieldName="subject"
            style={{ height: '3.241vh' }}
          />
        </div>
        <div className="stage-input-container">
          <div className="stage-text">תת נושא</div>
          <Dropdown
            defaultValue="בחרו תת נושא"
            list={[
              'מבואות מודיעין',
              'טכנולוגיה וסייבר',
              'שפה',
              'המלצות',
              'תת נושא חדש',
            ]}
            fieldName="subSubject"
            onNewSubClick={() => setIsSubOpen(true)}
            style={{ height: '3.241vh' }}
          />
        </div>
      </div>
      <div className="stage-input-container">
        <div className="stage-text">תיאור (אופציונלי)</div>
        <Textarea
          defaultValue={itemDetails['description']}
          placeholder="כתבו כאן את תיאור התוכן שאתם מעלים..."
          style={{ height: '16.667vh' }}
          onChange={(e) => saveDetails({ description: e.target.value })}
        />
      </div>
      <div className="stage-text big">קרדיטים</div>
      {creditsList.map((credit, index) => (
        <Credit
          key={`credit ${index}`}
          role={credit.role}
          defaultValue={
            itemDetails['credits']?.[index]?.user
              ? itemDetails['credits'][index].user
              : credit.user
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
            style={{ height: '19px', width: '5.104vw' }}
            onChange={(e) => handleNewCredit({ role: e.target.value })}
          />
          <input
            className="stage-input"
            onChange={(e) => handleNewCredit({ user: e.target.value })}
            type="text"
            style={{ height: '19px', width: '17.5vw' }}
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
        text={'הבא'}
        disabled={
          !itemDetails['title'] ||
          !itemDetails['subject'] ||
          !itemDetails['subSubject']
        }
        nextStage={nextStage}
      />
      <AddSubSubject isOpen={isSubOpen} onClose={() => setIsSubOpen(false)} />
    </div>
  );
};

export default Details;
