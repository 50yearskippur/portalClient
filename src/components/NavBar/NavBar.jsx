import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import closeNavbarIcon from "../../assets/media/Navbar/closeNavbar.svg";
import openNavbarIcon from "../../assets/media/Navbar/openNavbar.svg";
import homeIcon from "../../assets/media/Navbar/home.svg";
import designTemplatesIcon from "../../assets/media/Navbar/designTemplates.svg";
import designTemplatesSelectedIcon from "../../assets/media/Navbar/designTemplatesSelected.png";
import homeSelectedIcon from "../../assets/media/Navbar/homeSelected.png";
import formsIcon from "../../assets/media/Navbar/forms.svg";
import mediaIcon from "../../assets/media/Navbar/media.svg";
import userIcon from "../../assets/media/Navbar/user.svg";

const NavBar = () => {
  const navigate = useNavigate();
  const [selctedIcon, setSelectedIcon] = useState("homeIconSelected");

  return (
    <div className="navbar-container">
      <div className="horizonal-line" />
      <img src={openNavbarIcon} alt="close navbar icon" />
      <img
        src={selctedIcon === "homeIconSelected" ? homeSelectedIcon : homeIcon}
        className="navbar-icon"
        alt="home icon"
        onClick={() => {
          navigate("/");
          setSelectedIcon("homeIconSelected");
        }}
      />
      <img
        src={designTemplatesIcon}
        className="navbar-icon"
        alt="designTemplates icon"
        onClick={() => {
          navigate("/designTemplates");
          setSelectedIcon("designTemplatesIconSelected");
        }}
      />
      <img
        src={formsIcon}
        className="navbar-icon"
        alt="form icon"
        onClick={() => navigate("/forms")}
      />
      <img
        src={mediaIcon}
        className="navbar-icon"
        alt="media icon"
        onClick={() => navigate("/media")}
      />
      <img
        src={userIcon}
        className="navbar-icon"
        alt="media icon"
        style={{ marginTop: "62.5vh" }}
      />
    </div>
  );
};

export default NavBar;
