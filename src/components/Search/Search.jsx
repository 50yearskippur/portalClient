import './Search.css';
import SearchIcon from '../../assets/media/Icons/search.svg';
import React from 'react';

const Search = ({ style, placeholder }) => {
  return (
    <div className="search-container" style={style}>
      <input className="search-input" placeholder={placeholder} />
      <img className="search-icon" src={SearchIcon} alt="Search" />
    </div>
  );
};

export default Search;
