import "./NavBar.css";
import TitleList from "../TitlesList/TitlesList";
import portalLogo from "../../assets/media/navbar/portalLogo.png";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const titleListStyle = {
    containerStyle: { right: "-1.5vw", marginTop: "7vh" },
    color: "#FFF",
  };

  return (
    <div className="navbar-container">
      <img className="portal-logo" alt="portal logo" src={portalLogo} />
      <TitleList
        style={titleListStyle}
        getDefaultTitle={() =>
          paths.slice(0, 4).find((p) => p.path === currentPath)?.text
        }
        titlesArray={paths.slice(0, 4)}
      />
    </div>
  );
};

export default NavBar;
