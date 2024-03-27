import "./NavBar.css";
import TitleList from "../TitlesList/TitlesList";
import portalLogo from "../../assets/media/navbar/portalLogo.png";
import UserDetails from "./UserDetails";

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
  return (
    <div className="navbar-container">
      <img className="portal-logo" alt="portal logo" src={portalLogo} />
      <UserDetails user={user} />
      <TitleList
        style={{ right: "-1.5vw", marginTop: "7vh" }}
        titlesArray={["דף הבית", "תבניות עיצוב", "תמונות ומדיה", "טפסים"]}
      />
    </div>
  );
};

export default NavBar;
