import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import FileController from "./components/media/FileController";
import pdfPage from "./assets/pdfs/pdfPage.pdf";

const items = [{ media: pdfPage, type: "pdf" }];

function App() {
  return (
    <div className="App">
      <NavBar />
      <FileController item={items[0]} />
    </div>
  );
}

export default App;
