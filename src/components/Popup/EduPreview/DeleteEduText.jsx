import "./DeleteEduText.css";

const DeleteEduText = ({ onClick }) => {
  return (
    <div className="edu-delete-text" onClick={onClick}>
      מחיקת תוצר
    </div>
  );
};

export default DeleteEduText;
