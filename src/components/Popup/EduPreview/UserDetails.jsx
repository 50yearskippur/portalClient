import './UserDetails.css';

const UserDetails = ({ edu }) => {
  return (
    <div className="user-details-container">
      <div className="edu-text-container">
        <div className="edu-bright-text">מאשר תוכן (לטענת המשתמש)</div>
        <div className="edu-dark-text">{edu.level}</div>
      </div>
      <div
        className="edu-text-container"
        style={{ justifyContent: 'flex-end' }}
      >
        <div className="edu-dark-text">0546150113</div>
      </div>
    </div>
  );
};

export default UserDetails;
