import React from "react";
import profilePicture from "../../assets/media/profilePicture.png";

const UserDetails = ({ user }) => {
  return (
    <div>
      <img src={profilePicture} alt="profile picture icon" />
      <p>{user.fullName}</p>
      <p>{user.group}</p>
    </div>
  );
};

export default UserDetails;
