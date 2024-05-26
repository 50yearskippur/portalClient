import "./NavBar.css";
import { useNavigate } from "react-router-dom";
// import closeNavbarIcon from "../../assets/media/Navbar/closeNavbar.svg";
import openNavbarIcon from "../../assets/media/Navbar/openNavbar.svg";
import homeIcon from "../../assets/media/Navbar/home.svg";
import designTemplatesIcon from "../../assets/media/Navbar/designTemplates.svg";
import formsIcon from "../../assets/media/Navbar/forms.svg";
import mediaIcon from "../../assets/media/Navbar/media.svg";
import userIcon from "../../assets/media/Navbar/user.svg";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
      <div className="horizonal-line" />
      <img src={openNavbarIcon} alt="close navbar icon" />
      <img
        src={homeIcon}
        className="navbar-icon"
        alt="home icon"
        onClick={() => navigate("/")}
      />
      <img
        src={designTemplatesIcon}
        className="navbar-icon"
        alt="designTemplates icon"
        onClick={() => navigate("/designTemplates")}
      />
      <img
        src={formsIcon}
        className="navbar-icon"
        alt="form icon"
        onClick={() => navigate("/form")}
      />
      <img
        src={mediaIcon}
        className="navbar-icon"
        alt="media icon"
        onClick={() => navigate("/mediaAlbum")}
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
