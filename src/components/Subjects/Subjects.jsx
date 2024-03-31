import "./Subjects.css";
import TitlesList from "../TitlesList/TitlesList";

const Subjects = () => {
  const subjects = ["Math", "Science", "History", "English", "Art"];
  const titleListStyle = {
    containerStyle: {marginTop: "5vh", marginRight: "25px"},
    color: "#5D5D5D",
  };
  return (
    <div className="subjects-container">
      <TitlesList titlesArray={subjects} style={titleListStyle} />
    </div>
  );
};

export default Subjects;
