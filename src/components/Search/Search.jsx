import "./Search.css";
import SearchIcon from "../../assets/media/Icons/search.svg";

const Search = ({ style }) => {
  return (
    <div className="search-container" style={style}>
      <input className="search-input" placeholder="חיפוש חופשי" />
      <img className="search-icon" src={SearchIcon} alt="Search" />
    </div>
  );
};

export default Search;
