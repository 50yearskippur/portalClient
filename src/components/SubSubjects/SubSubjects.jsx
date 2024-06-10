import "./SubSubjects.css";
import FileController from "../Media/FileController";
import rabit from "../../assets/img/rabit.jpg";
import { useNavigate } from "react-router-dom";

const SubSubjects = ({ subject, subSubjects }) => {
  const navigate = useNavigate();
  // subSubjects[index].eduResourse[0]
  return (
    <div className="subject-container">
      <div className="subject-title">{subject.title}</div>
      <div className="sub-subjects-container">
        {subSubjects.map((subSubject, index) => (
          <div key={`subSubject${index}`} className="sub-subject-container">
            <div
              className="sub-subject-details"
              onClick={() =>
                navigate("/subSubject", {
                  state: {
                    item: {
                      media: rabit,
                      mediaType: "image",
                      subSubject: { title: "זירת סוריה" },
                      title: "טילים עם סלים",
                      type: "משחק",
                    },
                  },
                })
              }
            >
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
                <div className="sub-subject-edu-img" key={`edu${index}`}>
                  <FileController
                    key={`edu${index}`}
                    item={{ media: rabit, mediaType: "image" }}
                    style={{
                      width: "4.2vw",
                      height: "4.8vh",
                      borderRadius: "3px",
                    }}
                    gradientStyle={{
                      height: index === 2 ? "100%" : "0%",
                      backgroundColor: index === 2 && "#18132B99",
                    }}
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
        ))}
      </div>
    </div>
  );
};

export default SubSubjects;
