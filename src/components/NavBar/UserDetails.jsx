import profilePicture from "../../assets/media/navbar/profilePicture.png";
import "./UserDetails.css";

const UserDetails = ({user}) => {
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
    </div>
  );
};

export default UserDetails;
