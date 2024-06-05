import "./Tabs.css";

const Tabs = ({ tabsArray, style = {}, setSelectedTab, selectedTab }) => {
  return (
    <div className="tabs-container" style={style}>
      {tabsArray.map((tab, index) => (
        <div
          key={`tab${index}`}
          className={`tabs-item ${selectedTab === tab ? "current-tab" : ""}`}
          onClick={() => setSelectedTab(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
