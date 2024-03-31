import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SubSubjects from "./components/SubSubjects/SubSubjects";
function App() {
  return (
    <div>
      <SubSubjects
        subject={{
          title: "משימה",
          subSubject: [
            {
              title: "1תת משימה",
              description: "תיאור 1",
              eduResourse: ["omer", "omer"],
            },
            {
              title: "2תת משימה",
              description: "תיאור 1",
              eduResourse: ["omer", "omer"],
            },
            {
              title: "3תת משימה",
              description: "תיאור 1",
              eduResourse: ["omer", "omer"],
            },
            {
              title: "4תת משימה",
              description: "תיאור 1",
              eduResourse: ["omer", "omer"],
            },
          ],
        }}
      />
    </div>
  );
}

export default App;
