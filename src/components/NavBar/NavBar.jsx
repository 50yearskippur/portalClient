import "./NavBar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import closeNavbarIcon from "../../assets/media/Navbar/closeNavbar.svg";
import openNavbarIcon from "../../assets/media/Navbar/openNavbar.svg";
import homeIcon from "../../assets/media/Navbar/home.svg";
import designTemplatesIcon from "../../assets/media/Navbar/designTemplates.svg";
import formsIcon from "../../assets/media/Navbar/forms.svg";
import mediaIcon from "../../assets/media/Navbar/media.svg";
import bellIcon from "../../assets/media/Navbar/bell.svg";

const NavBar = () => {
  const navigate = useNavigate();
  const IconsArrays = [
    { path: homeIcon, navigateTo: "/", text: "דף הבית" },
    {
      path: designTemplatesIcon,
      navigateTo: "/designTemplates",
      text: "תבניות עיצוב",
    },
    { path: formsIcon, navigateTo: "/forms", text: "טפסים" },
    { path: mediaIcon, navigateTo: "/media", text: "מדיה" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [chosenIcon, setChosenIcon] = useState(IconsArrays[0]);

  return (
    <div className={`navbar-container ${isOpen ? "open" : "close"}`}>
      <div className="horizonal-line" />
      <div className="navbar-item">
        <img
          src={isOpen ? closeNavbarIcon : openNavbarIcon}
          alt="close navbar icon"
          className={`navbar-item ${isOpen && "open"}`}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
      <div className="navbar-icons-container">
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
              <img src={icon.path} className="navbar-icon" alt="navbar icon" />
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
