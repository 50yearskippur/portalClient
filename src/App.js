import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import pdfPage from "./assets/pdfs/pdfPage.pdf";
import PdfPreview from "./components/ItemComponents/PdfPreview/PdfPreview";

const items = [{ media: pdfPage, type: "pdf" }];

function App() {
  return (
    <div className="App">
      <NavBar />
      <PdfPreview pdfDetails={items[0]} />
    </div>
  );
}

export default App;
