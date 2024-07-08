import "./TopNav.css";
import { useContext } from "react";
import { PopupContext } from "../../store/popup-context";
import UploadEduType from "../Popup/UploadEduType";
import Tabs from "../Tabs/Tabs";
import Search from "../Search/Search";
import Button from "../Button/Button";
import filterIcon from "../../assets/media/Icons/filterIcon.png";
import openFilterIcon from "../../assets/media/Icons/openFilterIcon.png";

const TopNav = ({
  tabsArray,
  setSelectedTab,
  selectedTab,
  tabsStyle,
  topNavStyle,
}) => {
  const { showPopup } = useContext(PopupContext);
  return (
    <div className="top-bar-container" style={topNavStyle}>
      <Tabs
        tabsArray={tabsArray}
        setSelectedTab={setSelectedTab}
        selectedTab={selectedTab}
        style={tabsStyle}
      />
      <div className="nav-bar-left-container">
        {/* <div className="filter-container">
          <img className="filter-icon" src={filterIcon} alt="filter icon" />
          <p className="filter-text">סנן לפי</p>
          <img src={openFilterIcon} alt="open filter icon" />
        </div> */}
        <Search style={{ width: "21.17vw" }} />
        <Button
          text={"העלאת תוכן"}
          onClick={() => showPopup(<UploadEduType />)}
        />
      </div>
    </div>
  );
};

export default TopNav;
