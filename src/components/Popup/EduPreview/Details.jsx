const Details = ({ edu, uploadByUser }) => {
  return (
    <div className="edu-paragraph-container">
      {uploadByUser && (
        <div className="edu-text-container">
          <div className="edu-bright-text">הועלה על ידי</div>
          <div className="edu-dark-text">{edu.creator.fullName}</div>
        </div>
      )}
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
      {edu.type !== 'סיכום' && (
        <div className="edu-text-container">
          <div className="edu-bright-text">תיאור</div>
          <div className="edu-dark-text">{edu.description}</div>
        </div>
      )}
    </div>
  );
};

export default Details;
