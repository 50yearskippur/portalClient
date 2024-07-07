import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "./Pdf.css";

const Loading = () => {
  return (
    <div className="pdf-loading">
      ..............................................................................
    </div>
  );
};

const Pdf = ({ file, style }) => {
  return (
    <div className="pdf-container">
      <Document file={file} loading={Loading}>
        <Page pageNumber={1} renderTextLayer={false} width={style.width} />
      </Document>
    </div>
  );
};

export default Pdf;
