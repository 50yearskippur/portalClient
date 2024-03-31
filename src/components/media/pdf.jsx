import {Document, Page} from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "./Pdf.css";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        textAlign: "center",
        color: "white",
        backgroundColor: "#f9f9f9",
      }}
    >
      ..............................................................................
    </div>
  );
};

const Pdf = ({file, style}) => {
  console.log(style);
  return (
    <div className="pdf-container">
      <Document file={file} loading={Loading}>
        <Page pageNumber={1} renderTextLayer={false} width={style.width} />
      </Document>
    </div>
  );
};

export default Pdf;
