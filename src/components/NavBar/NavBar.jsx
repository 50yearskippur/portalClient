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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`navbar-container ${isOpen ? "open" : "close"}`}>
      <div className="horizonal-line" />
      <div className="navbar-item">
        <img
          src={isOpen ? closeNavbarIcon : openNavbarIcon}
          alt="close navbar icon"
          className="navbar-button"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
      <div className="navbar-icons-container">
        <div className={`navbar-top-icons ${isOpen && "open"}`}>
          <div className={`navbar-item ${isOpen && "open"}`}>
            <img
              src={homeIcon}
              className="navbar-icon"
              alt="home icon"
              onClick={() => navigate("/")}
            />
            {isOpen && <div className="navbar-item-text">דף הבית</div>}
          </div>
          <div className={`navbar-item ${isOpen && "open"}`}>
            <img
              src={designTemplatesIcon}
              className="navbar-icon"
              alt="designTemplates icon"
              onClick={() => navigate("/designTemplates")}
            />
            {isOpen && <div className="navbar-item-text">תבניות עיצוב</div>}
          </div>
          <div className={`navbar-item ${isOpen && "open"}`}>
            <img
              src={formsIcon}
              className="navbar-icon"
              alt="form icon"
              onClick={() => navigate("/forms")}
            />
            {isOpen && <div className="navbar-item-text">טפסים</div>}
          </div>
          <div className={`navbar-item ${isOpen && "open"}`}>
            <img
              src={mediaIcon}
              className="navbar-icon"
              alt="media icon"
              onClick={() => navigate("/media")}
            />
            {isOpen && <div className="navbar-item-text">מדיה</div>}
          </div>
        </div>
        <div className={`navbar-bottom-icons  ${isOpen && "open"}`}>
          <img src={bellIcon} className="navbar-bell-icon" alt="bell icon" />
          <div
            className="navbar-profile-icon"
            onClick={() => navigate("/personalArea")}
          >
            YC
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
