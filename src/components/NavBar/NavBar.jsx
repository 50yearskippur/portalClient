import "./NavBar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import closeNavbarIcon from "../../assets/media/Navbar/closeNavbar.svg";
import openNavbarIcon from "../../assets/media/Navbar/openNavbar.svg";
import homeIcon from "../../assets/media/Navbar/home.svg";
import homeIconSelected from "../../assets/media/Navbar/homeSelected.svg";
import designTemplatesIcon from "../../assets/media/Navbar/designTemplates.svg";
import designTemplatesIconSelected from "../../assets/media/Navbar/designTemplatesSelected.svg";
import formsIcon from "../../assets/media/Navbar/forms.svg";
import formIconSelected from "../../assets/media/Navbar/formsSelected.svg";
import mediaIcon from "../../assets/media/Navbar/media.svg";
import mediaIconSelected from "../../assets/media/Navbar/mediaSelected.svg";
import bellIcon from "../../assets/media/Navbar/bell.svg";

const NavBar = () => {
  const navigate = useNavigate();
  const IconsArrays = [
    {
      path: homeIcon,
      selected: homeIconSelected,
      navigateTo: "/",
      text: "דף הבית",
    },
    {
      path: designTemplatesIcon,
      selected: designTemplatesIconSelected,
      navigateTo: "/designTemplates",
      text: "תבניות עיצוב",
    },
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
      text: "מדיה",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [chosenIcon, setChosenIcon] = useState(IconsArrays[0]);

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
                src={chosenIcon?.path === icon.path ? icon.selected : icon.path}
                className="navbar-icon"
                alt="navbar icon"
              />
              {isOpen && <div className="navbar-item-text">{icon.text}</div>}
            </div>
          ))}
        </div>
        <div className={`navbar-bottom-icons  ${isOpen && "open"}`}>
          <img src={bellIcon} className="navbar-bell-icon" alt="bell icon" />
          <div
            className="navbar-profile-icon"
            onClick={() => {
              navigate("/personalArea");
              setChosenIcon(null);
            }}
          >
            YC
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
