import "./NavBar.css";
import TitleList from "../TitlesList/TitlesList";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <TitleList
        selectedTitle={"ליהיא"}
        titlesArray={["ליהיא", "עמר", "נויה", "דנה"]}
      />
    </div>
  );
};

export default NavBar;
