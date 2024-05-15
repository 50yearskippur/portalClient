import profilePicture from "../../assets/media/navbar/profilePicture.png";
import RightArrow from "../../assets/media/navbar/rightArrow.png";
import "./UserDetails.css";

const UserDetails = ({ user }) => {
  return (
    <div className="profile-container">
      <img
        className="profile-picture-icon"
        src={profilePicture}
        alt="profile icon"
      />
      <div className="user-info">
        <p className="user-fullName">{user.fullName}</p>
        <p className="user-group">{user.group}</p>
      </div>
      <img
        className="show-profile-arrow-button"
        src={RightArrow}
        alt="right-arrow-icon"
      />
    </div>
  );
};

export default UserDetails;
