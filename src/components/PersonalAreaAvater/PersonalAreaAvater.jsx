import React from 'react';
import "./PersonalAreaAvater.css";

const PersonalAreaAvater = ({ name, style, onClick = () => {} }) => {
  return (
    <div className="personal-area-avater" style={style} onClick={onClick}>
      {name}
    </div>
  );
};

export default PersonalAreaAvater;
