import "./NavBar.css";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import PersonalAreaAvater from "../PersonalAreaAvater/PersonalAreaAvater";
import closeNavbarIcon from "../../assets/media/Navbar/closeNavbar.svg";
import openNavbarIcon from "../../assets/media/Navbar/openNavbar.svg";
import homeIcon from "../../assets/media/Navbar/home.svg";
import homeIconSelected from "../../assets/media/Navbar/homeSelected.svg";
// import designTemplatesIcon from "../../assets/media/Navbar/designTemplates.svg";
// import designTemplatesIconSelected from "../../assets/media/Navbar/designTemplatesSelected.svg";
import formsIcon from "../../assets/media/Navbar/forms.svg";
import formIconSelected from "../../assets/media/Navbar/formsSelected.svg";
import mediaIcon from "../../assets/media/Navbar/media.svg";
import mediaIconSelected from "../../assets/media/Navbar/mediaSelected.svg";
import adminIcon from "../../assets/media/Navbar/admin.svg";
import adminIconSelected from "../../assets/media/Navbar/adminSelected.svg";
// import bellIcon from "../../assets/media/Navbar/bell.svg";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const IconsArrays = [
    {
      path: homeIcon,
      selected: homeIconSelected,
      navigateTo: "/",
      text: "עמוד הבית",
    },
    // {
    //   path: designTemplatesIcon,
    //   selected: designTemplatesIconSelected,
    //   navigateTo: "/designTemplates",
    //   text: "תבניות עיצוב",
    // },
    {
      path: formsIcon,
      selected: formIconSelected,
      navigateTo: "/forms",
      text: "טפסים",
    },
    {
      path: mediaIcon,
      selected: mediaIconSelected,
      navigateTo: "/media",
      text: "תמונות ומדיה",
    },
    // {
    //   path: adminIcon,
    //   selected: adminIconSelected,
    //   navigateTo: "/admin",
    //   text: "צד אדמין",
    // },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const getInitialIcon = () => {
    const currentPath = location.pathname;
    return (
      IconsArrays.find((icon) => icon.navigateTo.includes(currentPath)) || null
    );
  };

  const [chosenIcon, setChosenIcon] = useState(getInitialIcon);

  useEffect(() => {
    setChosenIcon(getInitialIcon());
  }, [location.pathname]);

  return (
    <div className={`navbar-container ${isOpen ? "open" : "close"}`}>
      <div className={`horizonal-line ${isOpen ? "open" : "close"}`} />
      <div className="navbar-top">
        <div
          className={`navbar-toggle-button ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={isOpen ? closeNavbarIcon : openNavbarIcon}
            alt="close navbar icon"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
        {isOpen && <div className="navbar-portal-text">Portal</div>}
      </div>
      <div className={`horizonal-line-admin ${isOpen ? "open" : "close"}`} />
      <div className="navbar-content">
        <div className={`navbar-top-icons ${isOpen && "open"}`}>
          {IconsArrays.map((icon, index) => (
            <div
              key={`icon${index}`}
              className={`navbar-item ${isOpen && "open"} ${
                chosenIcon?.path === icon.path && "navbar-selected-icon"
              }`}
              onClick={() => {
                setChosenIcon(icon);
                navigate(icon.navigateTo);
              }}
            >
              <img
                data-tooltip-id={`my-tooltip-${index}`}
                src={chosenIcon?.path === icon.path ? icon.selected : icon.path}
                className="navbar-icon"
                alt="navbar icon"
              />
              {/* <ReactTooltip
                id={`my-tooltip-${index}`}
                place="bottom"
                content={icon.text}
              /> */}
              {isOpen && <div className="navbar-item-text">{icon.text}</div>}
            </div>
          ))}
        </div>
        <div className={`navbar-bottom-icons  ${isOpen && "open"}`}>
          {/* <img src={bellIcon} className="navbar-bell-icon" alt="bell icon" /> */}
          <PersonalAreaAvater
            name="יכ"
            style={{
              width: "40px",
              height: "40px",
              fontSize: "14px",
              borderRadius: "43px",
              cursor: "pointer",
            }}
            onClick={() => {
              setChosenIcon(null);
              navigate("/personalArea");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
