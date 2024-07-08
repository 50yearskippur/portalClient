const Details = ({ edu }) => {
  return (
    <div className="edu-paragraph-container">
      <div className="edu-row-container">
        <div className="edu-text-container">
          <div className="edu-bright-text">נושא</div>
          <div className="edu-dark-text">{edu.subject.title}</div>
        </div>
        <div className="edu-text-container">
          <div className="edu-bright-text">תת נושא</div>
          <div className="edu-dark-text">{edu.subSubject.title}</div>
        </div>
      </div>
      <div className="edu-text-container">
        <div className="edu-bright-text">תקציר</div>
        <div className="edu-dark-text">{edu.info}</div>
      </div>
    </div>
  );
};

export default Details;
