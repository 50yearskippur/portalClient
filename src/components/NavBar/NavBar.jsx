import "./NavBar.css";
import TitleList from "../TitlesList/TitlesList";
import portalLogo from "../../assets/media/navbar/portalLogo.png";
import UserDetails from "./UserDetails";
import paths from "../../constants/paths";
import { useLocation } from "react-router-dom";

//delete in production
const user = {
  fullName: "ג'ורג טימותי קלוני",
  email: "email@gmail.com",
  personalNumber: "123456789",
  unit: "8200",
  group: 'קורס קפ"ה',
  role: "user",
  favorites: ["1", "2", "3"],
};

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
      <UserDetails user={user} />
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
