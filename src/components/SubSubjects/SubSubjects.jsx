import "./SubSubjects.css";
import FileController from "../Media/FileController";
import rabit from "../../assets/img/rabit.jpg";

const SubSubjects = ({ subject }) => {
  return (
    <div className="subject-container">
      <div className="subject-title">{subject.title}</div>
      <div className="sub-subjects-container">
        {subject.subSubject.map((subSubject, index) => {
          return (
            <div key={`subSubject${index}`} className="sub-subject-container">
              <div className="sub-subject-details">
                <FileController
                  item={{ media: rabit, mediaType: "image" }}
                  style={{ width: "8.3vw", borderRadius: "6px" }}
                />
                <div className="sub-subject-content">
                  <div className="sub-subject-title">{subSubject.title}</div>
                  <div className="sub-subject-description">
                    {subSubject.description}
                  </div>
                </div>
              </div>
              <div className="sub-subject-edu-container">
                {subSubject.eduResourse.slice(0, 3).map((edu, index) => (
                  <div className="sub-subject-edu-img">
                    <FileController
                      key={`edu${index}`}
                      item={{ media: rabit, mediaType: "image" }}
                      style={{
                        width: "4.2vw",
                        height: "4.8vh",
                        borderRadius: "3px",
                      }}
                      // gradientStyle={{ background: "#18132B99", height: "100%" }}
                    />
                    {index === 2 && (
                      <div className="sub-subject-edu-number">{`+${
                        subSubject.eduResourse.length - 3
                      }`}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubSubjects;
