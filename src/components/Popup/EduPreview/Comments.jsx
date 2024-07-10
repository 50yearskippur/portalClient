import "./Comments.css";

const Comments = ({ edu }) => {
  return (
    <div className="comments-container">
      {edu.comments.map((comment, index) => (
        <div key={`comment ${index}`} className="comment-container">
          <div className="edu-dark-text">{comment.content}</div>
          <div className="comments-user-container">
            <div className="edu-dark-text">{comment.user.fullName}</div>
            <div className="comment-bottom-container">
              <div className="edu-bright-text">{comment.user.role}</div>
              <div className="edu-bright-text">{comment.date}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="comments-more-container">
        <div className="edu-dark-text">{`סה"כ ${edu.comments.length} תגובות`}</div>
        <div className="edu-blue-text">ראה הכל</div>
      </div>
    </div>
  );
};

export default Comments;
