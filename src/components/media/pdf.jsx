import React, {useState} from "react";
import {Document, Page} from "react-pdf";
import pdfFile from "./mapping.pdf";

function Pdf() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); // Set to the page you want to preview

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={pdfFile}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<div>Loading Preview...</div>}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default Pdf;
