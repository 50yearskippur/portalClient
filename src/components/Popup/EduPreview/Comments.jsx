import "./Comments.css";
import { useContext } from "react";
import EduResSection from "./EduResSection";
import { PopupContext } from "../../../store/popup-context";
import handlePropagation from "../../../utils/handlePropagation";
import EduPreviewTop from "./EduPreviewTop";
import DeleteEduText from "./DeleteEduText";
import backIcon from "../../../assets/media/Icons/backIcon.svg";
import EduPreview from "./EduResPreview";
import convertDateToString from "../../../utils/convertDateToString";

const MoreComments = ({ edu }) => {
  const { showPopup } = useContext(PopupContext);
  const iconDetails = {
    text: "לחזרה",
    icon: backIcon,
    onClick: () => {
      showPopup(<EduPreview edu={edu} />);
    },
  };
  return (
    <div className="edu-preview-content" onClick={(e) => handlePropagation(e)}>
      <EduPreviewTop edu={edu} iconDetails={iconDetails} />
      <EduResSection
        title={`${edu.comments.length} תגובות`}
        content={<Comments edu={edu} checkbox={true} />}
      />
      <DeleteEduText onClick={() => {}} text="מחיקה תגובות מסומנות" />
    </div>
  );
};

const Comments = ({ edu, checkbox = false }) => {
  const { showPopup } = useContext(PopupContext);
  return (
    <div className="comments-container">
      {edu.comments.map((comment, index) => (
        <div key={`comment ${index}`} className="comment-container">
          <div className="select-comment-container">
            {checkbox && (
              <input
                className="select-comment-input"
                type="checkbox"
                name="subscribe"
                value="newsletter"
              />
            )}
            <div className="edu-dark-text">{comment.content}</div>
          </div>
          <div className="comments-user-container">
            <div className="edu-dark-text">{comment.user.fullName}</div>
            <div className="comment-bottom-container">
              <div className="edu-bright-text">{comment.user.role}</div>
              <div className="edu-bright-text">
                {convertDateToString(comment.date)}
              </div>
            </div>
          </div>
        </div>
      ))}
      {!checkbox && (
        <div className="comments-more-container">
          <div className="edu-dark-text">{`סה"כ ${edu.comments.length} תגובות`}</div>
          <div
            className="edu-blue-text"
            onClick={() => showPopup(<MoreComments edu={edu} />)}
          >
            ראה הכל
          </div>
        </div>
      )}
    </div>
  );
};

export default Comments;
