import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import pdfPage from "./assets/pdfs/pdfPage.pdf";
// import Subjects from "./components/Subjects/Subjects";
import FormPage from "./pages/FormPage";

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
