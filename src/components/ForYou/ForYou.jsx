import "./ForYou.css";
import Subjects from "../Subjects/Subjects";
import SubSubjects from "../SubSubjects/SubSubjects";

const ForYou = ({ subjects }) => {
  return (
    <div className="for-you-container">
      <Subjects subjects={subjects} />
      <SubSubjects
        subject={{
          title: "ארנב",
          subSubject: [
            {
              title: "יונקים",
              description: "כלבים קטנים",
              eduResourse: [{}, {}, {}, {}, {}],
            },
            {
              title: "יונקים",
              description: "כלבים קטנים",
              eduResourse: [{}, {}],
            },
          ],
        }}
      />
    </div>
  );
};

export default ForYou;
