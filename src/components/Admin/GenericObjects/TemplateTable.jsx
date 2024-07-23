import "./TemplateTable.css";
import React from "react";
import TemplateRow from "../RowTypes/TemplateRow";
import getAdminChildren from "../../../utils/getAdminChildren";
import getAdminPopUp from "../../../utils/getAdminPopup";

const TemplateTable = React.memo(({ dataArr, selectedTab }) => {
  return (
    <div className="table-container">
      {dataArr?.map((item, index) => (
        <TemplateRow
          key={`row admin ${index}`}
          children={getAdminChildren(item, selectedTab)}
          item={item}
          PopUp={getAdminPopUp(selectedTab)}
        />
      ))}
    </div>
  );
});

export default TemplateTable;
