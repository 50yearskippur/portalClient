import React, { useState, useEffect, useRef } from "react";
import { Document, Page } from "react-pdf";
import "./ShowFullPdf.css";
// import PDFViewer from "pdf-viewer-reactjs";

const ShowFullPdf = ({ pdfDetails }) => {
  const [numPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const documentRef = useRef();

  // const onDocumentLoadSuccess = ({ numPages }) => {
  //   setNumPages(numPages);
  // };

  useEffect(() => {
    const currentDocument = documentRef.current;

    const handleScroll = () => {
      if (numPages && currentDocument) {
        const { scrollTop, scrollHeight, clientHeight } = currentDocument;
        const scrolled = scrollTop / (scrollHeight - clientHeight);
        setCurrentPage(Math.max(1, Math.ceil(scrolled * numPages)));
      }
    };

    if (currentDocument) {
      currentDocument.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentDocument) {
        currentDocument.removeEventListener('scroll', handleScroll);
      }
    };
  }, [numPages]);

  return (
    <>
      <p className="pdf-page-number">
        דף {currentPage} מתוך {numPages}
      </p>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div className="pdf-document" ref={documentRef}>
          {/* <PDFViewer document={{ url: pdfDetails.media }} /> */}
          {/* <Document
            file={pdfDetails.media}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<>Loading...</>}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderTextLayer={false}
                width={800}
              />
            ))}
          </Document> */}
        </div>
      </div>
    </>
  );
};

export default ShowFullPdf;
