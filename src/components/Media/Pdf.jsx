// import { Document, Page } from "react-pdf";
// import "react-pdf/dist/Page/AnnotationLayer.css";
import './Pdf.css';
import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs';

// const Loading = () => {
//   return (
//     <div className="pdf-loading">
//       ..............................................................................
//     </div>
//   );
// };

const Pdf = ({ file, style }) => {
  return (
    <div className="pdf-container">
      <PDFViewer document={{ url: file }} style={style} />
      {/* <Document file={file} loading={Loading}>
        <Page pageNumber={1} renderTextLayer={false} width={style.width} />
      </Document> */}
    </div>
  );
};

export default Pdf;
