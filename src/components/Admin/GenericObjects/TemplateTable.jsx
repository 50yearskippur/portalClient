import "./TemplateTable.css";
import TemplateRow from "../RowTypes/TemplateRow";
import getAdminChildren from "../../../utils/getAdminChildren";
import getAdminPopUp from "../../../utils/getAdminPopup";

const TemplateTable = ({ dataArr, selectedTab, onClick }) => {
  return (
    <div className="table-container">
      {dataArr?.map((item, index) => (
        <TemplateRow
          key={`edu admin ${index}`}
          children={getAdminChildren(item, selectedTab)}
          item={item}
          onClick={onClick}
          PopUp={getAdminPopUp(selectedTab)}
        />
      ))}
    </div>
  );
};

export default TemplateTable;
