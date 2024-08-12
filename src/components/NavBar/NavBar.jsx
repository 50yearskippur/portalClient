import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import PersonalAreaAvater from "../PersonalAreaAvater/PersonalAreaAvater";
import {
  closeNavbarIcon,
  openNavbarIcon,
  homeIcon,
  homeIconSelected,
  formsIcon,
  formIconSelected,
  mediaIcon,
  mediaIconSelected,
  adminIcon,
  adminIconSelected,
  addPermissionsIcon,
  addPermissionsIconSelected,
  telephoneIcon
} from "../../assets/icons";
import "./NavBar.css";

// import designTemplatesIcon from "../../assets/media/Navbar/designTemplates.svg";
// import designTemplatesIconSelected from "../../assets/media/Navbar/designTemplatesSelected.svg";


const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const user = {
    role: "superAdmin",
  };

  const isAdmin = user.role === "admin" || user.role === "superAdmin";
  const isSuperAdmin = user.role === "superAdmin";

  const IconsArrays = useMemo(
    () => [
      {
        path: homeIcon,
        selected: homeIconSelected,
        navigateTo: "/",
        text: "עמוד הבית",
        show: true,
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
        show: true,
      },
      {
        path: mediaIcon,
        selected: mediaIconSelected,
        navigateTo: "/media",
        text: "תמונות ומדיה",
        show: true,
      },
      {
        path: adminIcon,
        selected: adminIconSelected,
        navigateTo: "/admin",
        text: "צד אדמין",
        show: isAdmin,
      },
      {
        path: addPermissionsIcon,
        selected: addPermissionsIconSelected,
        navigateTo: "/permissionsManagement",
        text: "ניהול הרשאות",
        show: isSuperAdmin,
      },
    ],
    [isAdmin, isSuperAdmin]
  );

  const [isOpen, setIsOpen] = useState(false);

  const getInitialIcon = useCallback(() => {
    const currentPath = location.pathname;
    return (
      IconsArrays.find((icon) => icon.navigateTo.includes(currentPath)) || null
    );
  }, [location.pathname, IconsArrays]);

  const [chosenIcon, setChosenIcon] = useState(getInitialIcon());

  useEffect(() => {
    setChosenIcon(getInitialIcon());
  }, [location.pathname, getInitialIcon]);

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
      {isAdmin && (
        <div className={`horizonal-line-admin ${isOpen ? "open" : "close"}`} />
      )}
      <div className="navbar-content">
        <div className={`navbar-top-icons ${isOpen && "open"}`}>
          {IconsArrays.map((icon, index) => (
            <div
              style={{
                display: !icon.show && "none",
                marginTop: icon.text === "צד אדמין" && "24px",
              }}
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
              <ReactTooltip
                style={{ borderRadius: "10px" }}
                id={`my-tooltip-${index}`}
                place="bottom"
                content={icon.text}
              />
              {isOpen && <div className="navbar-item-text">{icon.text}</div>}
            </div>
          ))}
        </div>
        <div className={`navbar-bottom-icons  ${isOpen && "open"}`}>
          <img
            className="navbar-icon"
            src={telephoneIcon}
            alt="telephone icon"
          />
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
