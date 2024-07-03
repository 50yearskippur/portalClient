import "./TemplateTable.css";
import TemplateRow from "../RowTypes/TemplateRow";
import getAdminChildren from "../../../utils/getAdminChildren";

const TemplateTable = ({ dataArr, selectedTab }) => {
  return (
    <div className="table-container">
      {dataArr?.map((item, index) => (
        <TemplateRow
          key={`edu admin ${index}`}
          children={getAdminChildren(item, selectedTab)}
          item={item}
        />
      ))}
    </div>
  );
};

export default TemplateTable;
