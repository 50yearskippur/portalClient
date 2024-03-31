import "./Tabs.css";
import {useState} from "react";

const Tabs = ({tabsArray}) => {
  const [currentTab, setCurrentTab] = useState(tabsArray[0]);
  return (
    <div className="tabs-container">
      {tabsArray.map((tab, index) => (
        <div
          key={`tab${index}`}
          className={`tabs-item ${currentTab === tab ? "current-tab" : ""}`}
          onClick={() => setCurrentTab(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
