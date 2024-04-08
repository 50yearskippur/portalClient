import "./Subjects.css";
import TitlesList from "../TitlesList/TitlesList";

const Subjects = () => {
  const subjects = [
    {text: "Math"},
    {text: "Science"},
    {text: "History"},
    {text: "English"},
    {text: "Art"},
  ];
  const titleListStyle = {
    containerStyle: {marginTop: "5vh", marginRight: "25px"},
    color: "#5d5d5d",
  };
  return (
    <div className="subjects-container">
      <TitlesList
        titlesArray={subjects}
        getDefaultTitle={() => subjects[0]}
        showNumbers={true}
        style={titleListStyle}
      />
    </div>
  );
};

export default Subjects;
