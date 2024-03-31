import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import pdfPage from "./assets/pdfs/pdfPage.pdf";
// import Subjects from "./components/Subjects/Subjects";
import FormPage from "./pages/FormPage";

const items = [
  {
    media: pdfPage,
    mediaType: "pdf",
    subSubject: "שלישות",
    title: "פורמט ריאיון אום",
  },
];

function App() {
  return (
    <div>
      <NavBar />
      <FormPage />
      {/* <Subjects /> */}
    </div>
  );
}

export default App;
