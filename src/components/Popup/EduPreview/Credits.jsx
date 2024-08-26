import './Credits.css';

const Credits = ({ edu }) => {
  return (
    <div className="credits-list">
      {edu.credits?.map((credit, index) => (
        <div className="edu-text-container" key={index}>
          <div className="edu-bright-text">{credit.role}</div>
          <div className=".edu-dark-text">{credit.user.fullName}</div>
        </div>
      ))}
    </div>
  );
};

export default Credits;
