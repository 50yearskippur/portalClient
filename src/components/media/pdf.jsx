import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "./Pdf.css";

const Pdf = ({ file }) => {
  return (
    <div className="pdf-container">
      <Document file={file} loading={<div>Loading...</div>}>
        <Page pageNumber={1} renderTextLayer={false} width={290} />
      </Document>
    </div>
  );
};

export default Pdf;
